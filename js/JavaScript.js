$(document).ready(function() {
    $('#add-experiencia').click(function() {
        $('#experiencias-container').append('<input type="text" name="experiencia[]" title="Descreva uma experiência"><br>');
    });

    $('#add-habilidade').click(function() {
        $('#habilidades-container').append('<input type="text" name="habilidade[]" title="Informe uma habilidade"><br>');
    });

    $('#gerar-curriculo').click(function(e) {
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: 'gerar-curriculo.php',
            data: $('#curriculo-form').serialize(),
            beforeSend: function() {
                $('#curriculo-gerado').html('Gerando currículo...');
            },
            success: function(data) {
                $('#curriculo-gerado').html(data);
            },
            error: function(xhr, status, error) {
                $('#curriculo-gerado').html('Erro ao gerar currículo: ' + error);
            }
        });
    });
});
/*
function preencherEstados() {
    const estados = [
        { sigla: 'AC', nome: 'Acre' },
        { sigla: 'AL', nome: 'Alagoas' },
        { sigla: 'AP', nome: 'Amapá' },
        { sigla: 'AM', nome: 'Amazonas' },
        { sigla: 'BA', nome: 'Bahia' },
        { sigla: 'CE', nome: 'Ceará' },
        { sigla: 'DF', nome: 'Distrito Federal' },
        { sigla: 'ES', nome: 'Espírito Santo' },
        { sigla: 'GO', nome: 'Goiás' },
        { sigla: 'MA', nome: 'Maranhão' },
        { sigla: 'MG', nome: 'Minas Gerais' },
        { sigla: 'MS', nome: 'Mato Grosso do Sul' },
        { sigla: 'MT', nome: 'Mato Grosso' },
        { sigla: 'PA', nome: 'Pará' },
        { sigla: 'PB', nome: 'Paraíba' },
        { sigla: 'PE', nome: 'Pernambuco' },
        { sigla: 'PI', nome: 'Piauí' },
        { sigla: 'PR', nome: 'Paraná' },
        { sigla: 'RJ', nome: 'Rio de Janeiro' },
        { sigla: 'RN', nome: 'Rio Grande do Norte' },
        { sigla: 'RO', nome: 'Rondônia' },
        { sigla: 'RR', nome: 'Roraima' },
        { sigla: 'RS', nome: 'Rio Grande do Sul' },
        { sigla: 'SC', nome: 'Santa Catarina' },
        { sigla: 'SE', nome: 'Sergipe' },
        { sigla: 'SP', nome: 'São Paulo' },
        { sigla: 'TO', nome: 'Tocantins' },
    ];

    const select = document.getElementById('estados');
    estados.forEach((estado) => {
        const option = document.createElement('option');
        option.value = estado.sigla;
        option.text = estado.nome;
        select.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', preencherEstados);
 */