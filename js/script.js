function showModels(id, button){

    document.querySelectorAll('.phones-grid').forEach(section=>{
    section.classList.add('hidden');
    });
    
    document.getElementById(id).classList.remove('hidden');
    
    document.querySelectorAll('.tab').forEach(tab=>{
    tab.classList.remove('active');
    });
    
    button.classList.add('active');
    
    }

    