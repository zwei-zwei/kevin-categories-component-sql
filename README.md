<<<<<<< HEAD
# kevin-categories-component-sql
=======
# Categorization Component

> This component uses sorting criteria to create and render lists of videos. The three basic sorting criteria are: Recent broadcasts, Recent highlights & uploads, and Popular clips. The lists that the component renders are 1-1 with the sorting criteria, i.e., there will be one list for each sorting criterion.

## Related Projects

  - https://github.com/RPT10-TACO-TUESDAY/anna-chat-component
  - https://github.com/RPT10-TACO-TUESDAY/milena-menu-bar-component
  - https://github.com/RPT10-TACO-TUESDAY/faris-video-service
  - https://github.com/RPT10-TACO-TUESDAY/

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> This component uses Webpack as its build process. If desired, this component can be rendered as a static page. To build a `bundle.js` that can be used as a static page, follow the instructions in the comments of `database/gameSeedScript`, `database/index`, `server/server`, and `client/components/Categorized_Lists`. The bundle can be found in `public`.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 8.9.4

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Seeding Database

MySQL 5.7 is required.

From within root directory, execute `gameDataSchema.sql`:

```sh
mysql -u root -p < database/gameDataSchema.sql
```

Now run the seed script:

```sh
npm run seed-games
```

>>>>>>> 1eeb0f56ed2dd5384e5353f0912e6ba4fcc0141e
