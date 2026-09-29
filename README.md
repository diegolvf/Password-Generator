# SEC Pass Generator

Aplicativo mobile gerador de senhas, desenvolvido com **React Native (Expo) e TypeScript**. O usuário escolhe o tamanho da senha e os tipos de caracteres, gera a senha e pode copiá-la para a área de transferência.

 ![Tela do app](./assets/screensshot.png)

## Funcionalidades

- Gerar senha aleatória
- Copiar a senha gerada para a área de transferência
- **Definir o tamanho da senha** (entre 4 e 64 caracteres)
- **Botões com feedback visual:** mudam de cor enquanto pressionados e voltam à cor original ao soltar
- **Opções de caracteres:** o usuário escolhe se a senha terá letras maiúsculas, números e caracteres especiais

## Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- TypeScript
- [expo-clipboard](https://docs.expo.dev/versions/latest/sdk/clipboard/)

## Como executar

```bash
# instalar as dependências
npm install

# iniciar o projeto
npx expo start
```

Depois, abra o app no emulador Android ou no celular com o aplicativo Expo Go.

## Estrutura do projeto

```
src/
├── components/
│   ├── ButtonPass/        # botões, opções (switches) e lógica de geração/cópia
│   ├── TextInputPass/     # campo de texto reutilizável (senha e tamanho)
│   └── Logo/              # logo do app
├── Screens/
│   ├── Home.tsx           # tela principal
│   └── HomeStyles.tsx
└── services/
    └── passwordService.ts # função que gera a senha
```

## Melhorias implementadas

### 1. Campo para definir o tamanho da senha

- Criado o estado `tamanho` no componente `ButtonPass`, ligado a um campo de texto.
- O `TextInputPass` foi generalizado com **props opcionais** (`placeholder`, `onChangeText`, `keyboardType`, `maxLength`), permitindo reutilizá-lo tanto para exibir a senha quanto para receber o tamanho, sem quebrar o uso anterior.
- O campo aceita apenas números (`keyboardType="numeric"` e remoção de caracteres não numéricos com expressão regular).
- Validação antes de gerar: se o valor estiver vazio ou fora do intervalo de 4 a 64, uma mensagem de erro é exibida.
- A função `generatePass` deixou de ter o tamanho fixo (8) e passou a receber o valor por parâmetro.

### 2. Botões que mudam de cor ao serem pressionados

- Os botões usam o componente `Pressable`, cuja propriedade `style` aceita uma função com o valor `pressed`.
- Enquanto `pressed` é verdadeiro, é aplicado o estilo `buttonPressed` (um tom mais escuro do azul do botão). Ao soltar, a cor original volta automaticamente.

```tsx
<Pressable
  style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
  onPress={handleGenButton}
>
```

### 3. Feature de escolha: opções de caracteres

- Três componentes `Switch` permitem ativar ou desativar maiúsculas, números e caracteres especiais.
- A função `generatePass` recebe um objeto de opções (`length`, `uppercase`, `numbers`, `symbols`) com valores padrão, então continua funcionando se chamada sem argumentos.
- As letras minúsculas sempre fazem parte do conjunto de caracteres.
- As cores dos switches ficam centralizadas na constante `switchColors`, e as três linhas ficam dentro de um container com fundo levemente mais claro que o fundo da tela.

## Decisões e aprendizados

- O estado da senha, do tamanho e das opções fica no `ButtonPass`, e o `TextInputPass` apenas exibe e repassa valores por props (componente controlado).
- Estilos são mantidos em arquivos separados (`*Styles.tsx`), seguindo o padrão do projeto.
- Propriedades como `trackColor` e `thumbColor` do `Switch` não são estilos: por isso ficam como props no JSX (ou em uma constante importada), e não dentro do `StyleSheet.create`.

## Limitações conhecidas

- A geração usa `Math.random()`, adequado para fins didáticos, mas não para uso criptográfico. Em um app real de segurança, seria recomendável usar um gerador criptograficamente seguro, como o `expo-crypto`.
- A senha não é armazenada em nenhum lugar: ela existe apenas enquanto o app está aberto.

## Autor

Desenvolvido por **Diego Leão**.
