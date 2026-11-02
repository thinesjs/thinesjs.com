# thinesjs.com landing

A static landing page for https://thinesjs.com.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/thinesjs/thinesjs.com.git
    ```

2. Install dependencies:

    ```bash
    yarn install
    ```

3. Run the development server:

    ```bash
    yarn dev
    ```

4. Open the browser and navigate to `http://localhost:4321` to view the website.

## Note on typechecking

`yarn build` runs `astro build`, which does not typecheck. For example, adding
a name to `Icon.astro`'s `name` union without adding the matching entry to its
`paths` map will not fail the build — it produces a silently empty `<svg>` in
production instead. To restore typechecking, run
`yarn add -D @astrojs/check typescript` and add an `astro check` step to the
build; this was left out to keep devDependencies minimal.
