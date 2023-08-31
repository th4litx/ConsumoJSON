async function fetchData() {
    try {
    const response = await fetch('datas.json'); // Certifique-se de que o arquivo JSON esteja no mesmo diretório
    const data = await response.json();
   
    const jobsList = document.getElementById('alunos');
   
    data.alunos.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.classList.add('job-card'); // Adicione uma classe CSS para estilização (opcional)
    jobCard.innerHTML = `
    
    <h2>${job.nome}</h2>
    <p>${job.idade}</p>
    <p>${job.nota}</p>
    <p>${job.disciplinas}</p>
    <hr>
    `;
    jobsList.appendChild(jobCard);
    });
    } catch (error) {
    console.error('Erro ao buscar dados:', error);
    }
   }
   // Chamar a função para buscar e consumir os dados
   fetchData();
   