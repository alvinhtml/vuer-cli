<script setup lang="ts">

</script>
<template>
  <div id="stacks-section" class="section">
    <div class="container">
      <!--Stacks-->
      <div class="stacks">
        <tippy class="has-help-cursor" interactive placement="top">
          <div class="stack">
            <img src="/images/icons/stacks/vuejs.svg" alt="" />
          </div>
          <template #content>
            <StackPopoverContent
              :stack="{
                name: 'Vue 3',
                subtitle: 'Composition API',
                logo: '/images/icons/stacks/vuejs.svg',
                description:
                  'The Progressive JavaScript Framework for building user interfaces.',
                homepage: 'https://v3.vuejs.org/',
                github: 'https://github.com/vuejs/vue-next',
              }"
            />
          </template>
        </tippy>

        <tippy class="has-help-cursor" interactive placement="top">
          <div class="stack">
            <img src="/images/icons/stacks/vite.svg" alt="" />
          </div>
          <template #content>
            <StackPopoverContent
              :stack="{
                name: 'Vite',
                subtitle: 'Next Generation Frontend Tooling',
                logo: '/images/icons/stacks/vite.svg',
                description:
                  'Vite is a new breed of frontend build tool that significantly improves the frontend development experience.',
                homepage: 'https://vitejs.dev/',
                github: 'https://github.com/vitejs/vite',
              }"
            />
          </template>
        </tippy>

        <tippy class="has-help-cursor" interactive placement="top">
          <div class="stack">
            <img src="/images/icons/stacks/bulma.svg" alt="" />
          </div>
          <template #content>
            <StackPopoverContent
              :stack="{
                name: 'Bulma',
                subtitle: 'The modern CSS framework',
                logo: '/images/icons/stacks/bulma.svg',
                description:
                  'Bulma is a free, open source framework that provides ready-to-use frontend components.',
                homepage: 'https://bulma.io/',
                github: 'https://github.com/jgthms/bulma',
              }"
            />
          </template>
        </tippy>

        <tippy class="has-help-cursor" interactive placement="top">
          <div class="stack">
            <img src="/images/icons/stacks/sass.svg" alt="" />
          </div>
          <template #content>
            <StackPopoverContent
              :stack="{
                name: 'Sass',
                subtitle: 'Makes CSS fun again',
                logo: '/images/icons/stacks/sass.svg',
                description:
                  'Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more.',
                homepage: 'https://sass-lang.com/',
                github: 'https://github.com/sass/sass',
              }"
            />
          </template>
        </tippy>

        <tippy class="has-help-cursor" interactive placement="top">
          <div class="stack">
            <img src="/images/icons/stacks/typescript.svg" alt="" />
          </div>
          <template #content>
            <StackPopoverContent
              :stack="{
                name: 'Typescript',
                subtitle: 'Javascript enhanced',
                logo: '/images/icons/stacks/typescript.svg',
                description:
                  'TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications.',
                homepage: 'https://www.typescriptlang.org/',
                github: 'https://github.com/microsoft/TypeScript',
              }"
            />
          </template>
        </tippy>
      </div>

      <!--Title-->
      <div class="section-title has-text-centered">
        <h2 class="title is-2">Developer Experience</h2>
        <h4>A set of professional tools to build professional apps.</h4>
      </div>

      <!--Boxed Features-->
      <div class="boxed-features is-flat pb-6">
        <div class="flex-card light-bordered hover-inset">
          <div class="flex-cell is-bordered">
            <img src="/images/icons/stacks/vuejs-solo.svg" alt="" />
            <h3>Vue 3</h3>
            <p>
              Vue 3 and its powerful composition API makes your experience
              pleasant.
            </p>
          </div>
          <div class="flex-cell">
            <img src="/images/icons/stacks/typescript-square.svg" alt="" />
            <h3>Typescript</h3>
            <p>
              Typescript makes things much more simpler but remains
              optional.
            </p>
          </div>
          <div class="flex-cell is-bordered">
            <img src="/images/icons/stacks/vite.svg" alt="" />
            <h3>Vite JS</h3>
            <p>
              Vite 2 is blazing fast, does HOT reloading and parses all your
              components.
            </p>
          </div>
          <div class="flex-cell">
            <img src="/images/icons/stacks/vscode.svg" alt="" />
            <h3>VS Code Integration</h3>
            <p>
              Vuero is fully integrated with VS Code to help you produce
              quality checked code.
            </p>
          </div>
          <div class="flex-cell is-bordered">
            <img src="/images/icons/stacks/eslint.svg" alt="" />
            <h3>ES Lint</h3>
            <p>
              ES Lint watches your javascript code and makes sure it matches
              the best standards.
            </p>
          </div>
          <div class="flex-cell is-bordered">
            <img src="/images/icons/stacks/prettier.svg" alt="" />
            <h3>Prettier</h3>
            <p>
              Prettier tidies your code and makes it look much more cleaner
              and easier to read.
            </p>
          </div>
          <div class="flex-cell">
            <img
              class="light-image-block-l"
              src="/images/icons/stacks/stylelint.svg"
              alt=""
            />
            <img
              class="dark-image-block-l"
              src="/images/icons/stacks/stylelint-reverse.svg"
              alt=""
            />
            <h3>Stylelint</h3>
            <p>
              Stylelint looks for poorly formatted styles and fixes
              everything for you.
            </p>
          </div>
          <div class="flex-cell">
            <img src="/images/icons/stacks/iconify.svg" alt="" />
            <h3>Iconify</h3>
            <p>
              Iconify displays icons inside your code editor so you always
              know what you're doing.
            </p>
          </div>
          <div class="flex-cell">
            <img src="/images/icons/stacks/cypress.svg" alt="" />
            <h3>Cypress</h3>
            <p>
              Cypress handles end to end testing to make sure everything
              works as expected.
            </p>
          </div>
          <div class="flex-cell">
            <img src="/images/icons/stacks/pnpm-yarn.svg" alt="" />
            <h3>Pnpm + Yarn</h3>
            <p>
              Vuero works very well with Pnpm or Yarn for efficient
              dependency management.
            </p>
          </div>
          <div class="flex-cell">
            <img src="/images/icons/stacks/docker-whale.svg" alt="" />
            <h3>Docker</h3>
            <p>
              Vuero ships with a Docker file to make your test deployments
              faster and easier.
            </p>
          </div>
          <div class="flex-cell">
            <img src="/images/icons/stacks/robot.svg" alt="" />
            <h3>Robot Friendly</h3>
            <p>
              Fully featured with structured data. Help your site display in
              richer features in search results.
            </p>
          </div>
          <div class="flex-cell">
            <img src="/images/icons/misc/success.svg" alt="" />
            <h3>Props Validation</h3>
            <p>
              Vuero base components ship with props validation to prevent
              unexpected errors.
            </p>
          </div>
          <div class="flex-cell">
            <img src="/images/icons/misc/error.svg" alt="" />
            <h3>Error Handling</h3>
            <p>
              While developping Vuero, we focused on providing an up to
              standards error handling.
            </p>
          </div>
          <div class="flex-cell">
            <img src="/images/icons/misc/folder.svg" alt="" />
            <h3>Project Structure</h3>
            <p>
              A clean and organized project structure lets you find any file
              or content quickly.
            </p>
          </div>
          <div class="flex-cell">
            <img src="/images/icons/misc/documentation.svg" alt="" />
            <h3>Component Guide</h3>
            <p>
              A full component / plugin documentation with a lot of code
              examples lives inside Vuero.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>