function openTab(event, tabId) {
    let tabs = document.querySelectorAll(".tab-content");
    let buttons = document.querySelectorAll(".tab-link");

    // Cacher toutes les sections
    tabs.forEach(tab => tab.classList.remove("active"));
    
    // Désactiver tous les boutons
    buttons.forEach(button => button.classList.remove("active"));

    // Afficher la section sélectionnée
    document.getElementById(tabId).classList.add("active");

    // Activer le bouton cliqué
    event.currentTarget.classList.add("active");
}
