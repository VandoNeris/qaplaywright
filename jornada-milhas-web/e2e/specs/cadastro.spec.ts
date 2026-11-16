import { test } from "e2e/setup/fixtures";
import { gerarPerfil } from "./operacoes/gerarPerfil";

test.describe('Página de Cadastro', () => {
    test('Deve conseguir fazer cadastro', async ({ paginaCadastro }) => {
        await paginaCadastro.visitar();

        const novoUsuario = gerarPerfil();

        await paginaCadastro.preencherFormularioCadastro(novoUsuario);

        console.log(novoUsuario);
    });
});