<img src="public/images/black_icon.ico" width="80" ><img> 

# RoBorregos Web     dd            


Front-end web app for the official RoBorregos' (international robotics team) web site.
Developed by RoBorregos' members and colaborators, in order to publish general
information about the team, sponsors, news, competitions and related content.
You can consult the application on production at [roborregos.com](https://roborregos.com) or
[roborregos.mx](https://roborregos.mx).

## Table of contents

- [RoBorregos Web](#roborregos-web)
  - [Table of contents](#table-of-contents)
  - [Project details](#project-details)
    - [Development team](#development-team)
    - [Environment URLs](#environment-urls)
    - [Management tools](#management-tools)
  - [Development](#development)
    - [VSCode setup](#vscode-setup)
    - [Setup](#setup)
    - [Running the stack for development](#running-the-stack-for-development)
    - [Stopping services](#stopping-services)
    - [Check your code](#check-your-code)

## Project Details

### Development team

| Name                    | Email                                                               | Github                                                       | Role      |
| ----------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------ | --------- |
| Aurora Tijerina Berzosa | [auro.tj@gmail.com](mailto:auro.tj@gmail.com)                       | [@aurotb](https://github.com/aurotb)                         | Developer |
| Ricardo Chapa Romero    | [ricardochaparomero@gmail.com](mailto:ricardochaparomero@gmail.com) | [@RicardoChapaRomero](https://github.com/RicardoChapaRomero) | PM        |
| José Alfonso Cisneros   | [joseacisnerosm@gmail.com](mailto:joseacisnerosm@gmail.com)         | [@Josecisneros001](https://github.com/Josecisneros001)       | Developer |
| Omar Ulises Montiel     | [omarume@gmail.com](mailto:omarume@gmail.com)                       | [@OUMontiel](https://github.com/OUMontiel)                   | Developer |
| Ana Lucía Garza         | [analuciagarzamtz@gmail.com](mailto:analuciagarzamtz@gmail.com)     | [@AnaGarza](https://github.com/AnaGarza)                     | Designer  |

### Environment URLs

- **Production** - [roborregos.com](https://roborregos.com)

### Management tools

You should ask for access to these tools if you don't have it already:

- [Github repo](https://github.com/gallosanchez23/roborregos-web)
- [Heroku](https://www.heroku.com/)
- [InVision](https://claragutierrez948964.invisionapp.com/prototype/RoBorregos-Web-ck7wek80a00nuq301lmd3k920?v=LLi6aocBvdMc49RvTuq1sg%3D%3D&linkshare=urlcopied)
- [Google Drive](https://drive.google.com/drive/folders/1dZeA8SSFkDSlj61sY3vJiCqCYluquqlw?usp=sharing)

## Development

### VSCode setup

For the development of the project the following tools will be used:

- [ESLint](https://eslint.org/): Following Airbnb's style and using the es2020 standard.
- [Flow](https://flow.org/): A static type checker for Javascript.
- [Babel](https://babeljs.io/): A javascript compiler, which is required for Flow.
- [Jest](https://jestjs.io/): The main Javascript test framework.

It is strongly recommended to use VSCode in order tu automatize some of the checks used by the tools above mentioned. For that, install the following extension:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): to check automatically syntax errors and fix them.

**_NOTE: The following are not as strongly recommended, but are helpful too._**

- [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode): to show flow's errors on intellisense.
- [Babel ES6/ES7](https://marketplace.visualstudio.com/items?itemName=dzannotti.vscode-babel-coloring): it helps to visualize better the code in the most recent standard.

Once installed, everything should be running smoothly, because the setting.json is already configured.

### Project setup

Before setting up the project, you should have installed the following development tools:

- [Git](https://git-scm.com/downloads)
- [Docker](https://runnable.com/docker/getting-started/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Plis](https://github.com/IcaliaLabs/plis) (optional, but highly recommended)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable)

Once you have installed the required third-party software, you can follow this steps:

**_NOTE: You may need sudo privileges to run some of these commands._**

1. Clone the project repository on your local machine.

   SSH:

   ```bash
   $ git clone git@github.com:gallosanchez23/roborregos-web.git
   ```

   or HTTPS:

   ```bash
   $ git clone https://github.com/gallosanchez23/roborregos-web.git
   ```

2. You will need to create the node_modules directory needed to run react apps.

   ```bash
   $ yarn install
   ```

3. Create the Docker image.

   `plis`:

   ```bash
   $ plis build
   ```

   `docker-compose`:

   ```bash
   $ docker-compose build
   ```

### Running the stack for development

In your terminal, run:

`plis`:

```bash
$ plis start frontend-web && plis attach frontend-web
```

`docker-compose`:

```bash
$ docker-compose up
```

This command will start the frontend application and display the logs on your terminal. Use `Ctrl + C` to exit the logs and turn the application down. Otherwise, in order to run the service in the background, just run:

`plis`:

```bash
$ plis start frontend-web
```

`docker-compose`:

```bash
$ docker-compose up -d
```

If the service is already running, you can run the command `plis attach frontend-web` to attach current service's logs.

**_NOTE: You can allways run `plis run frontend-web bash` or `docker-compose run frontend-web bash` commands to enter the container's console._**

### Stopping services

In order to stop `roborregos-frontend-web` entirely you can run:

`plis`:

```bash
$ plis stop
```

`docker-compose`:

```bash
$ docker-compose stop
```

If you want to stop the services and remove the containers:

`plis`:

```bash
$ plis down
```

`docker-compose`:

```bash
$ docker-compose down
```

If you only want to stop one service in particular, you can specify it with the following command:

`plis`:

```bash
$ plis stop frontend-web
```

`docker-compose`:

```bash
$ docker-compose stop frontend-web
```

### Check your code

Before uploading any code to the repository, be sure to run the following checks:

1. **Pass the eslint checker.** This is done automatically if you've installed the vscode extension. However, to do a manual check, simply run:

```bash
$ yarn eslint src
```

2. **Pass the flow checker.** This could be done automatically if you've installed the vscode extension. However, it is good to do a manual check. For that, first check that your files have the following comment on the first line:

```
// @flow
```

This comment tells flow to check the file. Finally simply run:

```bash
$ yarn flow check src
```

Or insted of `src`, you can select the specific file. I.e. `src/App.js`

Alternatively, one can also run the `eslint-check` and `flow-check` scripts.


3. **Pass the tests** This could be the most important step of all, because it ensures that nothing has been broken with your changes. To perform the check, run:

```bash
$ yarn test
```

Also, please remember to add the appropriate tests whenever you add a new functionality.

**_NOTE: If you strongly disagree with one of the errors, please talk to the PM [@RicardoChapaRomero](https://github.com/RicardoChapaRomero) about it, and this could become a rule exception_**
