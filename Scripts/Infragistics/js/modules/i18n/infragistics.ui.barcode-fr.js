/*!@license
* Infragistics.Web.ClientUI Barcode localization resources 22.1.16
*
* Copyright (c) 2011-2022 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.fr=$.ig.locale.fr||{};$.ig.Barcode=$.ig.Barcode||{};$.ig.locale.fr.Barcode={aILength:"L'AI doit avoir au moins 2 chiffres.",badFormedUCCValue:"Les Donn\xe9es du code-barres UCC ne sont pas bien form\xe9es. Le format correct doit \xeatre (AI)GTIN.",code39_NonNumericError:"Le caract\xe8re '{0}' est non valide pour les Donn\xe9es du code-barres CODE39. Les caract\xe8res valides sont: {1}",countryError:"Erreur dans la conversion du code du pays. Ce doit \xeatre une valeur num\xe9rique.",emptyValueMsg:"La valeur des Donn\xe9es est vide.",encodingError:"Erreur dans la conversion. Reportez-vous \xe0 la documentation pour les valeurs appropri\xe9es des propri\xe9t\xe9s.",errorMessageText:"Valeur non valide! Reportez-vous \xe0 la documentation pour la structure appropri\xe9e des Donn\xe9es du code-barres.",gS1ExMaxAlphanumNumber:"La famille GS1 DataBar Expanded peut encoder jusqu'\xe0 41 caract\xe8res alphanum\xe9riques.",gS1ExMaxNumericNumber:"La famille GS1 DataBar Expanded peut encoder jusqu'\xe0 74 caract\xe8res num\xe9riques.",gS1Length:"Les donn\xe9es du GS1 DataBar sont utilis\xe9es pour GTIN - 8, 12, 13, 14 et leur longueur doit \xeatre de 7, 11, 12 ou 13. Le dernier chiffre est r\xe9serv\xe9 \xe0 une somme de contr\xf4le.",gS1LimitedFirstChar:"Le premier chiffre de GS1 DataBar Limited doit \xeatre 0 ou 1. Lors de l'encodage de structures de donn\xe9es GTIN-14 avec une valeur de l'indicateur sup\xe9rieure \xe0 1, le type de code-barres Omnidirectional, Stacked, Stacked Omnidirectional ou Truncated doit \xeatre utilis\xe9.",i25Length:"Le code-barres Interleaved2of5 doit avoir un nombre de chiffres pair. Vous pouvez mettre un 0 au d\xe9but s'il s'agit d'un nombre impair.",intelligentMailLength:"Les Donn\xe9es du code-barres Intelligent Mail doivent avoir 20, 25, 29 ou 31 caract\xe8res - code de suivi \xe0 20 chiffres (2 pour l'identificateur du code-barres, 3 pour l'identificateur du type de service, 6 ou 9 pour l'identificateur de l'exp\xe9diteur et 9 ou 6 pour le num\xe9ro de s\xe9rie) et 0, 5, 9 ou 11 symboles pour le code postal.",intelligentMailSecondDigit:"Le deuxi\xe8me chiffre doit \xeatre compris dans la plage 0-4.",invalidAI:"Cha\xeenes d'\xe9l\xe9ments de l'identificateur d'application non valides. Assurez-vous que la cha\xeene de l'AI sp\xe9cifi\xe9e dans les Donn\xe9es est bien form\xe9e.",invalidCharacter:"Le caract\xe8re '{0}' est non valide pour le type de code-barres actif. Les caract\xe8res valides sont: {1}",invalidDimension:"La taille du code-barres ne peut pas \xeatre d\xe9finie en raison d'une combinaison incorrecte des valeurs des propri\xe9t\xe9s Stretch, BarsFillMode et XDimension.",invalidHeight:"Les lignes de la grille du code-barres (nombre {0}) ne peuvent pas \xeatre plac\xe9es sur une telle hauteur ({1} pixels).",invalidLength:"Les Donn\xe9es du code-barres doivent contenir {0} chiffres.",invalidPostalCode:"Valeur PostalCode non valide - le Mode 2 encode un code postal pouvant contenir jusqu'\xe0 9 chiffres (code postal am\xe9ricain) tandis que le Mode 3 encode un code alphanum\xe9rique pouvant contenir jusqu'\xe0 6 caract\xe8res.",invalidPropertyValue:"La valeur de propri\xe9t\xe9 {0} doit \xeatre comprise dans la plage {1}-{2}.",invalidVersion:"Le num\xe9ro de SizeVersion ne peut pas g\xe9n\xe9rer suffisamment de cellules pour encoder les donn\xe9es avec le mode d'encodage et le niveau de correction des erreurs actifs.",invalidWidth:"Les colonnes de la grille du code-barres (nombre {0}) ne peuvent pas \xeatre plac\xe9es sur une telle largeur ({1} pixels). V\xe9rifier les valeurs des propri\xe9t\xe9s XDimension et WidthToHeightRatio.",invalidXDimensionValue:"La valeur XDimension doit \xeatre comprise dans la plage de {0} \xe0 {1} pour le type de code-barres actif.",maxLength:"La longueur {0} du texte d\xe9passe le maximum encodable pour le type de code-barres actif. Le maximum encodable est de {1} caract\xe8res.",notSupportedEncoding:"L'encodage correspondant sous la plage {0} {1} n'est pas pris en charge.",pDF417InvalidRowsColumnsCombination:"Les mots de code (correction des donn\xe9es et erreurs) sont plus nombreux que ceux pouvant \xeatre encod\xe9s en symboles avec une matrice {0}x{1}.",primaryMessageError:"Impossible d'extraire le message principal de la valeur des donn\xe9es. Reportez-vous \xe0 la documentation pour sa structure.",serviceClassError:"Erreur dans la conversion de la classe de service. Ce doit \xeatre une valeur num\xe9rique.",smallSize:"Impossible de placer la grille dans Size({0}, {1}) avec les param\xe8tres Stretch d\xe9finis.",unencodableCharacter:"Le caract\xe8re '{0}' ne peut pas \xeatre encod\xe9.",uPCEFirstDigit:"Le premier chiffre de l'UPCE doit toujours \xeatre z\xe9ro par sp\xe9cification.",warningString:"Avertissement Barcode: ",wrongCompactionMode:"Le message de donn\xe9es ne peut pas \xeatre compact\xe9 avec le mode {0}.",notLoadedEncoding:"L'encodage {0} n'est pas charg\xe9."};$.ig.Barcode.locale=$.ig.Barcode.locale||$.ig.locale.fr.Barcode;return $.ig.locale.fr.Barcode});