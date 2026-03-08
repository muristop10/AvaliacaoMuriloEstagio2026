export const buscarDados = async (query) => {
  try {
    // tenta buscar dados da api do git, query será o conteudo do input
    const response = await fetch(`https://api.github.com/users/${query}`); //
    if (!response.ok) throw new Error('Não encontrado');
    return await response.json();
  } catch (error) {
    console.error("Erro na busca:", error);
    return null;
  }
};