<template>
  <div v-if="post" class="edit-smoothie container">
    <h2 class="center-align indigo-text">Edit {{ post.ui }} Job-Post</h2>
    <form @submit.prevent="updateJob">
      <div class="field title">
        <label for="ui">Job title:</label>
        <input type="text" name="ui" v-model="post.ui" />
      </div>
      <div
        v-for="(ing, index) in post.ingredients"
        class="field ingredient"
        :key="index"
      >
        <label for="ingredient">Skill:</label>
        <input
          type="text"
          name="ingredient"
          v-model="post.ingredients[index]"
        />
        <i class="material-icons delete" @click="deleteSkl(ing)">delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add a skill:</label>
        <input
          type="text"
          name="add-ingredient"
          @keydown.tab.prevent="addSkill"
          v-model="another"
        />
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn deep-orange darken-1">Update Post</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '../firebase/init';
import slugify from 'slugify';
export default {
  name: 'EditPost',
  data() {
    return {
      post: null,
      another: null,
      feedback: null
    };
  },
  methods: {
    updateJob() {
      if (this.post.ui) {
        this.feedback = null;
        // create a slug
        this.post.slug = slugify(this.post.ui, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });

        // save Job to firebase and retrive in app
        db.collection('web-designer')
          .doc(this.post.id)
          .update({
            ui: this.post.ui,
            ingredients: this.post.ingredients,
            slug: this.post.slug
          })
          .then(() => {
            this.$router.push({ path: '/' });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.feedback = 'You must enter a job title';
      }
    },
    addSkill() {
      if (this.another) {
        this.post.ingredients.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = 'You must enter a value to an an ingredient';
      }
    },
    deleteSkl(ing) {
      this.post.ingredients = this.post.ingredients.filter(skl => {
        return skl != ing;
      });
    }
  },
  created() {
    let ref = db
      .collection('web-designer')
      .where('slug', '==', this.$route.params.post_slug);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.post = doc.data();
        this.post.id = doc.id;
      });
    });
  }
};
</script>

<style>
.edit-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.edit-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}
.edit-smoothie .field {
  margin: 20px auto;
  position: relative;
}
.edit-smoothie .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>
