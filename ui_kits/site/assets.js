// Résout les chemins d'images pour les deux emplacements de la page :
// aperçu à ui_kits/site/ (../../assets/) et export autonome à la racine (assets/).
window.ASSET = function (p) {
  var base = /\/ui_kits\/site\//.test(location.pathname) ? '../../assets/' : 'assets/';
  return base + p;
};
