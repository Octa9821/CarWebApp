/*!@license
* Infragistics.Web.ClientUI Barcode localization resources 22.1.16
*
* Copyright (c) 2011-2022 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.sv=$.ig.locale.sv||{};$.ig.Barcode=$.ig.Barcode||{};$.ig.locale.sv.Barcode={aILength:"AI ska ha minst tv\xe5 siffror.",badFormedUCCValue:"Dataegenskapsv\xe4rdet f\xf6r UCC-streckkoden \xe4r inte v\xe4lformerat. Det b\xf6r se ut som (AI) GTIN.",code39_NonNumericError:"Tecknet '{0}' \xe4r ogiltigt f\xf6r CODE39-dataegenskapsv\xe4rde. De giltiga \xe4r: {1}",countryError:"Fel vid konvertering av v\xe4rdekod f\xf6r landegenskap. Det b\xf6r vara ett numeriskt v\xe4rde.",emptyValueMsg:"Dataegenskapens v\xe4rde \xe4r tomt.",encodingError:"Fel vid konvertering. Se dokumentationen f\xf6r giltiga egenskapsv\xe4rden.",errorMessageText:"Ogiltigt v\xe4rde! Se dokumentationen f\xf6r den giltiga strukturen f\xf6r streckkodsegenskapsv\xe4rde.",gS1ExMaxAlphanumNumber:"GS1 DataBar Expanded-familjen kan koda upp till 41 alfanumeriska tecken.",gS1ExMaxNumericNumber:"GS1 DataBar Expanded-familjen kan koda upp till 74 numeriska tecken.",gS1Length:"Egenskapsv\xe4rdet GS1 DataBar Data anv\xe4nds f\xf6r GTIN - 8, 12, 13, 14 och dess l\xe4ngd ska vara 7, 11, 12 eller 13. Den sista siffran \xe4r reserverad f\xf6r en kontrollsumma.",gS1LimitedFirstChar:"GS1 DataBar Limited-streckkoden b\xf6r ha 0 eller 1 i den f\xf6rsta siffran. Vid kodning av GTIN-14-data med ett indikatorv\xe4rde som \xe4r st\xf6rre \xe4n 1, m\xe5ste omniriktad, staplad, staplad omniriktad eller trunkerad streckkodstyp anv\xe4ndas.",i25Length:"Streckkoden Interleaved2of5 ska ha ett j\xe4mnt antal siffror. Du kan s\xe4tta 0 framf\xf6r den om de \xe4r udda.",intelligentMailLength:"L\xe4ngden p\xe5 v\xe4rdet f\xf6r intelligent poststreckkodsegenskap ska vara 20, 25, 29 eller 31 tecken - 20 siffror sp\xe5rkod (2 f\xf6r streckkodsidentifierare, 3 f\xf6r tj\xe4nsttypidentifierare, 6 eller 9 f\xf6r utskickningsidentifierare och 9 eller 6 f\xf6r serienummer ) och 0, 5, 9 eller 11 postnummer symboler.",intelligentMailSecondDigit:"Den andra siffran ska ligga i intervallet 0-4.",invalidAI:"Ogiltiga applikationsidentifieringselementstr\xe4ngar. Se till att AI-str\xe4ngen i dataegenskapsv\xe4rdet \xe4r v\xe4lformerad.",invalidCharacter:"Tecknet '{0}' \xe4r ogiltigt f\xf6r den aktuella streckkodstypen. De giltiga \xe4r: {1}",invalidDimension:"Streckkodsdimensionen kan inte best\xe4mmas p\xe5 grund av en felaktig kombination av egenskaperna Stretch, BarsFillMode och XDimension.",invalidHeight:"Detta antal streckkodsn\xe4trader ({0}) kan inte passa i en s\xe5dan h\xf6jd ({1} pixlar).",invalidLength:"V\xe4rde f\xf6r streckkodsegenskaper ska ha {0} siffror.",invalidPostalCode:"Ogiltigt PostalCode-v\xe4rde - Mode 2 kodar upp till 9 siffror postnummer (USA-postnummer) medan Mode 3 kodar upp till 6 tecken alfanumerisk kod.",invalidPropertyValue:"Egenskapsv\xe4rdet {0} ska ligga i intervallet {1} - {2}.",invalidVersion:"Storleken p\xe5 SizeVersion-v\xe4rdet genererar inte tillr\xe4ckligt med celler f\xf6r att koda data med det aktuella kodningsl\xe4get och felkorrigeringsniv\xe5n.",invalidWidth:"Detta antal streckkodsn\xe4tkolumner ({0}) kan inte passa i en s\xe5dan bredd ({1} pixel/pixlar). Kontrollera XDimension eller/och egenskapens v\xe4rden WidthToHeightRatio.",invalidXDimensionValue:"XDimension-egenskapens v\xe4rde b\xf6r ligga i intervallet {0} till {1} f\xf6r den aktuella streckkodstypen.",maxLength:"L\xe4ngden {0} p\xe5 texten \xf6verstiger den maximala kodbara f\xf6r den aktuella typen av streckkod. Det kan koda max {1} tecken.",notSupportedEncoding:"Kodningen som motsvarar under {0} {1} st\xf6ds inte.",pDF417InvalidRowsColumnsCombination:"Kodorden (data- och felkorrigering) \xe4r mer \xe4n vad som kan kodas i symbol med en matris {0} x {1}.",primaryMessageError:"Det g\xe5r inte att extrahera det prim\xe4ra meddelandet fr\xe5n dataegenskapsv\xe4rdet. Se dokumentationen f\xf6r dess struktur.",serviceClassError:"Fel vid konvertering av serviceklass. Det ska vara ett numeriskt v\xe4rde.",smallSize:"Kan inte passa rutn\xe4tet i storlek ({0}, {1}) med de definierade str\xe4ckinst\xe4llningarna.",unencodableCharacter:"Tecknet '{0}' kan inte kodas.",uPCEFirstDigit:"Den f\xf6rsta UPCE-siffran ska alltid vara noll enligt specifikation.",warningString:"Streckkodsvarning: ",wrongCompactionMode:"Dataegenskapsv\xe4rdet kan inte komprimeras med {0} -l\xe4get.",notLoadedEncoding:"{0} -kodningen har inte laddats."};$.ig.Barcode.locale=$.ig.Barcode.locale||$.ig.locale.sv.Barcode;return $.ig.locale.sv.Barcode});