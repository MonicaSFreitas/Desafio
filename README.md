# ProjetoTeia

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Estrutura do projeto
O projeto TEIA é uma aplicação web desenvolvida em Angular 17. A estrutura do projeto segue padrões comuns do Angular e utiliza Node.js 18.13 para executar tarefas de desenvolvimento.

Diretórios:
•	angular: Contém os arquivos de código fonte do Angular.
•	assets: Contém arquivos estáticos, como imagens e ícones.
•	node_modules: Contém as dependências do projeto instaladas pelo Node.js.

Arquivos:
•	angular.json: Arquivo de configuração do Angular. Define configurações como nome do aplicativo, pasta de saída e dependências.
•	package.json: Arquivo de metadados do projeto. Define o nome do projeto, versão, licença e dependências do Angular e Node.js.
•	README.md: Arquivo de documentação do projeto.
•	server.ts(opcional): Arquivo principal do servidor Node.js para servir a aplicação.
•	tsconfig.app.json: Arquivo de configuração do TypeScript para o aplicativo. Define opções de compilação específicas para o código da aplicação.
•	tsconfig.json: Arquivo de configuração do TypeScript para o projeto. Define opções de compilação para todo o código TypeScript.
•	tsconfig.spec.json: Arquivo de configuração do TypeScript para os testes. Define opções de compilação específicas para os arquivos de teste.

Angular 17
Angular 17 é uma versão específica do framework Angular. O projeto utiliza o Angular 17 para construir a interface gráfica da aplicação web.

Node.js 18.13
Node.js 18.13 é a versão específica do Node.js usada para executar as tarefas de desenvolvimento do projeto.

Componentes do projeto TEIA
•	fotos.component.html: Define a estrutura HTML do componente FotosComponent, responsável por exibir uma lista de fotos paginada usando o Material Design da Google.
•	fotos.component.ts: Define a lógica de negócio do componente FotosComponent, incluindo a interação com o serviço FotosService para obter dados e realizar a paginação.
•	fotos.service.ts: Define o serviço FotosService responsável por buscar dados de fotos de uma API externa utilizando o HttpClient do Angular.
•	header.component.html: Define a estrutura HTML do componente HeaderComponent, responsável por exibir o cabeçalho da aplicação com logo, menu e botões de ação.
•	header.component.ts: Define a lógica do componente HeaderComponent, como o carregamento da logo da aplicação.
•	home.component.html: Define a estrutura HTML do componente HomeComponent, que neste caso exibe apenas o componente FotosComponent.
•	home.component.ts: Define a lógica do componente HomeComponent, podendo ser usada para inicializar dados específicos da página inicial.
•	app.component.html: Define a estrutura HTML do componente principal da aplicação (AppComponent), que organiza o layout da aplicação com o header, a rota principal (<router-outlet>) e o footer.
•	app.component.ts: Define a lógica do componente principal da aplicação (AppComponent), podendo ser usada para configurações globais da aplicação.
•	app.module.ts: Define o módulo principal do Angular (AppModule), responsável por declarar componentes, diretivas, pipes e serviços utilizados na aplicação.

Conclusão
Não foi possível implantar todas as funcionalidades desejadas devido ao tempo e necessidade de maiores conhecimentos, porém foi feito tudo o que foi possível.
