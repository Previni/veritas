const API_URL = 'http://localhost:3000/api/punto';

async function loadData() {
    try {
        const response = await fetch(`${API_URL}/registros`);
        const data = await response.json();
        
        updateDashboard(data);
        updateTable(data);
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        alert('Erro ao carregar os dados. Por favor, tente novamente mais tarde.');
    }
}

function updateDashboard(data) {
    document.getElementById('totalEmployees').textContent = new Set(data.map(record => record.re)).size;
    document.getElementById('todayPunches').textContent = data.filter(record => {
        const recordDate = new Date(record.timestamp);
        const today = new Date();
        return recordDate.toDateString() === today.toDateString();
    }).length;
    document.getElementById('alerts').textContent = '0';
}

function updateTable(data) {
    const punchRecordsBody = document.getElementById('punchRecords');
    punchRecordsBody.innerHTML = '';
    data.forEach(record => {
        const row = punchRecordsBody.insertRow();
        row.innerHTML = `
            <td>${new Date(record.timestamp).toLocaleString()}</td>
            <td>${record.re}</td>
            <td>${record.fullName}</td>
            <td>${record.Posto || 'N/A'}</td>
            <td><button onclick="showDetails('${record.id}')">Ver Detalhes</button></td>
        `;
    });
}

function showDetails(id) {
    // Implementar lógica para mostrar detalhes
    alert(`Detalhes do registro ${id}`);
}

function exportToExcel() {
    alert('Função de exportar para Excel será implementada aqui');
}

function showFilterModal() {
    alert('Modal de filtros será implementado aqui');
}

function generateReport() {
    alert('Função de gerar relatório será implementada aqui');
}

loadData();
setInterval(loadData, 300000); // Atualiza a cada 5 minutos
