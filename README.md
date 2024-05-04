[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) [![Master](https://github.com/lab77store/store/actions/workflows/push.yml/badge.svg?branch=master)](https://github.com/lab77store/store/actions/workflows/push.yml)

# Para rodar o projeto

Primeiro execute: `yarn` isso irá instalar o lerna e todos os pacotes.

- `yarn clean`: limpa todos os `node_modules` de todos os projetos.
- `yarn clean:all`: limpa todos os `node_modules` e `package-lock.json` dos projetos e da **root**.
- `yarn version patch --force-publish --yes`: atualiza a versão das dependencias para x.x.+1
- `yarn version minor --force-publish --yes`: atualiza a versão das dependencias x.+1.0

# Orientações gerais para o projeto

## Frontend

Cada componente deve estar dentro de uma pasta com a seguinte estrutura:

```
 - NomeDoCompoente/
    - NomeDoCompoente.tsx (obrigatório)
    - NomeDoCompoente.spec.tsx (opcional / no futuro iremos implementar os testes)
    - NomeDoCompoente.module.scss (opcional)
    - index.ts (obrigatório)
```

O arquivo `index.ts` é apenas para exportar o componente `NomeDoCompoente` e o que mais se fizer necessário. Por exemplo, alguma prop. Geralmente o código no arquivo index será:

```ts
export * from './NomeDoCompoente';
```

Caso a prop do componente não seja necessária fora do mesmo componente, ela deve receber o nome `Props` e não deve ser exportada. Caso a prop seja necessária fora do componente ela deve receber o nome `ComponenteProps` e deve ser exportada.

Caso o componente possua algum `SubComponente` isso é, caso exista algum componente que seu uso é exclusivamente interno ao `NomeDoCompoente` podemos coloca-lo dento da pasta `NomeDoCompoente` diretamente (lembrando que o `SubComponente` segue a mesma estrutura de pastas). Sendo o resultado final:

```
 - NomeDoCompoente/
    - SubComponente/
        - SubComponente.tsx
        - index.ts // esse index exporta o SubComponente
    - NomeDoCompoente.tsx
    - index.ts // esse index exporta o NomeDoCompoente
```

**Atenção:** Caso haja a necessidade de exportar o `SubComponente` ele provavelmente não é um subcomponente, então precisamos ter bastante atenção com isso.

Em alguns casos o `NomeDoCompoente` pode ter vários subcompoentnes, caso sejam poucos 1, 2 ou 3, eles podem ficar diretamente na pasta do `NomeDoCompoente`, seguindo a estrutura:

```
 - NomeDoCompoente/
    - SubComponenteA/
        - SubComponente.tsx
        - index.ts
    - SubComponenteB/
        - SubComponente.tsx
        - index.ts
    - SubComponenteC/
        - SubComponente.tsx
        - index.ts
    - NomeDoCompoente.tsx
    - index.ts
```

Caso hajam mais subcomponentes eles devem estar em uma pasta chamada `Components` dentro da pasta do `NomeDoCompoente`, deixando a estrutura assim.

```
 - NomeDoCompoente/
    - Components/
        - SubComponenteA/
            - SubComponente.tsx
            - index.ts
        - SubComponenteB/
            - SubComponente.tsx
            - index.ts
        - SubComponenteC/
            - SubComponente.tsx
            - index.ts
        - index.ts // esse é o index da pasta Components, que exporta todos os subcomponentes.
    - NomeDoCompoente.tsx
    - index.ts
```

**Atenção 1:** A pasta `Components` tem um index que exporta os subcomponentes que serão usados pelo `NomeDoCompoente`.
**Atenção 2:** Qualquer componente deve seguir essa mesma estrutura, seja ele um subcomponente ou não, não importando quantos níveis abaixo ele está.

### Estilização

Todos estilos devem ser escritos utilizando SASS, para estilização temos duas opções, a primeira são estilos globais. Os estilos globais são majoritarimanete definidos pelo boostrap.
Para alterar algum estilo global devemos seguir a seguinte abordagem por essa ordem de prioridade:

- Alterar as variáveis do boostrap.
- Alterar o componente do boostrap.
- Criar uma classe própria.

Na imensa maioria dos casos apenas as variáveis do boostrap suficientes para alterar os elementos. Nesses casos a abordagem correta é comentar o valor original e na linha imediatamente abaixo colocar o novo valor.
Original:

```scss
$input-btn-padding-y: 0.375rem !default;
$input-btn-padding-x: 0.75rem !default;
$input-btn-font-family: null !default;
$input-btn-font-size: $font-size-base !default;
$input-btn-line-height: $line-height-base !default;
```

Alterando valor da variavel `$input-btn-padding-x`:

```scss
$input-btn-padding-y: 0.375rem !default;
// $input-btn-padding-x: 0.75rem !default;
$input-btn-padding-x: 22px !default;
$input-btn-font-family: null !default;
$input-btn-font-size: $font-size-base !default;
$input-btn-line-height: $line-height-base !default;
```

Apenas o valor original precisa ser preservado, as novas alterações na variável `$input-btn-padding-x` não precisam ser preservadas.

Também há casos que podem ser necessário a criação de uma nova variável dentro do arquivo `_variables` do boostrap. Para esses casos a recomendação é colocar o sufixo `-lab77` na nova variavel, ficando assim `minha-nova-variavel-lab77`. Esse sufixo ajudará a identificar que essas variaveis são para alguma customização.

**Atenção:** O Boostrap trabalha com muitos calculos e uma "cascata" entre o valor das variáveis (e isso é importante para manter a proporção nos elementos), um exemplo disso é que o tamanho da fonte dos botões está relacionado ao tamanho da fonte dos inputs. Quando for alterar algum valor é muito importante certificar a onde aquele valor está impactando

Em alguns pouvos casos as variáveis podem não permitir a customização adequada, nestas situações a abordagem correta é ir até o elemento (no boostrap) e alterar o SASS daquele elemento. Isso é importante por dois motivos, o primeiro deles é garantir que realmente não existe nenhuma variavel para aquele estilo que deseja alterar, o segundo motivo é para saber em quais elementos aquela alteração irá impactar.

#### Criação de classes próprias no estilo global.

A criação de classes próprias no estilo global devem ser evitadas ao máximo, primeiro devemos verificar se realmente não existe nenhuma variável que possa ser utilizada, depois se essa alteração realmente deve ser aplicada a de forma global e se não faz sentido aplicar essa alteração em um componente.

Constada a real necessidade de criar um estilo global, então deve-se cria-lo outra pasta (fora do boostrap). Mas novamente, essa é a ultima opção e para utiliza-la é necessário ter certeza que essa é a melhor abordagem (provavelmente não é).

### Módulos CSS

Existe uma técnica chamada módulo CSS, ela garante que não haverá conflitos de nomes de classes entre diferentes componentes. Essa técnica é muito útil pois permite darmos nomes mais simples e legíveis para as classes e termos a garantia que não haverá conflito com classes com mesmo nome em outros arquivos.

Esses estilos deve ser aplicados nos arquivos `NomeDoCompoente.module.scss` que ficam na mesma pasta dos componentes. Todo estilo específico deve ser aplicado nesses arquivos.

### Orientação para estilos dentro dos componentes

A orientação é usar o máximo possível do grid do boostrap, caso haja a necessidade de alterar algo no grid use **somente** as classes nativas do boostrap para fazer isso, não coloque nenhum elemento entre o `container`, `row` e `col` e nenhum CSS customizado nessas classes.

**Atenção 1:** Mesmo com o uso das classes nativas do boostrap as vezes o grid quebra, um efeito muito comum é que em alguns momentos ele fica mais largo que a tela, dando um pequeno espaço na direita que fica fora do monitor. Muita atenção ao manipular o grid, e sempre prestar bastante atenção nisso.

**Atenção 2:** Não use margem ou padding negativo. Isso tende a gerar comportamentos estranhos e imprevisiveis.

O grid também deve ser usado de forma completa, segue alguns exemplos de grids válidos

```html
<!-- LOCAL CORRETO PARA COLOCAR ELEMENTOS -->
<div className="container-fluid essa-classe-nao-deveria-estar-aqui">
	<!-- não coloque elementos aqui -->
	<div className="row essa-classe-nao-deveria-estar-aqui">
		<!-- não coloque elementos aqui -->
		<div className="col-lg-12 essa-classe-nao-deveria-estar-aqui">
			<!-- LOCAL CORRETO PARA COLOCAR ELEMENTOS -->
		</div>
	</div>
</div>
<!-- LOCAL CORRETO PARA COLOCAR ELEMENTOS -->

<div className="container-fluid g-0 overflow-hidden">
	<div className="row">
		<div className="col-12">
			<div className="XPTO"></div>
		</div>
	</div>
</div>

<div className="XPTO">
	<div className="container-fluid g-0 overflow-hidden">
		<div className="row">
			<div className="col-12"></div>
		</div>
	</div>
</div>

<div className="container-fluid g-0 overflow-hidden">
	<div className="row">
		<div className="col-12">
			<div className="XPTO"></div>
		</div>
	</div>
</div>
```

Esses são alguns exemplos de grids **inválidos**:

```html
<div className="container-fluid g-0 overflow-hidden">
	<div className="XPTO">
		<div className="row">
			<div className="col-12"></div>
		</div>
	</div>
</div>
<div className="container-fluid g-0 overflow-hidden">
	<div className="row">
		<div className="XPTO">
			<div className="col-12"></div>
		</div>
	</div>
</div>
<div className="container-fluid g-0 overflow-hidden">
	<div className="row">
		<div className="XPTO"></div>
		<div className="col-12"></div>
	</div>
</div>
<div className="container-fluid g-0 overflow-hidden">
	<div className="XPTO"></div>
	<div className="row">
		<div className="col-12"></div>
	</div>
</div>
```

**Atenção:** Não use apenas uma parte do grid. Por exemplo, não comece um componente com `row`, o código do grid deve estar completamente contido em um único componente. Um componente não conhece o código que está sendo executado dentro de um componente filho (e não deve conhecer) e também não conhece o código do componente que o chamou (e também não deve conhecer). Por isso não devemos fazer código "acreditando em algo" que está além do escopo do componente atual. Caso essa inferência seja **realmente inevitável** tudo bem quebrar essa regra, contudo isso deve ser evitado o máximo possível pois ao tomar essa decisão pois ao faze-lo cria-se uma forte dependência entre os elementos e isso é algo que deve ser evitado ao máximo.

O principal motivo da adoção do grid é seguir um princ;ipio que todos componentes devem estar prontos para serem utilizados em qualquer local sem quebrar. Por exemplo, hoje existe um menu que ocupa 30% da tela. Mas a qualquer momento é possível que a área contendo esse menu mude para 50% da tela ou 15% da tela e nesses casos o menu não quebrar, ou seja, ele deve manter a estrutura e funcionamento correto.

De forma geral (isso não é uma regra), cada componente deve ser chamado dentro de alguma `col-*` e initiar com um `container-fluid`, isso irá garantir (na medida do possível) que a estrutura do componente será mantida, independente da área que ele está ocupando na tela. Um exemplo de uso:

```tsx
const ComponenteA = () => (
	<div className="container-fluid">
		<div className="row">
			{/* Esse componente irá ucupar uma linha */}
			<div className="col-12">
				<ComponenteB />
			</div>

			{/* Esses componentes juntos irão ucupar uma linha */}
			<div className="col-6">
				<ComponenteB />
			</div>
			<div className="col-6">
				<ComponenteB />
			</div>

			{/* Esses componentes juntos irão ucupar uma linha */}
			<div className="col-7">
				<ComponenteB />
			</div>
			<div className="col-3">
				<ComponenteB />
			</div>
			<div className="col-2">
				<ComponenteB />
			</div>
		</div>
	</div>
);

const ComponenteB = () => (
	<div className="container-fluid">
		<div className="row">
			<div className="col-4">Primeira parte</div>
			<div className="col-4">Segunda parte</div>
			<div className="col-4">Terceira parte</div>
		</div>
	</div>
);
```

**Atenção:** De forma geral a idéia é, use e abuse do grid. Porem o `container-fluid` tem uma margem, e usar vários pode ocasionar a perda de área útil da tela. Para resolver isso podemos aplocar as classes `container-fluid g-0 overflow-hidden`. Elas irão adicionar grid mas não irão colocar essa margem nos containers. Isso irá permitir uma manipulação mais fácil dos elementos dentro de vários níveis de grid.
