<template>
  <div class="add-smoothie container z-depth-1">
    <h2 class="center-align indigo-text">New Job Post</h2>

    <form @submit.prevent="postJob">
      <div class="field title">
        <label for="ui">Job title:</label>
        <input type="text" name="ui" v-model="ui" />
      </div>

      <div v-for="(ing, index) in skills" class="field ingredient" :key="index">
        <label for="ingredient">Skill:</label>
        <input type="text" name="ingredient" v-model="skills[index]" />
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
        <button class="btn deep-orange darken-1">Post Job</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '../firebase/init';
import slugify from 'slugify';
export default {
  data() {
    return {
      ui: null,
      skills: [],
      another: null,
      feedback: null,
      slug: null
    };
  },
  methods: {
    postJob() {
      if (this.ui) {
        this.feedback = null;
        // create a slug
        this.slug = slugify(this.ui, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });

        // save Job to firebase
        db.collection('web-designer')
          .add({
            ui: this.ui,
            ingredients: this.skills,
            slug: this.slug
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
        this.skills.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = 'You must enter a value to an an ingredient';
      }
    },

    deleteSkl(ing) {
      this.skills = this.skills.filter(skl => {
        return skl != ing;
      });
    }
  }
};
</script>

<style>
.add-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}
.add-smoothie .field {
  margin: 20px auto;
  position: relative;
}
.add-smoothie .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>
