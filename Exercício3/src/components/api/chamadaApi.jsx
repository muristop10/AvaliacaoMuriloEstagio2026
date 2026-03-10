import { filtrarRepos } from "../scripts/filtroSelect";

// ordena e retorna nova lista (não modifica original)
const ordenar = (repositorios, criterio) => filtrarRepos(repositorios, criterio);

export const buscarDados = async (query) => {
  const p = document.getElementById("resultado");
  try {
    // busca dos dados do user
    const respostaUsuario = await fetch(`https://api.github.com/users/${query}`);
    const dadosUsuario = await respostaUsuario.json();
    if (!respostaUsuario.ok) {
      if (p) p.textContent = "Usuário não encontrado.";
      return null;
    }

    // busca dos repositórios do user
    const respostaRepositorios= await fetch(`https://api.github.com/users/${query}/repos`);
    let dadosRepositorios = await respostaRepositorios.json();
    if (!respostaRepositorios.ok) {
      if (p) p.textContent = "Erro no encontrar repositórios."
    }

    if (p) p.textContent = ""; 

    // aplica ordenação padrão antes de devolver os dados
    dadosRepositorios = ordenar(dadosRepositorios, "estrelas_desc");

    return {
      perfil: dadosUsuario,
      repositorios: dadosRepositorios
    };

  } catch (error) {
    if (p) p.textContent = "Erro na busca ou sem conexão.";
    console.error("Erro na busca:", error);
    return null;
  }
};