<template>
    <div class="timeline">
        <div class="timeline-block" v-for="event in events">
			<div class="timeline-block__img">
				<img src="https://vignette.wikia.nocookie.net/logopedia/images/1/1b/SmashBall.svg/revision/latest/scale-to-width-down/200?cb=20171205064921" alt="Picture">
			</div> <!-- cd-timeline-img -->

			<div class="timeline-block__content">
				<p class="timeline-block__title">{{event.title}}</p>
				<p v-if="event.content" class="timeline-block__desc">{{event.content}}</p>
				<span class="timeline-block__date">Deadline: {{event.deadline}}</span>
			</div> <!-- cd-timeline-content -->
		</div>
    </div>
</template>

<script>
export default {
    props: ['events']
}
</script>

<style lang="scss" scoped>
    .timeline {
        margin-top: 3em;
        margin-bottom: 3em;
        position: relative;
        padding: 2em 0;
        width: 90%;
        max-width: 1170px;
        margin: 0 auto;


        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 18px;
            height: 100%;
            width: 4px;
            background: #d7e4ed;
        }

    }

    .timeline-block {
        margin: 4em 0;
        position: relative;

        &__img {
            background: #1986ff;
            position: absolute;
            top: 0;
            left: 0;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            box-shadow: 0 0 0 4px #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
            display: flex;
            justify-content: center;
            align-items:center;
            padding: 7px;
            box-sizing: border-box;

            img {
                filter: invert(100%);
            }
        }

        &__content {
            position: relative;
            margin-left: 60px;
            background: #F5F5F5;
            border-radius: 0.25em;
            padding: 1em;
            box-shadow: 5px 2px 5px 5px #E0E0E0;
            margin-right: 30px;

            &::before {
                content: '';
                position: absolute;
                top: 7px;
                right: 100%;
                height: 0;
                width: 0;
                border: 16px solid transparent;
                border-right: 16px solid #F5F5F5;
            }
        }

        &__title {
            font-family: "Open Sans", sans-serif;
            font-weight: bold;
            color: #303e49;
            font-size: 1.25rem;
            border: none !important;
            padding: 0;
            margin-top: 0em;
        }

        &__desc {
            margin: 1em 0;
            line-height: 1.6;
            font-size: 1rem;
        }

        &__date {
            color: #7f8c97;
        }
    }
</style>
