# Case Makasí

### Clonar repositório

1. Clone o repositório

- Use o comando: `git clone git@github.com:raynarastg/case-makasi.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd case-makasi`

2. Instale as dependências

- `npm install`.

### Rodar aplicação no browser

```bash
  npm run start
```

- Abra [http://localhost:3000](http://localhost:3000) para ver a aplicação no browser.

### Executar testes

```bash
  npm run test
```

<details><summary><strong> Ferramentas e Libs utilizadas no projeto </strong></summary><br/>

<strong>Create React App</strong>

- Para criar o projeto inicial e suas configurações

<strong>React Router Dom</strong>

- Faz parte dos requisitos e auxilia na gestão dos recursos de rota, como path, params, entre outros.

<strong>TypeScript</strong>

- Tipagem do retorno da API e das props dos componentes e bibliotecas

<strong>React Hook Form</strong>

- Facilita o gerenciamento do estado do formulário, dos erros, do envio (submit) etc.

<strong>Stitches</strong>

- Tokens de cor, tamanho, fonte, entre outros, que facilitam a tematização futura e a componentização com variantes. Além disso, sua tipagem é muito boa. Tenho utilizado esse recurso em meus últimos projetos e, por isso, decidi utilizá-lo novamente.

<strong>React Icons</strong>

- Escolhi essa biblioteca de ícones, pois ela dá acesso a várias outras bibliotecas e a diversos ícones.

<strong>Context API</strong>

- Preferi utilizar o recurso de params da URL do React Router DOM para acionar a consulta da API do GitHub diretamente na página de perfil, em vez do evento de submit do formulário, para permitir o compartilhamento de URLs e o acesso ao perfil sem passar pela página inicial (se o usuário assim desejar). Não sei se a intenção de ter as rotas 'home' e 'perfil' era testar o compartilhamento de estados e contextos do usuário entre as páginas, porém, utilizei a Context API para gerenciar o estado entre os componentes. Utilizaria a mesma solução para compartilhar informações entre as rotas se fosse um dos itens do requisito.

<strong>Jest</strong>

- Os testes estão bem simples, testando a integração dos componentes com base na resposta da API do GitHub do usuário. Como era um recurso adicional (nice to have), foquei em realizar pelo menos esses testes.
</details>
