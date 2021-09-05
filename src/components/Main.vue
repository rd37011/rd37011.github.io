<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12"> </v-col>
      <v-col class="mb-4">
        <h2 class="mb-3">Hi, I'm Ryan!</h2>
        <h3 class="mb-3">
          I'm currently a software engineer working at Capital One.
        </h3>
        <p class="subheading font-weight-regular subheader">
          I'm a globally focused engineer passionate about a variety of subjects
          within the field of CS, such as natural language processing, cloud
          computing, computer architecture, and learning languages. My dream is
          to one day attend grad school to conduct research on computational
          linguistics, so that I can tackle problems I'm interested in. I hope
          to be able to weave my expertise in CS with my experience with
          languages, along with my interests in ML, NLP, and language learning!
        </p>
        <v-divider></v-divider>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 id="about" class="font-weight-bold mb-3">About me</h2>
        <v-row justify="center" class="subheader">
          Tropically grown in Miami, Florida! I graduated from the University of
          Miami in 2019 with a Bachelor's of Science degree in Computer Science,
          with minors in Mathematics and Japanese. Currently based out of Tampa,
          Florida. I have a variety of interests beyond CS, including travel,
          soccer (COYG) history (specifically Japanese /
          European), cars, horology, gaming, and cooking.
        </v-row>
      </v-col>
      <v-col class="mb-5" cols="12">
        <h2 id="experience" class="font-weight-bold mb-3">Experience</h2>
        <v-row justify="center">
          <v-timeline>
            <v-timeline-item large>
              <template v-slot:icon>
                <v-avatar>
                  <img src='../assets/company-assets/c1.png'/>
                </v-avatar>
             </template>
              <template v-slot:opposite>
                <span class="date">July 2020 - Present</span>
              </template>
              <v-card class="elevation-2">
                <v-card-title class="header"
                  >Senior Associate Software Engineer</v-card-title
                >
                <p class="exp_subheader">Capital One Financial</p>
                <v-card-text>
                  <ul class="ul-align">
                    <li>
                       Utilized Node and Angular with Django to build out web forms with the ability to create and
update entries, leveraging the Enterprise GitHub API to automate issue creation, thereby
shortening a days-long process to a few hours.
                    </li>
                    <li>
                      Providing technical leadership to TIP interns by conducting code reviews, reviewing PRs, devising
application architecture, and helping them to grow by exposing them to new technologies.
                    </li>
                     <li>
                      Acted as an internal front-end consultant to other teams in the organization, and helped them to create functional, extensible web platforms.
                    </li>
                    <li>
                      Utilized Node, Vue and inner-sourced tools to create
                      responsive, user friendly web pages with VueX for state
                      management, and leveraging eAPIs to facilitate and deliver
                      good UX under a federated model.
                    </li>
                    <li>
                      Led frontend architecture discussions and efforts to
                      performance test critical APIs.
                    </li>
                    <li>
                      Led efforts to accessibility test to ensure compliance to WCAG and equal accessibility to our site.
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item large>
                <template v-slot:icon>
                <v-avatar>
                  <img src='../assets/company-assets/c1.png'/>
                </v-avatar>
             </template>
              <template v-slot:opposite>
                <span class="date">August 2019 - July 2020</span>
              </template>
              <v-card class="elevation-2">
                <v-card-title class="header"
                  >Associate Software Engineer</v-card-title
                >
                <p class="exp_subheader">Capital One Financial</p>
                <v-card-text>
                  <ul class="ul-align">
                    <li>
                      Worked as part of a full-stack team leveraging AWS S3,
                      Lambda, Amazon Connect, Lex, and Polly to build a pilot
                      project as part of an effort to integrate NLP and
                      automation into the customer calling experience.
                    </li>
                    <li>
                      Built/own a lambda using Node.js to test accuracy of
                      speech utterances with capability to query S3 and deliver
                      statistics on missed utterances, greatly aiding testing,
                      debugging vis-a-vis Amazon Lex, and saving development
                      time.
                    </li>
                    <li>
                      Built lambdas in Python to assist
                      with AWS DB compliance issues, collectively saving weeks of
                      work to delete non compliant snapshots.
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item large>
              <template v-slot:icon>
                <v-avatar>
                  <img src='../assets/company-assets/tf.png'/>
                </v-avatar>
             </template>
              <template v-slot:opposite>
                <span class="date">January 2019 - May 2019</span>
              </template>
              <v-card class="elevation-2">
                <v-card-title class="header">Web Developer Intern</v-card-title>
                <p class="exp_subheader">Tickmark Inc.</p>
                <v-card-text>
                  <ul class="ul-align">
                    <li>
                      Leveraged React, TypeScript and SASS to build dynamic,
                      responsive web pages with MobX for state management via
                      graphic design specs subject to change under a fast-paced
                      startup environment.
                    </li>
                    <li>
                      Participated in active architecture discussions with
                      software leads and CTO to flesh out scalable and
                      cost-effective solutions to effectively serve an
                      e-commerce site accessed by over 50,000 customers.
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item large>
             <template v-slot:icon>
                <v-avatar>
                  <img src='../assets/company-assets/jpmc.png'/>
                </v-avatar>
             </template>
              <template v-slot:opposite>
                <span class="date">June 2018 - August 2018</span>
              </template>
              <v-card class="elevation-2">
                <v-card-title class="header"
                  >Summer Technology Analyst
                </v-card-title>
                <p class="exp_subheader">JPMorgan Chase & Co.</p>
                <v-card-text>
                  <ul class="ul-align">
                    <li>
                      Built a UI to help streamline internal processes with
                      developers as end users, on React, Spring Boot, and an
                      internal React toolkit, while learning all technologies on
                      the job.
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-row>
      </v-col>
      <v-col class="mb-5" cols="12">
        <h2 id="projects" class="font-weight-bold mb-3">Projects</h2>
        <v-row class="projects-container">
          <div class="d-flex" width="100%" flex-no-wrap>
            <v-card class="mx-auto my-12" width="400">
              <v-img
                height="150"
                src="../assets/seivom2.png"
              >
              </v-img>
              <v-card-title>Seivom</v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0"> </v-row>
                <div>
                  A secure, full-stack web application built using Vue, NodeJS,
                  and AWS to display movies, along with adding comments and
                  reviews, similar to IMDB, with the capability to create, read,
                  update, and delete movie entries from DynamoDB. Implemented
                  authentication and permissions using JWT, plus separate
                  experiences for both admins and users. The backend was built
                  on AWS, using Amplify, provisioned API gateway, lambdas and
                  database.
                </div>
              </v-card-text>
            </v-card>
            <v-card class="mx-auto my-12" max-width="400">
              <v-img
                height="150"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>

              <v-card-title>Recipesource</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0"> </v-row>

                <div>
                  A crowdsourcing site to aggregate the best tips on recipes. 
                  Coming soon!
                </div>
              </v-card-text>
            </v-card>
          </div>
          <v-divider></v-divider>
          <v-col class="mb-5" cols="12">
            <h2 id="projects" class="font-weight-bold mb-3">Contact me:</h2>
            <v-row class="contact-container">
          <v-card
            class="mx-auto"
            max-width="400"
            tile
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Email me here:</v-list-item-title>
                <v-list-item-subtitle>
                  rd37011@gmail.com
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  or my alternate email: rxd234@miami.edu
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
                          <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>This page is still under construction! </v-list-item-title>
        <v-list-item-subtitle>Please check back later :)</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
          </v-card>
          </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Main',

  data: () => ({})
}
</script>

<style scoped>
@font-face {
  font-family: Alata;
  src: url('../../public/Alata-Regular.ttf');
}
@font-face {
  font-family: NotoSerif-Bold;
  src: url('../../public/NotoSerifJP-Bold.otf');
}
@font-face {
  font-family: NotoSerif-Light;
  src: url('../../public/NotoSerifJP-Light.otf');
}
.header {
  font-family: NotoSerif-Bold;
}
.subheader {
  font-family: NotoSerif-Light;
}
.exp_subheader {
  font-family: NotoSerif-Light;
  margin-bottom: 0;
  text-align: left;
  padding-left: 20px;
}
.ul-align {
  text-align: left;
  font-family: NotoSerif-Light;
}
.date {
  font-family: NotoSerif-Bold;
}
h2 {
  font-family: NotoSerif-Light;
}
h3 {
  font-family: NotoSerif-Light;
}
.projects-container {
  display: contents;
  font-family: NotoSerif-Light;
}
</style>
