export const buscarDados = async (query) => {
  const p = document.getElementById("resultado");
  try {
    const response = await fetch(`https://api.github.com/users/${query}`);

    if (!response.ok) {

      if (p) p.textContent = "Usuário não encontrado.";
      return null;
    }

    const dados = await response.json();
    if (p) p.textContent = ""; 
    return dados;

  } catch (error) {
    if (p) p.textContent = "Erro na busca ou sem conexão.";
    console.error("Erro na busca:", error);
    return null;
  }
};