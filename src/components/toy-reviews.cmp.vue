<template>
  <section class="toy-reviews">
      <pre>{{reviews}}</pre>
  </section>
</template>

<script>
export default {
    name: 'toy-reviews',
    data(){
        return {
            reviews: [
                {
                    title: 'Legitimately excellent shovel. Kid size, but works for real shoveling',
                    txt: 'This is an excellent shovel. It’s a great size and weight for our 4 year old, and honestly we borrow it for certain shoveling jobs because it works better than many adult shovels. It’s very sturdy. What a pleasure to have found something that isn’t made dumb/ineffective because it’s made for kids. Can’t recommend it enough!',
                    rating: 5,
                    date: 1647378321992,
                    by: 'z'
                },
                {
                    title: 'greatest winter gift for any kid under 10',
                    txt: "they think you're giving them a present but for you it's the gift that keeps on giving when the kids clear the snow off the sidewalk",
                    rating: 5,
                    date: 1647378321992,
                    by: 'Jim'
                },
                {
                    title: 'Must have northern kids',
                    txt: "Cheap but good quality shovel for 3yr old. Could have offered various colors. Very easy to handle and it’s light in weight.",
                    rating: 3,
                    date: 1647378321992,
                    by: 'AK'
                }
            ]
        }
    }
}
</script>

<style>

</style>