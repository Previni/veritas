// Simulação de dados (substitua isso por uma chamada real à API quando possível)
let registros = [
    { id: 1, timestamp: '2023-10-23T08:00:00', re: '1001', fullName: 'João Silva', Posto: 'Recepção', location: 'Entrada Principal' },
    { id: 2, timestamp: '2023-10-23T12:00:00', re: '1002', fullName: 'Maria Santos', Posto: 'Escritório', location: 'Sala 202' },
    // Adicione mais registros simulados aqui
];

function loadData() {
    updateDashboard();
    updateTable();
}

function updateDashboard() {
    document.getElementById('totalEmployees').textContent = new Set(registros.map(record => record.re)).size;
    document.getElementById('todayPunches').textContent = registros.filter(record => {
        const recordDate = new Date(record.timestamp);
        const today = new Date();
        return recordDate.toDateString() === today.toDateString();
    }).length;
    document.getElementById('alerts').textContent = '0';
}

function updateTable() {
    const punchRecordsBody = document.getElementById('punchRecords');
    punchRecordsBody.innerHTML = '';
    registros.forEach(record => {
        const row = punchRecordsBody.insertRow();
        row.innerHTML = `
            <td>${new Date(record.timestamp).toLocaleString()}</td>
            <td>${record.re}</td>
            <td>${record.fullName}</td>
            <td>${record.Posto || 'N/A'}</td>
            <td><button onclick="showDetails(${record.id})">Ver Detalhes</button></td>
        `;
    });
}

function showDetails(id) {
    const record = registros.find(r => r.id === id);
    if (record) {
        document.getElementById('detailRE').textContent = record.re;
        document.getElementById('detailName').textContent = record.fullName;
        document.getElementById('detailTimestamp').textContent = new Date(record.timestamp).toLocaleString();
        document.getElementById('detailPosto').textContent = record.Posto || 'N/A';
        document.getElementById('detailLocation').textContent = record.location;
        document.getElementById('employeePhoto').src = 'img/placeholder.jpg'; // Substitua por uma foto real se disponível
        document.getElementById('detailModal').style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('detailModal').style.display = 'none';
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

// Event Listeners
document.querySelector('.close').addEventListener('click', closeModal);
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('detailModal')) {
        closeModal();
    }
});

// Inicialização
loadData();
setInterval(loadData, 300000); // Atualiza a cada 5 minutos
