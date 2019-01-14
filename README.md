# Categorization Component

> This component uses sorting criteria to create and render lists of videos.The three basic sorting criteria are: Recent broadcasts, Recent highlights & uploads, and Popular clips. More sorting criteria may be added as the project progresses. The lists that the component renders are 1-1 with the sorting criteria, i.e., there will be one list for each sorting criterion.

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

> TBD

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

From within root directory, execute `schema.sql`:

```sh
mysql -u root < database/schema.sql
```

Now run the seed script:

```sh
npm run seed
```



