<template>
    <div
            class="content"
            style="background: url('https://media.hitmaps.com/img/backgrounds/menu_bg.jpg') no-repeat center center fixed; background-size: cover"
    >
        <div class="inner-content">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <hr>
            <img
                    src="/img/404.gif"
                    alt="Janus Being Attacked With Muffins"
            />
            <br />
            <a
                    style="font-size: .6em; color: white"
                    href="https://www.reddit.com/r/HiTMAN/comments/ai5ao0/death_by_muffins/"
            >
                u/AJNguyenYT on Reddit
            </a>
            <p>We couldn't find the page you were looking for. If this continues, please let us know via one of the social networks in the footer below.</p>
        </div>
        <div class="home-button">
            <router-link :to="{ name: 'home' }">
                <game-button>
                    <img src="/img/game-icons/campaign.png"
                         class="normal img-fluid"
                         alt="Return Home" />
                    <img src="/img/game-icons/campaign-inverted.png"
                         class="inverted img-fluid"
                         alt="Return Home"
                    />
                    Home
                </game-button>
            </router-link>
        </div>
    </div>
</template>

<script>
import GameButton from "../components/GameButton";

export default {
    name: '404',
    title: 'Page Not Found',
    components: {GameButton}
}
</script>
<style lang="scss" scoped>
    .content {
        > .home-button {
            margin: 20px;

            a:hover {
                text-decoration: none;
            }
        }

        > .inner-content {
            background-color: white;
            margin: 20px;
            padding: 20px;
            font-family: 'nimbus_sans_lbold', sans-serif;

            h1 {
                text-transform: uppercase;
            }

            h2 {
                font-size: 1.25rem;
                text-transform: uppercase;
            }

            p {
                font-family: 'Roboto', 'Arial', sans-serif;
                font-weight: lighter;
            }

            a {
                color: #000;
            }
        }
    }

    #ppBody {
        font-size: 11pt;
        width: 100%;
        margin: 0 auto;
        text-align: justify;
    }

    #ppHeader {
        font-size: 21pt;
        width: 100%;
        margin: 0 auto;
    }

    .ppConsistencies {
        display: none;
    }
</style>
