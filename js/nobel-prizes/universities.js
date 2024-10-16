var universities = [
    "/wiki/ETH_Zurich",
"/wiki/University_of_Zurich",
"/wiki/University_of_Strasbourg",
"/wiki/University_of_Hohenheim",
"/wiki/University_of_Giessen",
"/wiki/University_of_Wurzburg",
"/wiki/University_of_Munich",
"/wiki/Delft_University_of_Technology",
"/wiki/Leiden_University",
"/wiki/University_of_Bonn",
"/wiki/University_of_Paris",
"/wiki/University_of_Utrecht",
"/wiki/University_of_Amsterdam",
"/wiki/University_of_Berlin",
"/wiki/University_of_Erlangen",
"/wiki/St_Bartholomew's_Hospital_Medical_College",
"/wiki/Presidency_General_Hospital",
"/wiki/Calcutta",
"/wiki/Liverpool_School_of_Tropical_Medicine",
"/wiki/King's_College_Hospital",
"/wiki/British_War_Office",
"/wiki/Ministry_of_Pensions_and_National_Insurance",
"/wiki/Gymnasium_Christianeum",
"/wiki/University_of_Kiel",
"/wiki/University_of_Leipzig",
"/wiki/University_of_Breslau",
"/wiki/Ecole_Polytechnique",
"/wiki/Ecole_des_Ponts_et_Chaussees",
"/wiki/Conservatoire_des_Arts_et_Metiers",
"/wiki/Museum_National_d'Histoire_Naturelle",
"/wiki/Curie_Institute_%2528Paris%2529",
"/wiki/Ecole_Normale_Superieure",
"/wiki/French_Academy_of_Medicine",
"/wiki/International_Committee_on_Intellectual_Cooperation",
"/wiki/Uppsala_University",
"/wiki/Stockholm_University",
"/wiki/University_of_Copenhagen",
"/wiki/Trinity_College,_Cambridge",
"/wiki/Harrow_School",
"/wiki/Eton_College",
"/wiki/Anderson's_University",
"/wiki/University_of_Strathclyde",
"/wiki/University_of_Tubingen",
"/wiki/University_of_Glasgow",
"/wiki/University_College,_Bristol",
"/wiki/University_College_London",
"/wiki/Saint_Petersburg_State_University",
"/wiki/S.M._Kirov_Military_Medical_Academy%2523Imperial_Military_Medical_Academy",
"/wiki/Aix-Marseille_University",
"/wiki/University_of_Heidelberg",
"/wiki/Eotvos_Lorand_University",
"/wiki/Aachen_University_of_Technology",
"/wiki/Humboldt_University_of_Berlin",
"/wiki/Technical_University_of_Berlin",
"/wiki/University_of_Gottingen",
"/wiki/Owens_College",
"/wiki/University_of_Pavia",
"/wiki/University_of_Zaragoza",
"/wiki/University_of_Valencia",
"/wiki/Complutense_University_of_Madrid",
"/wiki/University_of_Barcelona",
"/wiki/Harvard_University",
"/wiki/Columbia_University",
"/wiki/United_States_Naval_Academy",
"/wiki/Case_Western_Reserve_University",
"/wiki/Clark_University",
"/wiki/University_of_Chicago",
"/wiki/Ludwig_Maximilian_University_of_Munich",
"/wiki/Agricultural_University_of_Berlin",
"/wiki/Val-de-Grace",
"/wiki/Pasteur_Institute",
"/wiki/Ecole_normale_superieure_%2528Paris%2529",
"/wiki/Heidelberg_University",
"/wiki/Sorbonne_University",
"/wiki/University_of_New_Zealand",
"/wiki/University_of_Cambridge",
"/wiki/Cavendish_Laboratory",
"/wiki/McGill_University",
"/wiki/Victoria_University_of_Manchester",
"/wiki/National_University_of_Kharkiv",
"/wiki/University_of_Messina",
"/wiki/Imperial_Novorossiya_University",
"/wiki/Berlin_University",
"/wiki/University_of_Jena",
"/wiki/University_of_Basel",
"/wiki/University_of_Marburg",
"/wiki/University_of_Karlsruhe",
"/wiki/University_of_Bologna",
"/wiki/Imperial_University_of_Dorpat",
"/wiki/Riga_Polytechnicum",
"/wiki/Leipzig_University",
"/wiki/University_of_Bern",
"/wiki/Catholic_University_of_Leuven_%25281834-1968%2529",
"/wiki/University_of_Strassburg",
"/wiki/University_of_Rostock",
"/wiki/RWTH_Aachen",
"/wiki/University_of_Uppsala",
"/wiki/University_of_Ghent",
"/wiki/Chalmers_University_of_Technology",
"/wiki/University_of_Lyon",
"/wiki/University_of_Nancy",
"/wiki/College_de_France",
"/wiki/University_of_Bordeaux",
"/wiki/University_of_Toulouse",
"/wiki/Rockefeller_University",
"/wiki/Hamilton_College_%2528New_York%2529",
"/wiki/New_York_University",
"/wiki/University_of_Groningen",
"/wiki/TU_Delft",
"/wiki/Chittagong_College",
"/wiki/Indian_Statistical_Institute",
"/wiki/Hindu_School,_Kolkata",
"/wiki/Jadavpur_University",
"/wiki/Presidency_University,_Kolkata",
"/wiki/University_of_Calcutta",
"/wiki/Bethune_College",
"/wiki/University_of_Dhaka",
"/wiki/Visva-Bharati_University",
"/wiki/Calcutta_School_of_Tropical_Medicine",
"/wiki/Goethe_University_Frankfurt",
"/wiki/Max_Planck_Institute",
"/wiki/Haverford_College",
"/wiki/University_of_Vienna",
"/wiki/University_of_Adelaide",
"/wiki/University_of_Leeds",
"/wiki/Royal_Institution",
"/wiki/St_Peter's_College,_Adelaide",
"/wiki/University_of_Manchester",
"/wiki/Kaiser_Wilhelm_Institute",
"/wiki/University_College_Liverpool",
"/wiki/King's_College,_Cambridge",
"/wiki/University_of_Liverpool",
"/wiki/King's_College_London",
"/wiki/University_of_Edinburgh",
"/wiki/Kaiser_Wilhelm_Society",
"/wiki/Technische_Universitat_Berlin",
"/wiki/Leibniz_University_Hannover",
"/wiki/University_of_Greifswald",
"/wiki/Free_University_of_Brussels_%25281834-1969%2529",
"/wiki/Princeton_University",
"/wiki/Johns_Hopkins_University",
"/wiki/Bureau_International_des_Poids_et_Mesures",
"/wiki/Sevres",
"/wiki/University_of_Graz",
"/wiki/Julius_Maximilian_University_of_Wurzburg",
"/wiki/Universite_de_Paris",
"/wiki/Charles_University_in_Prague",
"/wiki/Prussian_Academy_of_Sciences",
"/wiki/German_Physical_Society",
"/wiki/Institute_for_Advanced_Study",
"/wiki/California_Institute_of_Technology",
"/wiki/University_of_Oxford",
"/wiki/Brandeis_University",
"/wiki/University_of_Wales",
"/wiki/Merton_College,_Oxford",
"/wiki/University_of_Aberdeen",
"/wiki/Mason_College",
"/wiki/University_of_London",
"/wiki/Cambridge_University",
"/wiki/Royal_Frederick_University",
"/wiki/Oberlin_College",
"/wiki/University_of_Innsbruck",
"/wiki/University_of_Toronto",
"/wiki/University_of_Western_Ontario",
"/wiki/Blavatsky_Lodge",
"/wiki/Theosophical_Society",
"/wiki/Theosophical_Society_Adyar",
"/wiki/Theosophical_Society_Pasadena",
"/wiki/United_Lodge_of_Theosophists",
"/wiki/Category%253ATheosophy",
"/wiki/University_of_Lund",
"/wiki/University_of_Stockholm",
"/wiki/Metallurgical_Laboratory",
"/wiki/Halle_University",
"/wiki/Technical_University_of_Vienna",
"/wiki/Graz_University_of_Technology",
"/wiki/Rugby_School",
"/wiki/Sciences_Po",
"/wiki/Marietta_College",
"/wiki/University_of_Cincinnati",
"/wiki/Royal_Danish_Army",
"/wiki/Faculty_of_Law_of_Paris",
"/wiki/College_of_Wooster",
"/wiki/Washington_University_in_St._Louis",
"/wiki/University_of_Minnesota",
"/wiki/Sidney_Sussex_College,_Cambridge",
"/wiki/Technical_University_of_Munich",
"/wiki/University_of_Freiburg",
"/wiki/Batley_Grammar_School",
"/wiki/Pasteur_Institute_of_Tunis",
"/wiki/MSc",
"/wiki/Lister_Institute",
"/wiki/City_of_London_School",
"/wiki/Guy's_Hospital",
"/wiki/University_of_Madras",
"/wiki/Indian_Audits_and_Accounts_Service",
"/wiki/Rajabazar_Science_College",
"/wiki/Indian_Association_for_the_Cultivation_of_Science",
"/wiki/Indian_Institute_of_Science",
"/wiki/Raman_Research_Institute",
"/wiki/University_of_Lausanne",
"/wiki/Yale_University",
"/wiki/BASF",
"/wiki/IG_Farben",
"/wiki/Kaiser_Wilhelm_Institute_for_Biology",
"/wiki/Rockford_Female_Seminary",
"/wiki/Stevens_Institute_of_Technology",
"/wiki/General_Electric",
"/wiki/Ipswich_School",
"/wiki/Royal_College_of_Surgeons_of_England",
"/wiki/King's_College,_London",
"/wiki/Dublin_Institute_for_Advanced_Studies",
"/wiki/Ghent_University",
"/wiki/University_of_Bristol",
"/wiki/University_of_Miami",
"/wiki/Florida_State_University",
"/wiki/University_of_Kentucky",
"/wiki/Bryn_Mawr_College",
"/wiki/Marine_Biological_Laboratory",
"/wiki/Earlham_College",
"/wiki/University_of_Montana",
"/wiki/University_of_California,_Berkeley",
"/wiki/Institute_for_Nuclear_Studies",
"/wiki/University_of_California,_San_Diego",
"/wiki/University_of_Rochester",
"/wiki/University_of_California,_San_Francisco",
"/wiki/University_of_Oregon",
"/wiki/Spencer_Cavendish,_8th_Duke_of_Devonshire",
"/wiki/Charles_Vane-Tempest-Stewart,_6th_Marquess_of_Londonderry",
"/wiki/Augustine_Birrell",
"/wiki/Reginald_McKenna",
"/wiki/Walter_Runciman,_1st_Viscount_Runciman_of_Doxford",
"/wiki/Jack_Pease,_1st_Baron_Gainford",
"/wiki/Robert_Crewe-Milnes,_1st_Marquess_of_Crewe",
"/wiki/H._A._L._Fisher",
"/wiki/Edward_Wood,_1st_Earl_of_Halifax",
"/wiki/Sir_Charles_Trevelyan,_3rd_Baronet",
"/wiki/Eustace_Percy,_1st_Baron_Percy_of_Newcastle",
"/wiki/Hastings_Lees-Smith",
"/wiki/Donald_Maclean_%2528British_politician%2529",
"/wiki/Oliver_Stanley",
"/wiki/James_Stanhope,_7th_Earl_Stanhope",
"/wiki/Herbrand_Sackville,_9th_Earl_De_La_Warr",
"/wiki/Herwald_Ramsbotham,_1st_Viscount_Soulbury",
"/wiki/Rab_Butler",
"/wiki/File%253ARoyal_Coat_of_Arms_of_the_United_Kingdom_%2528HM_Government%2529_%2528Tudor_Crown%2529.svg",
"/wiki/Gonville_and_Caius_College,_Cambridge",
"/wiki/Physikalisch-Technische_Reichsanstalt",
"/wiki/Manhattan_Project",
"/wiki/Austrian_Academy_of_Sciences",
"/wiki/Fordham_University",
"/wiki/Ph.D",
"/wiki/Cornell_University",
"/wiki/Tollington_School",
"/wiki/The_Leys_School",
"/wiki/St_Bartholomew's_Hospital",
"/wiki/Carnegie_Institute_of_Technology",
"/wiki/Bell_Labs",
"/wiki/Corpus_Christi_College,_Cambridge",
"/wiki/Imperial_College_London",
"/wiki/University_of_St._Andrews",
"/wiki/Durham_University",
"/wiki/University_of_Birmingham",
"/wiki/Old_Cantonal_School_Aarau",
"/wiki/Matura",
"/wiki/Semmelweis_University",
"/wiki/University_of_Szeged",
"/wiki/University_College,_Oxford",
"/wiki/MA_%2528Oxon%2529",
"/wiki/Scuola_Normale_Superiore_di_Pisa",
"/wiki/Laurea",
"/wiki/University_of_Florence",
"/wiki/Sapienza_University_of_Rome",
"/wiki/Randolph_College",
"/wiki/St._Olaf_College",
"/wiki/University_of_South_Dakota",
"/wiki/Max_Planck_Institute_for_Biochemistry",
"/wiki/Technical_University_of_Danzig",
"/wiki/Universitat_Karlsruhe_%2528TH%2529",
"/wiki/Utrecht_University",
"/wiki/University_of_Hamburg",
"/wiki/University_of_Budapest",
"/wiki/Albert_Ludwigs_University_of_Freiburg",
"/wiki/Niels_Bohr_Institute",
"/wiki/Technical_University_of_Denmark",
"/wiki/University_of_Illinois_Urbana-Champaign",
"/wiki/Saint_Louis_University",
"/wiki/Massachusetts_Institute_of_Technology",
"/wiki/Kaiser_Wilhelm_Institute_for_Chemistry",
"/wiki/Max_Planck_Society",
"/wiki/University_of_Wisconsin",
"/wiki/University_of_Wisconsin-Madison",
"/wiki/University_of_Helsinki",
"/wiki/Helsinki_University_of_Technology",
"/wiki/Royal_Polytechnic_Institution",
"/wiki/St_Mary's_Hospital_Medical_School",
"/wiki/St_Mary's_Hospital,_London",
"/wiki/Fitzwilliam_College,_Cambridge",
"/wiki/Istituto_Superiore_di_Sanita",
"/wiki/University_College_Hospital",
"/wiki/Scotch_College,_Adelaide",
"/wiki/Magdalen_College,_Oxford",
"/wiki/University_of_Sheffield",
"/wiki/Australian_National_University",
"/wiki/National_Normal_University",
"/wiki/Cumberland_University",
"/wiki/Mount_Allison_University",
"/wiki/Upper_Iowa_University",
"/wiki/St_John's_College,_Cambridge",
"/wiki/National_Physical_Laboratory_%2528United_Kingdom%2529",
"/wiki/University_of_Sydney",
"/wiki/British_Dyestuffs_Corporation",
"/wiki/First_Faculty_of_Medicine,_Charles_University_in_Prague",
"/wiki/Charles_University",
"/wiki/Lycee_Henri-IV",
"/wiki/Osborne_Naval_College",
"/wiki/Birkbeck,_University_of_London",
"/wiki/Universitat_Basel",
"/wiki/J._R._Geigy_AG",
"/wiki/Kyoto_Imperial_University",
"/wiki/Osaka_Imperial_University",
"/wiki/Osaka_University",
"/wiki/Imperial_University_of_Tokyo",
"/wiki/University_of_Coimbra",
"/wiki/University_of_Lisbon",
"/wiki/University_of_Mississippi",
"/wiki/Kilmarnock_Academy",
"/wiki/Rowett_Research_Institute",
"/wiki/Food_and_Agriculture_Organization",
"/wiki/University_of_Cologne",
"/wiki/Lafayette_College",
"/wiki/University_of_Pittsburgh",
"/wiki/Mayo_Clinic",
"/wiki/Parke-Davis",
"/wiki/St._Luke's-Roosevelt_Hospital_Center",
"/wiki/London_School_of_Economics",
"/wiki/University_of_California,_Los_Angeles",
"/wiki/Howard_University",
"/wiki/University_of_Manchester_Institute_of_Science_and_Technology",
"/wiki/St._John's_College,_Cambridge",
"/wiki/Atomic_Energy_Research_Establishment",
"/wiki/Trinity_College_Dublin",
"/wiki/Methodist_College_Belfast",
"/wiki/Berkeley_Radiation_Laboratory",
"/wiki/US_Atomic_Energy_Commission",
"/wiki/University_of_Cape_Town",
"/wiki/Stanford_University",
"/wiki/Purdue_University",
"/wiki/Peterhouse,_Cambridge",
"/wiki/University_of_Sussex",
"/wiki/University_of_Houston",
"/wiki/Ecole_Polytechnique_Federale_de_Lausanne",
"/wiki/Winchester_College",
"/wiki/Rutgers_University",
"/wiki/Ecole_des_Chartes",
"/wiki/Groningen_University",
"/wiki/Technische_Universitat_Darmstadt",
"/wiki/University_of_Halle",
"/wiki/University_of_Konigsberg",
"/wiki/Max_Planck_Institute_for_Medical_Research",
"/wiki/Massachusetts_General_Hospital",
"/wiki/Royal_Military_College,_Sandhurst",
"/wiki/Virginia_Military_Institute",
"/wiki/Oregon_State_University",
"/wiki/Center_for_the_Study_of_Democratic_Institutions",
"/wiki/St._Paul's_School_%2528New_Hampshire%2529",
"/wiki/University_of_Missouri",
"/wiki/University_of_Michigan",
"/wiki/University_of_Arizona",
"/wiki/University_of_Texas_at_Dallas",
"/wiki/George_Washington_University",
"/wiki/Bell_Telephone_Laboratories",
"/wiki/Whitman_College",
"/wiki/Bell_Laboratories",
"/wiki/Shockley_Semiconductor",
"/wiki/Bellevue_Hospital",
"/wiki/New_York-Presbyterian_Hospital",
"/wiki/National_Southwestern_Associated_University",
"/wiki/Tsinghua_University",
"/wiki/Stony_Brook_University",
"/wiki/Chinese_University_of_Hong_Kong",
"/wiki/National_Che_Kiang_University",
"/wiki/University_of_Frankfurt_am_Main",
"/wiki/Oriel_College,_Oxford",
"/wiki/Hatfield_Polytechnic",
"/wiki/University_of_Algiers",
"/wiki/St_John's_College,_Oxford",
"/wiki/Voronezh_State_University",
"/wiki/Lebedev_Physical_Institute",
"/wiki/Moscow_State_University",
"/wiki/Russian_Academy_of_Sciences",
"/wiki/Second_Moscow_State_University",
"/wiki/Moscow_Institute_of_Physics_and_Technology",
"/wiki/Laboratory_of_Molecular_Biology",
"/wiki/University_of_Nebraska",
"/wiki/Stuyvesant_High_School",
"/wiki/Pontifical_University_of_St._Thomas_Aquinas_%2528Angelicum%2529",
"/wiki/Los_Alamos_National_Laboratory",
"/wiki/University_of_Palermo",
"/wiki/Dartmouth_College",
"/wiki/City_College_of_New_York",
"/wiki/National_Institutes_of_Health",
"/wiki/New_York_University_Grossman_School_of_Medicine",
"/wiki/Case_School_of_Applied_Science",
"/wiki/University_of_Melbourne",
"/wiki/National_Institute_for_Medical_Research",
"/wiki/Adams_College",
"/wiki/University_of_Pennsylvania",
"/wiki/Technische_Universitat_Munchen",
"/wiki/Michigan_Technological_University",
"/wiki/University_of_Zagreb",
"/wiki/Jagiellonian_University",
"/wiki/Baku_State_University",
"/wiki/Diploma",
"/wiki/Ioffe_Physico-Technical_Institute",
"/wiki/D.Sc.",
"/wiki/Kharkiv_Polytechnic_Institute",
"/wiki/Kharkiv_University",
"/wiki/Kharkiv_Institute_of_Physics_and_Technology",
"/wiki/Institute_for_Physical_Problems",
"/wiki/MSU_Faculty_of_Physics",
"/wiki/Clifton_College",
"/wiki/MRC_Laboratory_of_Molecular_Biology",
"/wiki/Royal_Air_Force",
"/wiki/Salk_Institute_for_Biological_Studies",
"/wiki/Indiana_University_Bloomington",
"/wiki/Indiana_University",
"/wiki/Cold_Spring_Harbor_Laboratory",
"/wiki/King_Edward's_School,_Birmingham",
"/wiki/University_of_St_Andrews",
"/wiki/Budapest_University_of_Technology_and_Economics",
"/wiki/Sarah_Lawrence_College",
"/wiki/Los_Alamos_Laboratory",
"/wiki/Argonne_National_Laboratory",
"/wiki/Martin_Luther_University_of_Halle-Wittenberg",
"/wiki/Max_Planck_Institute_fur_Kohlenforschung",
"/wiki/Politecnico_di_Milano",
"/wiki/Pavia_University",
"/wiki/University_of_Rome_La_Sapienza",
"/wiki/Politecnico_di_Torino",
"/wiki/DPhil",
"/wiki/Northwestern_University",
"/wiki/Furman_University",
"/wiki/Duke_University",
"/wiki/Institute_for_Defense_Analyses",
"/wiki/Moscow_Engineering_Physics_Institute",
"/wiki/Sir_John_Leman_High_School",
"/wiki/Somerville_College,_Oxford",
"/wiki/Doctorate",
"/wiki/Morehouse_College",
"/wiki/Crozer_Theological_Seminary",
"/wiki/Boston_University",
"/wiki/Kyoto_University",
"/wiki/University_of_Tsukuba",
"/wiki/RIKEN",
"/wiki/University_of_Tokyo",
"/wiki/Rockefeller_Institute_for_Medical_Research",
"/wiki/Acadia_University",
"/wiki/Johann_Wolfgang_Goethe_University_Frankfurt_am_Main",
"/wiki/Max_Planck_Institute_for_Biophysical_Chemistry",
"/wiki/Braunschweig_University_of_Technology",
"/wiki/BSc",
"/wiki/Emmanuel_College,_Cambridge",
"/wiki/University_of_Leicester",
"/wiki/Karolinska_Institutet",
"/wiki/Norwegian_University_of_Science_and_Technology",
"/wiki/Brown_University",
"/wiki/Government_College,_Lahore",
"/wiki/University_of_the_Punjab",
"/wiki/University_of_British_Columbia",
"/wiki/University_of_Florida",
"/wiki/Santa_Fe_Institute",
"/wiki/University_of_New_Mexico",
"/wiki/University_of_Southern_California",
"/wiki/Institut_de_Chimie_des_Substances_Naturelles",
"/wiki/Texas_A%2526M_University",
"/wiki/University_of_Oslo",
"/wiki/Vanderbilt_University",
"/wiki/Michigan_State_University",
"/wiki/University_of_Turin",
"/wiki/Portora_Royal_School",
"/wiki/Erasmus_University",
"/wiki/Royal_Institute_of_Technology",
"/wiki/University_of_Maryland,_College_Park",
"/wiki/CNRS",
"/wiki/Grenoble",
"/wiki/University_of_Buenos_Aires",
"/wiki/Sydney_Hospital",
"/wiki/Rostov_State_University",
"/wiki/DuPont",
"/wiki/International_Maize_and_Wheat_Improvement_Center",
"/wiki/Technical_University_of_Budapest",
"/wiki/British_Thomson-Houston",
"/wiki/Carleton_University",
"/wiki/National_Research_Council_of_Canada",
"/wiki/University_of_Saskatchewan",
"/wiki/Washburn_University",
"/wiki/Kharkiv_National_University_of_Economics",
"/wiki/National_Bureau_of_Economic_Research",
"/wiki/University_of_California,_Santa_Barbara",
"/wiki/Swarthmore_College",
"/wiki/Ursinus_College",
"/wiki/Balliol_College,_Oxford",
"/wiki/Nuffield_College,_Oxford",
"/wiki/Tokyo_Imperial_University",
"/wiki/IBM",
"/wiki/T._J._Watson_Research_Center",
"/wiki/Sony",
"/wiki/Rensselaer_Polytechnic_Institute",
"/wiki/Rostock_University",
"/wiki/Breslau_University",
"/wiki/Konrad_Lorenz_Forschungsstelle",
"/wiki/Konrad_Lorenz_Institute_for_Evolution_and_Cognition_Research",
"/wiki/Konrad_Lorenz_Institute_of_Ethology",
"/wiki/Bradfield_College",
"/wiki/Gresham_College",
"/wiki/King's_College,_Taunton",
"/wiki/Manchester_University_%2528Indiana%2529",
"/wiki/Ohio_State_University",
"/wiki/Carnegie_Mellon_University",
"/wiki/University_of_Liege",
"/wiki/Institut_Jules_Bordet",
"/wiki/Universite_libre_de_Bruxelles",
"/wiki/Universite_catholique_de_Louvain",
"/wiki/Our_Lady_College,_Antwerp",
"/wiki/KU_Leuven",
"/wiki/Carol_Davila_University_of_Medicine_and_Pharmacy",
"/wiki/Lycee_Saint-Louis-de-Gonzague",
"/wiki/Downside_School",
"/wiki/University_College_Dublin",
"/wiki/Graduate_Institute_of_International_Studies",
"/wiki/University_of_Salzburg",
"/wiki/Nordic_Institute_for_Theoretical_Physics",
"/wiki/St_Catherine's_College,_Oxford",
"/wiki/University_of_Warwick",
"/wiki/Czech_Technical_University_in_Prague",
"/wiki/London_Research_Institute",
"/wiki/Leningrad_State_University",
"/wiki/USSR_Academy_of_Sciences",
"/wiki/Stanford_Linear_Accelerator_Center",
"/wiki/Union_College,_New_York",
"/wiki/Balliol_College",
"/wiki/Columbia_Presbyterian_Medical_Center",
"/wiki/Fox_Chase_Cancer_Center",
"/wiki/Library_of_Congress",
"/wiki/St_Dominic's_Grammar_School_for_Girls",
"/wiki/University_of_Wisconsin,_Madison",
"/wiki/U.S._Department_of_the_Treasury",
"/wiki/Hoover_Institution",
"/wiki/United_States_Naval_Research_Laboratory",
"/wiki/University_of_Texas,_Austin",
"/wiki/Universite_de_Montreal",
"/wiki/University_of_Burgundy",
"/wiki/Baylor_University",
"/wiki/Tulane_University",
"/wiki/Hunter_College",
"/wiki/James_J._Peters_VA_Medical_Center",
"/wiki/Lund_University",
"/wiki/Stockholm_School_of_Economics",
"/wiki/Rice_University",
"/wiki/University_of_Geneva",
"/wiki/University_of_Delaware",
"/wiki/University_of_Alexandria",
"/wiki/University_of_Warsaw",
"/wiki/Government_College_University_%2528Lahore%2529",
"/wiki/Pakistan_Atomic_Energy_Commission",
"/wiki/Space_and_Upper_Atmosphere_Research_Commission",
"/wiki/Pakistan_Institute_of_Nuclear_Science_and_Technology",
"/wiki/Government_College_University,_Lahore",
"/wiki/International_Centre_for_Theoretical_Physics",
"/wiki/COMSATS",
"/wiki/TWAS",
"/wiki/University_of_Karachi",
"/wiki/Edward_Bouchet_Abdus_Salam_Institute",
"/wiki/University_of_Texas_at_Austin",
"/wiki/TU_Braunschweig",
"/wiki/Rondebosch_Boys'_High_School",
"/wiki/University_of_Athens",
"/wiki/South_Dakota_State_University",
"/wiki/Iowa_State_University",
"/wiki/University_of_West_Indies",
"/wiki/Southern_Methodist_University",
"/wiki/University_of_Utah",
"/wiki/Chadron_State_College",
"/wiki/Pennsylvania_State_University",
"/wiki/Clare_Hall,_Cambridge",
"/wiki/Virginia_Commonwealth_University",
"/wiki/American_Academy_of_Arts_and_Sciences",
"/wiki/Dana-Farber_Cancer_Institute",
"/wiki/Lycee_Michelet_%2528Vanves%2529",
"/wiki/Free_French_Forces",
"/wiki/Boston_Children's_Hospital",
"/wiki/Hopital_Saint-Louis",
"/wiki/Inserm",
"/wiki/Jackson_Laboratory",
"/wiki/National_University_of_La_Plata",
"/wiki/Los_Angeles_City_College",
"/wiki/Associate_of_Arts",
"/wiki/Cowles_Commission",
"/wiki/Kyoto_Institute_of_Technology",
"/wiki/Karolinska_Institute",
"/wiki/University_of_the_Witwatersrand",
"/wiki/National_University_of_Colombia",
"/wiki/University_of_Cartagena",
"/wiki/National_Autonomous_University_of_Mexico",
"/wiki/University_of_Washington",
"/wiki/Yerkes_Observatory",
"/wiki/Ballistic_Research_Laboratory",
"/wiki/Brasenose_College,_Oxford",
"/wiki/CERN",
"/wiki/Max_Planck_Institute_of_Immunobiology_and_Epigenetics",
"/wiki/Pretoria_Bantu_Normal_College",
"/wiki/University_of_South_Africa",
"/wiki/St_Peter's_Theological_College",
"/wiki/Licentiate_of_Theology",
"/wiki/Hauptman-Woodward_Medical_Research_Institute",
"/wiki/University_at_Buffalo",
"/wiki/Washington_and_Lee_University",
"/wiki/The_New_School",
"/wiki/Fritz_Haber_Institute",
"/wiki/IBM_Zurich_Research_Laboratory",
"/wiki/Tohoku_University",
"/wiki/Freiburg_University",
"/wiki/National_Taiwan_University",
"/wiki/National_Tsing_Hua_University",
"/wiki/Lawrence_Berkeley_National_Laboratory",
"/wiki/Academia_Sinica",
"/wiki/Brooklyn_College",
"/wiki/Government_College,_Ibadan",
"/wiki/Abeokuta_Grammar_School",
"/wiki/University_College,_Ibadan",
"/wiki/Middle_Tennessee_State_University",
"/wiki/University_of_Tennessee",
"/wiki/Master's_degree",
"/wiki/George_Mason_University",
"/wiki/Virginia_Tech",
"/wiki/University_of_Virginia",
"/wiki/IBM_Research",
"/wiki/Battelle_Memorial_Institute",
"/wiki/Rollins_College",
"/wiki/University_of_Nebraska-Lincoln",
"/wiki/Merck_%2526_Co",
"/wiki/University_of_Dayton",
"/wiki/Howard_Hughes_Medical_Institute",
"/wiki/University_of_Costa_Rica",
"/wiki/University_of_Essex",
"/wiki/Fermi_National_Accelerator_Laboratory",
"/wiki/Illinois_Institute_of_Technology",
"/wiki/Brookhaven_National_Laboratory",
"/wiki/Max_Planck_Institute_for_Biophysics",
"/wiki/University_of_Malaya",
"/wiki/Imperial_Chemical_Industries",
"/wiki/University_of_Dundee",
"/wiki/Burroughs_Wellcome",
"/wiki/Ecole_Nationale_Superieure_des_Mines_de_Paris",
"/wiki/University_of_Colorado_Boulder",
"/wiki/Arizona_State_University",
"/wiki/Grinnell_College",
"/wiki/Gettysburg_College",
"/wiki/Heinrich_Pette_Institute",
"/wiki/National_Institute_of_Allergy_and_Infectious_Diseases",
"/wiki/Amherst_College",
"/wiki/Memorial_Sloan_Kettering_Cancer_Center",
"/wiki/National_Cancer_Institute",
"/wiki/University_of_Aarhus",
"/wiki/University_of_Alberta",
"/wiki/Lawrence_Berkeley_Laboratory",
"/wiki/College_of_the_Holy_Cross",
"/wiki/Brigham_and_Women's_Hospital",
"/wiki/Mary_Imogene_Bassett_Hospital",
"/wiki/Baruch_College",
"/wiki/RAND_Corporation",
"/wiki/University_of_California,_Irvine",
"/wiki/Paris-Saclay_University",
"/wiki/Ecole_Superieure_de_Physique_et_de_Chimie_Industrielles_de_la_Ville_de_Paris",
"/wiki/University_of_Paris_XI",
"/wiki/Varian_Associates",
"/wiki/Max_Planck_Institute_of_Neurobiology",
"/wiki/University_of_Delhi",
"/wiki/St_Hugh's_College,_Oxford",
"/wiki/SOAS_University_of_London",
"/wiki/DSc",
"/wiki/Mines_Paris_-_PSL",
"/wiki/ESPCI_Paris",
"/wiki/University_of_Washington,_Seattle",
"/wiki/University_of_California,_Davis",
"/wiki/Cooper_Union",
"/wiki/University_of_Massachusetts_Amherst",
"/wiki/Princeton_Plasma_Physics_Laboratory",
"/wiki/National_Radio_Astronomy_Observatory",
"/wiki/Five_College_Radio_Astronomy_Observatory",
"/wiki/Georgia_Institute_of_Technology",
"/wiki/New_England_Biolabs",
"/wiki/Union_College_%2528Kentucky%2529",
"/wiki/University_of_Fort_Hare",
"/wiki/Witwatersrand_University",
"/wiki/Potchefstroom_University",
"/wiki/US_Merchant_Marine_Academy",
"/wiki/McMaster_University",
"/wiki/National_Institute_of_Health",
"/wiki/University_of_North_Carolina_at_Chapel_Hill",
"/wiki/Cairo_University",
"/wiki/Wayne_State_University",
"/wiki/University_of_Queensland",
"/wiki/Free_University_of_Berlin",
"/wiki/National_Oceanic_and_Atmospheric_Administration",
"/wiki/Colorado_State_University",
"/wiki/Max_Planck_Institute_for_Chemistry",
"/wiki/Scripps_Institution_of_Oceanography",
"/wiki/Jet_Propulsion_Laboratory",
"/wiki/Ohio_Wesleyan_University",
"/wiki/European_Molecular_Biology_Laboratory",
"/wiki/Max_Planck_Institute_for_Developmental_Biology",
"/wiki/University_of_Notre_Dame",
"/wiki//wiki/Rutgers_University",
"/wiki/Queen's_University_Belfast",
"/wiki/Free_Polish_University",
"/wiki/University_of_Connecticut",
"/wiki/Bolton_School",
"/wiki/Hope_College",
"/wiki/John_Curtin_School_of_Medical_Research",
"/wiki/Catholic_University_of_Portugal",
"/wiki/Salesian_Pontifical_University",
"/wiki/Antioch_University",
"/wiki/The_Hague_Academy_of_International_Law",
"/wiki/International_Institute_of_Human_Rights",
"/wiki/Oxford_University",
"/wiki/Juniata_College",
"/wiki/National_Institute_of_Standards_and_Technology",
"/wiki/Brigham_Young_University",
"/wiki/University_of_California",
"/wiki/Rastrick_Grammar_School",
"/wiki/Aarhus_University",
"/wiki/University_of_Vermont",
"/wiki/School_for_International_Training",
"/wiki/University_of_Stuttgart",
"/wiki/Augustana_College_%2528Illinois%2529",
"/wiki/Bristol_Aeroplane_Company",
"/wiki/SUNY_Downstate_Medical_Center",
"/wiki/King_Saud_University",
"/wiki/DePauw_University",
"/wiki/Abbott_Laboratories",
"/wiki/University_of_Texas_Health_Science_Center_at_Houston",
"/wiki/St_Patrick's_College,_Maynooth",
"/wiki/Presidency_College,_Calcutta",
"/wiki/Delhi_University",
"/wiki/All_Souls_College,_Oxford",
"/wiki/University_of_Michigan-Ann_Arbor",
"/wiki/Alexandria_University",
"/wiki/Zewail_City_of_Science,_Technology_and_Innovation",
"/wiki/Graduate_Institute_of_International_and_Development_Studies",
"/wiki/University_of_Waterloo",
"/wiki/Texas_Instruments",
"/wiki/Belarusian_Polytechnic_Institute",
"/wiki/Leningrad_Electrotechnical_Institute",
"/wiki/Specialist_diploma",
"/wiki/Ioffe_Institute",
"/wiki/Candidate_of_Sciences",
"/wiki/Russian_Academy_of_Science",
"https%253A//de.wikipedia.org/wiki/Fernmeldetechnisches_Zentralamt",
"/wiki/RCA_Laboratories",
"/wiki/Victoria_University_of_Wellington",
"/wiki/Tokyo_Institute_of_Technology",
"/wiki/Institute_of_Science_Tokyo",
"/wiki/University_of_Gothenburg",
"/wiki/Beijing_Foreign_Studies_University",
"/wiki/Colorado_College",
"/wiki/JILA",
"/wiki/Max_Planck_Institute_of_Quantum_Optics",
"/wiki/Monsanto_Company",
"/wiki/Nagoya_University",
"/wiki/The_Scripps_Research_Institute",
"/wiki/Kyushu_University",
"/wiki/Fred_Hutchinson_Cancer_Research_Center",
"/wiki/Biodesign_Institute",
"/wiki/Amrita_Vishwa_Vidyapeetham",
"/wiki/Dragon_School",
"/wiki/Magdalen_College_School,_Oxford",
"/wiki/Imperial_Cancer_Research_Fund",
"/wiki/Francis_Crick_Institute",
"/wiki/University_of_East_Anglia",
"/wiki/Royal_Society",
"/wiki/Linacre_College",
"/wiki/Cancer_Research_UK",
"/wiki/Kwame_Nkrumah_University_of_Science_and_Technology",
"/wiki/Macalester_College",
"/wiki/Georgetown_University",
"/wiki/SDA_Bocconi_School_of_Management",
"/wiki/University_of_Milan",
"/wiki/Chandra_X-ray_Observatory",
"/wiki/Monsanto",
"/wiki/Tokai_University",
"/wiki/Berea_College",
"/wiki/Shimadzu_Corp.",
"/wiki/Universitat_Bern",
"/wiki/ShanghaiTech_University",
"/wiki/Molecular_Sciences_Institute",
"/wiki/Scripps_Research_Institute",
"/wiki/Okinawa_Institute_of_Science_and_Technology",
"/wiki/Merchant_Taylors'_School,_Northwood",
"/wiki/Wellcome_Trust_Sanger_Institute",
"/wiki/Hebrew_University_of_Jerusalem",
"/wiki/Center_for_Advanced_Study_in_the_Behavioral_Sciences",
"/wiki/Stanford",
"/wiki/University_of_Kansas",
"/wiki/Landau_Institute_for_Theoretical_Physics",
"/wiki/N._I._Lobachevsky_State_University_of_Nizhny_Novgorod",
"/wiki/Institute_for_Quantum_Computing",
"/wiki/Augsburg_College",
"/wiki/Tufts_University",
"/wiki/Mellon_Institute_of_Industrial_Research",
"/wiki/Queen_Mary_University_of_London",
"/wiki/University_of_Nottingham",
"/wiki/University_of_Tehran",
"/wiki/Williams_College",
"/wiki/Erasmus_University_Rotterdam",
"/wiki/Shanghai_Jiao_Tong_University",
"/wiki/Technion_-_Israel_Institute_of_Technology",
"/wiki/University_of_Nairobi",
"/wiki/Benedictine_College",
"/wiki/Norwegian_School_of_Economics",
"/wiki/Federal_Reserve_Bank_of_Minneapolis",
"/wiki/Federal_Reserve_Bank_of_Richmond",
"/wiki/Ludwig-Maximilians_University",
"/wiki/European_Laboratory_for_Non-Linear_Spectroscopy_%2528LENS%2529,_Universita_degli_Studi_di_Firenze",
"/wiki/Ecole_superieure_de_chimie_physique_electronique_de_Lyon",
"/wiki/Institut_francais_du_petrole",
"/wiki/University_of_California,_Riverside",
"/wiki/University_of_Western_Australia",
"/wiki/Royal_Perth_Hospital",
"/wiki/Royal_Central_School_of_Speech_and_Drama",
"/wiki/New_England_Complex_Systems_Institute",
"/wiki/University_of_Maryland",
"/wiki/Paris_Diderot_University",
"/wiki/Hong_Kong_University_of_Science_and_Technology",
"/wiki/University_of_Massachusetts",
"/wiki/Chittagong_Government_High_School",
"/wiki/Chattogram_Collegiate_School",
"/wiki/University_of_Chittagong",
"/wiki/Glasgow_Caledonian_University",
"/wiki/Bangladesh_University_of_Engineering_and_Technology",
"/wiki/North_South_University",
"/wiki/Ahsanullah_University_of_Science_and_Technology",
"/wiki/American_International_University-Bangladesh",
"/wiki/Independent_University,_Bangladesh",
"/wiki/Dhaka_Medical_College_and_Hospital",
"/wiki/Bangabandhu_Sheikh_Mujib_Medical_University",
"/wiki/East_West_University",
"/wiki/University_of_Asia_Pacific",
"/wiki/Bangladesh_National_Zoo",
"/wiki/Template%253AColleges_in_Dhaka",
"/wiki/Cowles_Foundation",
"/wiki/Universite_Paris-Saclay",
"/wiki/Forschungszentrum_Julich",
"/wiki/Gwangju_Institute_of_Science_and_Technology",
"/wiki/Argonne_National_Laboratories",
"/wiki/Fritz_Haber_Institute_of_the_MPG",
"/wiki/Antioch_College",
"/wiki/Cardiff_University",
"/wiki/Osaka_City_University",
"/wiki/KEK",
"/wiki/Kyoto_Sangyo_University",
"/wiki/Nagasaki_University",
"/wiki/Churchill_College,_Cambridge",
"/wiki/German_Cancer_Research_Center",
"/wiki/University_of_Poitiers",
"/wiki/University_of_Oulu",
"/wiki/Graduate_Center,_CUNY",
"/wiki/University_of_Greenwich",
"/wiki/Wikipedia%253ACitation_needed",
"/wiki/Standard_Telephones_and_Cables",
"/wiki/ITT_Corporation",
"/wiki/Maharaja_Sayajirao_University_of_Baroda",
"/wiki/Ohio_University",
"/wiki/Oak_Ridge_National_Laboratory",
"/wiki/Wauwatosa_East_High_School",
"/wiki/Lawrence_University",
"/wiki/Weizmann_Institute_of_Science",
"/wiki/Salk_Institute",
"/wiki/University_of_California,_Santa_Cruz",
"/wiki/West_University_of_Timisoara",
"/wiki/Juris_Doctor",
"/wiki/Institute_of_Solid_State_Physics_%2528Russia%2529",
"/wiki/Radboud_University_Nijmegen",
"/wiki/Radboud_University_of_Nijmegen",
"/wiki/National_University_of_Singapore",
"/wiki/Hercules_Inc.",
"/wiki/De_La_Salle_University",
"/wiki/Teijin",
"/wiki/Syracuse_University",
"/wiki/Hokkaido_University",
"/wiki/Okayama_University_of_Science",
"/wiki/Kurashiki_University_of_Science_and_the_Arts",
"/wiki/Bangor_University",
"/wiki/Bourn_Hall_Clinic",
"/wiki/National_University_of_San_Marcos",
"/wiki/Jilin_University",
"/wiki/Beijing_Normal_University",
"/wiki/Willamette_University",
"/wiki/University_of_Southampton",
"/wiki/University_of_Cyprus",
"/wiki/Space_Telescope_Science_Institute",
"/wiki/Wright-Patterson_Air_Force_Base",
"/wiki/Madison_Business_College",
"/wiki/Associate_degree",
"/wiki/University_of_Colorado,_Boulder",
"/wiki/Eastern_Mennonite_University",
"/wiki/University_of_Massachusetts_Lowell",
"/wiki/Sanaa_University",
"/wiki/Carnegie-Mellon_University",
"/wiki/Peking_University_HSBC_Business_School",
"/wiki/Pierre-and-Marie-Curie_University",
"/wiki/University_of_Minnesota_Duluth",
"/wiki/Christ_Church,_Oxford",
"/wiki/Kobe_University",
"/wiki/Nara_Institute_of_Science_and_Technology",
"/wiki/J._David_Gladstone_Institutes",
"/wiki/People's_Liberation_Army_Arts_College",
"/wiki/Tel_Aviv_University",
"/wiki/Universite_de_Strasbourg",
"/wiki/Pretoria_Boys_High_School",
"/wiki/Doctorate_of_Philosophy",
"/wiki/RWTH_Aachen_University",
"/wiki/Utah_State_University",
"/wiki/Kalamazoo_College",
"/wiki/Meijo_University",
"/wiki/University_of_Tokushima",
"/wiki/Ruprecht_Karl_University_of_Heidelberg",
"/wiki/Max_Planck_Institute_for_Multidisciplinary_Sciences",
"/wiki/University_of_Turku",
"/wiki/Barkatullah_University",
"/wiki/Lady_Margaret_Hall,_Oxford",
"/wiki/Paris_Dauphine_University",
"/wiki/Ecole_nationale_des_ponts_et_chaussees",
"/wiki/Toulouse_1_University_Capitole",
"/wiki/Toulouse_School_of_Economics",
"/wiki/Ecole_des_hautes_etudes_en_sciences_sociales",
"/wiki/Saitama_University",
"/wiki/Kavli_Institute_for_the_Physics_and_Mathematics_of_the_Universe",
"/wiki/Dalhousie_University",
"/wiki/Queen's_University_at_Kingston",
"/wiki/Istanbul_University",
"/wiki/UNC_Lineberger_Comprehensive_Cancer_Center",
"/wiki/Merck_%2526_Co.",
"/wiki/Drew_University",
"/wiki/University_of_Yamanashi",
"/wiki/Tokyo_University_of_Science",
"/wiki/Kitasato_University",
"/wiki/Wesleyan_University",
"/wiki/Peking_University_Health_Science_Center",
"/wiki/Traditional_Chinese_Medicine",
"/wiki/Belarusian_State_University",
"/wiki/Hawick_High_School",
"/wiki/Fettes_College",
"/wiki/St_Paul's_School,_London",
"/wiki/Ecole_europeenne_de_chimie,_polymeres_et_materiaux",
"/wiki/Tianjin_University",
"/wiki/University_of_New_South_Wales",
"/wiki/University_of_Hong_Kong",
"/wiki/Royal_Dutch_Shell",
"/wiki/Ecole_polytechnique_federale_de_Lausanne",
"/wiki/University_at_Albany",
"/wiki/University_of_Maine",
"/wiki/University_of_Kent",
"/wiki/Lucent_Technologies",
"/wiki/Universite_Grenoble_Alpes",
"/wiki/Pierre_and_Marie_Curie_University",
"/wiki/ENSTA_ParisTech",
"/wiki/Lawrence_Livermore_National_Laboratory",
"/wiki/Royal_Grammar_School,_Newcastle_upon_Tyne",
"/wiki/University_of_Burundi",
"/wiki/University_of_Angers",
"/wiki/Phillips_Exeter_Academy",
"/wiki/University_of_Manitoba",
"/wiki/New_College,_Oxford",
"/wiki/Binghamton_University",
"/wiki/Asahi_Kasei",
"/wiki/Nuffield_Department_of_Population_Health",
"/wiki/Addis_Ababa_University",
"/wiki/Jawaharlal_Nehru_University",
"/wiki/Ecole_normale_superieure",
"/wiki/Diplome_d'etudes_approfondies",
"/wiki/Bedford_College,_London",
"/wiki/Wadham_College,_Oxford",
"/wiki/Polish_Academy_of_Sciences",
"/wiki/Max-Planck-Institut_fur_extraterrestrische_Physik",
"/wiki/Umea_University",
"/wiki/Pomona_College",
"/wiki/Gladstone_Institutes",
"/wiki/Chiron_Corporation",
"/wiki/Diplom",
"/wiki/Max_Planck_Institute_for_Meteorology",
"/wiki/German_Climate_Computing_Centre",
"/wiki/Max_Planck_Institute_for_Coal_Research",
"/wiki/Post-doctoral_training",
"/wiki/American_University_of_Beirut",
"/wiki/Scripps_Research",
"/wiki/Canterbury_Christ_Church_University",
"/wiki/University_of_the_Philippines_Diliman",
"/wiki/Samara_State_University",
"/wiki/University_of_Hull",
"/wiki/Ecole_Normale_Superieure_de_Cachan",
"/wiki/Universite_d'Orsay",
"/wiki/Ecole_superieure_d'optique",
"/wiki/Polytechnic_Institute_of_Paris",
"/wiki/Centre_national_de_la_recherche_scientifique",
"/wiki/City_University_of_Hong_Kong",
"/wiki/CO2_Coalition",
"/wiki/TU_Wien",
"/wiki/Carlsberg_Laboratory",
"/wiki/Max_Planck_Institute_for_Evolutionary_Anthropology",
"/wiki/University_of_Rouen",
"/wiki/Francisk_Skorina_Gomel_State_University",
"/wiki/Indiana_University,_Bloomington",
"/wiki/CEA_Saclay",
"/wiki/Max_Planck_Institute_for_Quantum_Optics",
"/wiki/Ecole_normale_superieure_de_lettres_et_sciences_humaines",
"/wiki/US_Naval_Research_Laboratory",
"/wiki/Vavilov_State_Optical_Institute",
"/wiki/Temple_University",
"/wiki/BioNTech",
"/wiki/University_of_Bergen",
"/wiki/Imam_Khomeini_International_University",
"/wiki/Bullfrog_Productions",
"/wiki/Lionhead_Studios",
"/wiki/Elixir_Studios",
"/wiki/DeepMind",
"/wiki/Isomorphic_Labs",
"/wiki/Google",
"/wiki/Dartmouth_Medical_School",
"/wiki/Yonsei_University",
"/wiki/University_of_York",
]