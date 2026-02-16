/* ============================================
   GROWTECH COLLECTIVE - COMPLETE CROPS DATABASE
   All 30+ crops with full growing information
   ============================================ */

const CROPS_DATABASE = {
    // HIGH-VALUE CROPS
    macadamia: {
        id: "macadamia",
        name: "Macadamia Nuts",
        category: "High-Value Crops",
        image: "macadamia.jpg",
        emoji: "🌰",
        
        growthDuration: "Macadamia trees take 6-7 years to reach maturity and begin producing nuts. Once established, they can continue producing for 40-50 years. In South Africa, particularly in Limpopo and Mpumalanga, macadamias thrive in the subtropical climate. Patience during the establishment phase is rewarded with decades of high-value nut production.",
        
        plantingSeasons: "Best planted in spring (September-November) when soil temperatures are warming. Avoid planting during winter frost periods. In frost-free subtropical regions, planting can extend into early summer. Young trees need protection from cold snaps in their first 2 years.",
        
        yieldPerArea: "Commercial orchards yield 3-5 tons of nut-in-shell per hectare at maturity. Top-performing farms can reach 6-7 tons/ha. Home gardens with 2-3 mature trees can expect 60-150kg per tree annually. Yields increase progressively from year 7 to year 12.",
        
        soilRequirements: "Prefers deep, well-drained soils with pH 5.0-6.5. Sandy loam or volcanic soils are ideal. Does not tolerate waterlogging or heavy clay. Add compost and mulch heavily. Plant on mounds in areas with poor drainage. Regular soil testing helps maintain optimal pH.",
        
        waterNeeds: "Requires 800-1200mm annually. Critical during flowering (August-September) and nut development (October-February). Drip irrigation is essential in drier regions. Young trees need 40-60L per week, mature trees 100-150L per week in summer. Reduce watering in winter.",
        
        sunlightNeeds: "Full sun required - minimum 6-8 hours daily. Trees tolerate partial afternoon shade in very hot regions. Good sunlight exposure ensures healthy growth and maximum nut production. Avoid planting in heavily shaded areas.",
        
        temperatureTolerance: "Optimal range 16-28°C. Sensitive to frost, especially young trees. Mature trees can tolerate brief cold snaps to -2°C but prolonged frost damages flowers and developing nuts. High temperatures above 35°C during flowering can reduce nut set.",
        
        bestProvinces: ["Limpopo (Tzaneen, Levubu)", "Mpumalanga (Nelspruit, Hazyview)", "KwaZulu-Natal (coastal regions)"],
        
        varieties: [
            { name: "Beaumont", description: "High-quality kernel, good yields, popular in SA" },
            { name: "A4", description: "Excellent cracking quality, reliable producer" },
            { name: "Nelmak 2", description: "Large nuts, high kernel recovery" }
        ],
        
        fertilizers: [
            {
                name: "Organic Compost",
                cost: "R100-150/tree/year",
                application: "20-30kg per tree twice yearly (spring and autumn)",
                npk: "Variable, typically 2:1:2",
                benefits: "Improves soil structure, slow-release nutrients, encourages beneficial microbes"
            },
            {
                name: "NPK 3:1:5 (43) + Zn",
                cost: "R250-350/tree/year",
                application: "1-2kg per tree quarterly during growing season",
                npk: "3:1:5 with added zinc",
                benefits: "Balanced nutrition, zinc prevents deficiency, proven for nut crops"
            },
            {
                name: "Slow-Release Nut Fertilizer",
                cost: "R400-500/tree/year",
                application: "Single application in spring, 2-3kg per mature tree",
                npk: "6:1:4 + micronutrients",
                benefits: "Convenient once-per-season feeding, includes boron for nut development"
            }
        ],
        
        diseases: [
            {
                name: "Phytophthora Root Rot",
                symptoms: "Yellowing leaves, wilting despite adequate water, branch dieback, poor growth. Roots show brown rot.",
                treatment: "Improve drainage immediately - plant on raised mounds. Apply phosphorous acid trunk injections. Remove mulch from trunk base. Severely infected trees may need removal.",
                cost: "R200-350/tree for phosphorous acid treatment"
            },
            {
                name: "Husk Spot",
                symptoms: "Dark brown to black spots on nut husks. Reduces kernel quality and recovery. Can affect up to 40% of crop.",
                treatment: "Apply copper-based fungicides during nut development. Ensure adequate calcium nutrition. Harvest promptly when mature. Improve air circulation through pruning.",
                cost: "R150-250/tree/season for copper sprays"
            },
            {
                name: "Anthracnose",
                symptoms: "Dark lesions on leaves, shoots, and developing nuts. Can cause premature nut drop.",
                treatment: "Spray copper fungicide at budbreak and flowering. Remove infected plant material. Maintain tree vigor through proper nutrition.",
                cost: "R120-200/tree/season"
            }
        ],
        
        pests: [
            {
                name: "Nut Borer (Macadamia Felted Coccid)",
                symptoms: "Small entry holes in nuts. White waxy secretions on branches. Reduced nut quality and kernel recovery.",
                control: "Apply systemic insecticides during flowering. Encourage natural predators (ladybugs, lacewings). Use white oil sprays during dormancy. Monitor with pheromone traps.",
                cost: "R180-280/tree/season"
            },
            {
                name: "Stink Bugs",
                symptoms: "Puncture marks on developing nuts. Kernel discoloration and abortion. Nuts may drop prematurely.",
                control: "Scout regularly during nut development. Apply approved insecticides when threshold exceeded. Plant trap crops away from orchard. Maintain ground cover to encourage predators.",
                cost: "R150-250/tree/season"
            },
            {
                name: "Thrips",
                symptoms: "Silvering or bronzing of leaves. Distorted new growth. Can transmit viruses.",
                control: "Spray spinosad or neem oil. Use blue sticky traps for monitoring. Avoid excessive nitrogen which attracts thrips. Release predatory mites in severe cases.",
                cost: "R120-200/tree/season"
            }
        ],
        
        gardenPlanner: {
            treeTypes: [
                {
                    name: "Standard Macadamia",
                    spacing: 7,
                    waterPerWeek: 120,
                    yieldPerTree: 60,
                    treeCost: 280,
                    maturityYears: 7
                },
                {
                    name: "Semi-Dwarf (Top-worked)",
                    spacing: 5,
                    waterPerWeek: 80,
                    yieldPerTree: 40,
                    treeCost: 350,
                    maturityYears: 6
                }
            ]
        }
    },

    avocado: {
        id: "avocado",
        name: "Avocados",
        category: "High-Value Crops",
        image: "avocado.jpg",
        emoji: "🥑",
        
        growthDuration: "Grafted avocado trees begin bearing in 2-4 years, with full production by year 6-8. Trees from seed take 4-15 years. In South Africa's subtropical regions, grafted trees are standard. Mature trees produce for 30-50 years with proper care.",
        
        plantingSeasons: "Best planted in late spring (October-November) after frost danger passes. Can plant into early summer in frost-free areas. Avoid winter planting as cold soil slows root establishment. Young trees need frost protection in first 2 years.",
        
        yieldPerArea: "Commercial orchards average 12-16 tons per hectare, with top farms reaching 20-25 tons/ha. Home garden trees produce 100-300 fruits annually once mature. Yield depends on variety, irrigation, and pollination.",
        
        soilRequirements: "Requires well-drained soil, pH 5.0-7.0. Cannot tolerate waterlogging - plant on mounds or raised beds in heavy soils. Add generous compost before planting. Sandy loams are ideal. Test and adjust pH annually.",
        
        waterNeeds: "Requires 1000-1300mm annually. Critical during flowering (spring) and fruit development (summer). Drip irrigation recommended. Young trees: 40L/week, mature trees: 70-100L/week in summer. Reduce by 50% in winter.",
        
        sunlightNeeds: "Needs 6-8 hours direct sunlight daily. Tolerates partial afternoon shade in hottest regions. Use shade cloth or windbreaks to protect young trees. Good light ensures healthy growth and fruiting.",
        
        temperatureTolerance: "Thrives 16-29°C. Frost-sensitive, especially young trees and during flowering. Mature trees tolerate brief cold to -1°C. High temperatures above 30°C during flowering can reduce fruit set. Protect from strong winds.",
        
        bestProvinces: ["Limpopo (Tzaneen, Levubu region)", "Mpumalanga (Nelspruit, Hazyview)", "KwaZulu-Natal (coastal and midlands)", "Western Cape (limited areas)"],
        
        varieties: [
            { name: "Hass", description: "Most popular. Dark pebbly skin when ripe. Excellent flavor, high oil content" },
            { name: "Fuerte", description: "Green smooth skin. More cold-tolerant. Pear-shaped fruit" },
            { name: "Pinkerton", description: "Long pear shape. Small seed, thick flesh. High oil content" },
            { name: "Ryan", description: "Large fruit. Good yields. Late season ripening" },
            { name: "Carmen", description: "Hass-type. Early production. Good disease resistance" }
        ],
        
        fertilizers: [
            {
                name: "Homemade Compost",
                cost: "R25-50/tree/year",
                application: "15-20kg per tree in spring and autumn",
                npk: "Variable, organic",
                benefits: "Low-cost, improves soil structure, slow-release nutrients, builds soil life"
            },
            {
                name: "Balanced NPK 6:6:6 + Zinc",
                cost: "R100-150/tree/year",
                application: "Quarterly: 0.5kg young trees, 1.5kg mature trees",
                npk: "6:6:6 + Zn + B",
                benefits: "Complete nutrition, zinc essential for avocados, prevents deficiency"
            },
            {
                name: "Organic Avocado Blend",
                cost: "R175-250/tree/year",
                application: "Every 8 weeks, 200-600g depending on tree size",
                npk: "5:2:4 + trace elements",
                benefits: "Gentle slow-release, soil-friendly, includes micronutrients"
            }
        ],
        
        diseases: [
            {
                name: "Phytophthora Root Rot",
                symptoms: "Wilting leaves despite adequate water. Yellow foliage, sparse canopy. Brown rotting roots. Tree decline over months.",
                treatment: "Plant on mounds/raised beds. Never waterlog soil. Apply phosphorous acid injections or trunk paint. Mulch properly keeping clear of trunk. Remove severely affected trees.",
                cost: "R120-250/tree for phosphorous acid"
            },
            {
                name: "Anthracnose",
                symptoms: "Dark brown-black spots on fruit. Lesions enlarge and merge. Post-harvest rot. Affects marketability.",
                treatment: "Spray copper fungicide before flowering. Apply prochloraz after harvest. Prune for air circulation. Remove infected fruit promptly. Handle fruit carefully.",
                cost: "R80-150/tree/season"
            },
            {
                name: "Cercospora Spot",
                symptoms: "Small brown spots with yellow halos on leaves. Premature leaf drop. Reduced photosynthesis and vigor.",
                treatment: "Apply copper-based fungicides. Improve air circulation through pruning. Remove fallen infected leaves. Ensure adequate nutrition. Avoid overhead watering.",
                cost: "R60-120/tree/season"
            }
        ],
        
        pests: [
            {
                name: "False Codling Moth",
                symptoms: "Small entry holes in fruit. Internal tunneling by larvae. Fruit drop and rot. Can affect 10-30% of crop.",
                control: "Hang pheromone traps for monitoring. Remove fallen fruit weekly. Spray Bt (Bacillus thuringiensis). Participate in area-wide sterile male release programs. Harvest promptly.",
                cost: "R100-200/tree/season"
            },
            {
                name: "Thrips",
                symptoms: "Silver-brown scarring on fruit skin (russeting). Distorted young leaves. Reduced fruit quality and market value.",
                control: "Spray spinosad during fruit set. Use blue sticky traps. Encourage predatory mites. Avoid excess nitrogen fertilizer. Remove weed hosts.",
                cost: "R90-180/tree/season"
            },
            {
                name: "Spider Mites",
                symptoms: "Fine webbing on leaves. Yellow stippling. Bronzed or scorched leaf appearance. Premature leaf drop.",
                control: "Spray horticultural oil or sulfur. Use strong water jets. Release predatory mites. Keep irrigation consistent. Apply neem oil for organic option.",
                cost: "R60-120/tree/season"
            },
            {
                name: "Scale Insects",
                symptoms: "Brown/white bumps on branches. Sticky honeydew. Sooty mold. Weakened tree growth.",
                control: "Apply white oil during winter dormancy. Release parasitic wasps. Prune heavily infested branches. Use systemic insecticides if severe. Maintain tree vigor.",
                cost: "R70-150/tree/season"
            }
        ],
        
        gardenPlanner: {
            treeTypes: [
                {
                    name: "Dwarf Avocado",
                    spacing: 4,
                    waterPerWeek: 40,
                    yieldPerTree: 30,
                    treeCost: 250,
                    maturityYears: 3
                },
                {
                    name: "Standard Avocado",
                    spacing: 7,
                    waterPerWeek: 70,
                    yieldPerTree: 100,
                    treeCost: 180,
                    maturityYears: 4
                },
                {
                    name: "Container Avocado",
                    spacing: 2.5,
                    waterPerWeek: 25,
                    yieldPerTree: 15,
                    treeCost: 300,
                    maturityYears: 3
                }
            ]
        }
    },

    // FIELD CROPS
    maize: {
        id: "maize",
        name: "Maize",
        category: "Field Crops",
        image: "maize.jpg",
        emoji: "🌽",
        
        growthDuration: "Maize completes its growth cycle in 4-5 months from planting to harvest. In South Africa, summer-planted maize (October-December) matures by March-May. Early varieties can be ready in 3.5 months, while late-season varieties take up to 6 months. This short cycle allows for efficient land use.",
        
        plantingSeasons: "Plant when soil temperature reaches 10-12°C, typically October-December in summer rainfall areas. Late planting reduces yield. In irrigation areas, can plant September-January. Avoid planting after mid-January in dry-land regions.",
        
        yieldPerArea: "Dry-land yields: 2.5-4.5 tons/ha. Irrigated: 8-12 tons/ha possible. South African commercial average is 5-6 tons/ha. Home gardens can expect 3-5kg per square meter under good management.",
        
        soilRequirements: "Prefers well-drained loam soils, pH 5.5-7.5. Tolerates various soil types but yields best in deep, fertile soils. Add compost for nutrients. Maize is a heavy feeder requiring good soil preparation.",
        
        waterNeeds: "Requires 450-650mm during growing season. Critical periods: tasseling and grain-filling. Drought stress during flowering severely reduces yield. Irrigate weekly during dry spells. Reduce watering as crop matures.",
        
        sunlightNeeds: "Full sun essential - minimum 8 hours daily. Maize is a C4 plant requiring high light intensity for maximum photosynthesis and yield. Avoid shaded areas completely.",
        
        temperatureTolerance: "Optimal 25-30°C during growth. Germinates at 10-12°C. Sensitive to frost - even light frost kills plants. High temperatures above 35°C during flowering reduce pollination and grain set.",
        
        bestProvinces: ["Free State (largest producer)", "North West", "Mpumalanga (maize triangle)", "KwaZulu-Natal"],
        
        varieties: [
            { name: "PAN 6777", description: "White maize. High yielding. Disease resistant. Popular commercial variety" },
            { name: "DKC 73-74", description: "Yellow maize. Drought tolerant. Good for livestock feed" },
            { name: "BG 3292", description: "White maize. Early maturing. Suitable for shorter seasons" }
        ],
        
        fertilizers: [
            {
                name: "Basal NPK + Top-dressing",
                cost: "R2500-3500/ha",
                application: "Basal 2:3:4 at planting: 200kg/ha. LAN top-dress at 30-40 days: 150kg/ha",
                npk: "2:3:4 then 28:0:0",
                benefits: "Standard practice. Basal provides startup nutrients. Nitrogen top-dressing during rapid growth"
            },
            {
                name: "Organic Compost + Kraal Manure",
                cost: "R800-1500/ha (if available)",
                application: "5-8 tons/ha incorporated before planting. Supplement with organic nitrogen mid-season",
                npk: "Variable organic",
                benefits: "Improves soil structure. Slow nutrient release. Cost-effective with local manure"
            },
            {
                name: "Complete NPK Blend",
                cost: "R3000-4000/ha",
                application: "Single application of 3:2:1 (25) + Zn at planting: 300kg/ha",
                npk: "3:2:1 with zinc",
                benefits: "Convenient single application. Includes micronutrients. Reduces labor"
            }
        ],
        
        diseases: [
            {
                name: "Grey Leaf Spot",
                symptoms: "Rectangular grey-brown lesions on leaves. Lesions between leaf veins. Severe infections cause premature leaf death.",
                treatment: "Plant resistant varieties. Rotate crops (don't plant maize after maize). Apply fungicides (triazole or strobilurin) if severe. Remove crop residues after harvest.",
                cost: "R250-400/ha for fungicide treatment"
            },
            {
                name: "Maize Streak Virus",
                symptoms: "Yellow streaks parallel to leaf veins. Stunted growth. Reduced yield. Transmitted by leafhoppers.",
                treatment: "No cure once infected. Plant resistant varieties (MSV-tolerant hybrids). Control leafhopper vectors with early planting. Remove infected plants to reduce spread.",
                cost: "Prevention through resistant varieties (no extra cost)"
            },
            {
                name: "Common Rust",
                symptoms: "Small circular to elongated reddish-brown pustules on leaves. Can coalesce and cover large leaf areas.",
                treatment: "Plant resistant varieties. Apply fungicides (mancozeb or propiconazole) if infection is severe and conditions favor disease. Ensure balanced nutrition.",
                cost: "R200-350/ha for fungicide"
            }
        ],
        
        pests: [
            {
                name: "Fall Armyworm (Spodoptera frugiperda)",
                symptoms: "Ragged holes in leaves ('windowpane' feeding). Larvae in whorls. Can devastate entire fields if not controlled.",
                control: "Scout fields regularly. Apply approved insecticides (emamectin benzoate, chlorantranilipiole) when threshold reached. Use pheromone traps. Practice early planting to avoid peak populations.",
                cost: "R350-600/ha for chemical control"
            },
            {
                name: "Stalk Borers",
                symptoms: "Wilting of central leaves ('deadheart'). Holes in stalks with frass. Larvae tunnel in stems. Reduced yield and lodging.",
                control: "Remove crop residues that harbor pupae. Early planting escapes peak borer populations. Apply granular insecticides in whorl if scouting shows high infestation.",
                cost: "R250-450/ha"
            },
            {
                name: "Aphids",
                symptoms: "Colonies on undersides of leaves and tassels. Honeydew and sooty mold. Can transmit viruses. Usually not economic pest.",
                control: "Encourage natural predators (ladybugs, lacewings). Apply insecticides only if infestation is severe and yield impact expected. Aphids usually controlled by beneficials.",
                cost: "R150-250/ha if treatment needed (rarely necessary)"
            }
        ],
        
        gardenPlanner: {
            treeTypes: [
                {
                    name: "Home Garden Maize",
                    spacing: 0.8,
                    waterPerWeek: "20-30mm",
                    yieldPerPlant: 1.5,
                    seedCost: 15,
                    maturityYears: 0.35
                }
            ]
        }
    },

    // SOYBEANS
    soybeans: {
        id: "soybeans",
        name: "Soybeans",
        category: "Field Crops",
        image: "soybeans.jpg",
        emoji: "🌱",
        growthDuration: "Soybeans complete their cycle in 3-4 months. Plant November-December in SA for harvest in March-April. Quick turnaround makes them excellent rotation crops.",
        plantingSeasons: "Plant when soil temp reaches 15°C, typically November-December. Late planting reduces yield. Avoid frost-prone periods.",
        yieldPerArea: "Average 2.0-3.4 tons/ha dry-land. Irrigated can reach 4-5 tons/ha. Good management and rainfall crucial.",
        soilRequirements: "Prefers well-drained loam, pH 6.0-7.0. Fix nitrogen so needs less fertilizer. Add inoculant at planting.",
        waterNeeds: "Requires 450-700mm during season. Critical during flowering and pod-filling. Drought stress reduces yield significantly.",
        sunlightNeeds: "Full sun required - 8+ hours daily. Beans develop best with high light intensity.",
        temperatureTolerance: "Optimal 25-30°C. Germinates at 15°C. Frost kills plants. High heat during flowering reduces pod set.",
        bestProvinces: ["Mpumalanga", "Free State", "KwaZulu-Natal"],
        varieties: [
            { name: "LS 6164R", description: "Roundup Ready. High yielding. Disease resistant" },
            { name: "PAN 1666R", description: "Drought tolerant. Good pod retention" }
        ],
        fertilizers: [
            { name: "Inoculant + Starter", cost: "R3500/ha", application: "Inoculant on seed + 2:3:4 starter 50kg/ha", npk: "2:3:4", benefits: "Bacteria fix nitrogen. Starter gives early boost" },
            { name: "Maintenance Fertilizer", cost: "R2500/ha", application: "2:3:2 (22) 150kg/ha broadcast", npk: "2:3:2", benefits: "Phosphorus for roots. Potassium for pods" }
        ],
        diseases: [
            { name: "Soybean Rust", symptoms: "Small tan pustules on leaves. Rapid defoliation.", treatment: "Apply triazole fungicides at first sign. Scout regularly during wet periods.", cost: "R400-600/ha" }
        ],
        pests: [
            { name: "Stink Bugs", symptoms: "Punctured pods. Shriveled beans. Reduced germination.", control: "Scout weekly during pod-fill. Spray when threshold exceeded (2-3 bugs per meter).", cost: "R250-400/ha" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Soybeans", spacing: 0.5, waterPerWeek: 25, yieldPerPlant: 0.15, seedCost: 10, maturityYears: 0.3 }]
        }
    },

    // SUNFLOWER
    sunflower: {
        id: "sunflower",
        name: "Sunflower",
        category: "Field Crops",
        image: "sunflower.jpg",
        emoji: "🌻",
        growthDuration: "Sunflowers mature in 3-4 months. Plant October-December for summer harvest. Drought-tolerant once established.",
        plantingSeasons: "Plant October-December when soil warms to 10°C. Can plant into January in some areas. Avoid late planting.",
        yieldPerArea: "Average 1.2-2.0 tons/ha. Top farms reach 2.5 tons/ha. Depends heavily on rainfall and seed quality.",
        soilRequirements: "Tolerates various soils, pH 6.0-7.5. Deep-rooted so prefers deep soil. Moderate fertility requirements.",
        waterNeeds: "Requires 400-600mm. Most critical during head formation. Drought-tolerant but yields suffer without water.",
        sunlightNeeds: "Full sun essential. Heads follow sun (heliotropism). Needs maximum light for seed filling.",
        temperatureTolerance: "Optimal 20-28°C. Tolerates heat well. Light frost damages seedlings. Mature plants more tolerant.",
        bestProvinces: ["Free State", "North West", "Northern Cape"],
        varieties: [
            { name: "PAN 7033", description: "High oil content. Disease resistant. Widely adapted" },
            { name: "Hyoleic varieties", description: "High oleic acid. Premium oil markets" }
        ],
        fertilizers: [
            { name: "Balanced NPK", cost: "R2800/ha", application: "2:3:2 (22) at planting 200kg/ha", npk: "2:3:2", benefits: "Moderate feeder. Balanced nutrition sufficient" },
            { name: "Organic Option", cost: "R1200/ha", application: "Compost 3 tons/ha + kraal manure", npk: "Variable", benefits: "Cost-effective with available manure" }
        ],
        diseases: [
            { name: "White Rot (Sclerotinia)", symptoms: "White fluffy fungus on stems and heads. Plant wilting.", treatment: "Plant resistant hybrids. Rotate crops. No effective chemical cure.", cost: "Prevention through rotation (no direct cost)" }
        ],
        pests: [
            { name: "Bollworm", symptoms: "Larvae feeding in heads. Damaged seeds. Reduced yield.", control: "Scout during flowering. Apply approved insecticides if threshold exceeded.", cost: "R300-500/ha" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Sunflower", spacing: 0.7, waterPerWeek: 20, yieldPerPlant: 0.12, seedCost: 8, maturityYears: 0.3 }]
        }
    },

    // WHEAT
    wheat: {
        id: "wheat",
        name: "Wheat",
        category: "Field Crops",
        image: "wheat.jpg",
        emoji: "🌾",
        growthDuration: "Winter wheat: Plant May-July, harvest October-November (4-5 months). Spring wheat in some areas.",
        plantingSeasons: "Plant May-July in winter rainfall areas. Irrigated areas can plant earlier. Avoid late planting which reduces yield.",
        yieldPerArea: "Dry-land: 2.5-4.0 tons/ha. Irrigated: 6-8 tons/ha possible. Western Cape and Free State are main producers.",
        soilRequirements: "Prefers clay-loam, pH 6.0-7.5. Good drainage important. Heavy feeder requiring good soil prep.",
        waterNeeds: "Requires 450-650mm during growing season. Critical during stem elongation and grain fill.",
        sunlightNeeds: "Full sun required. Winter wheat adapted to shorter days. Needs good light for grain fill.",
        temperatureTolerance: "Optimal 15-24°C during growth. Tolerates cold. Frost during flowering reduces yield.",
        bestProvinces: ["Western Cape", "Free State", "Northern Cape"],
        varieties: [
            { name: "SST 88", description: "Bread wheat. High protein. Disease resistant" },
            { name: "Krokodil", description: "Durum wheat. Pasta quality. Drought tolerant" }
        ],
        fertilizers: [
            { name: "Split Application", cost: "R3200/ha", application: "Basal 3:2:1 200kg/ha + LAN top-dress 150kg/ha", npk: "3:2:1", benefits: "Basal at planting. Nitrogen boost at tillering" },
            { name: "Single Application", cost: "R2800/ha", application: "2:3:2 (28) 300kg/ha at planting", npk: "2:3:2", benefits: "Convenient. Reduces labor" }
        ],
        diseases: [
            { name: "Stripe Rust", symptoms: "Yellow-orange pustules in stripes on leaves. Rapid spread.", treatment: "Plant resistant varieties. Apply fungicides if severe. Scout regularly.", cost: "R350-500/ha for fungicide" }
        ],
        pests: [
            { name: "Russian Wheat Aphid", symptoms: "White longitudinal streaks on leaves. Rolled leaves. Stunted growth.", control: "Plant resistant varieties. Early planting escapes populations. Spray only if necessary.", cost: "R200-350/ha if treatment needed" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Wheat", spacing: 0.15, waterPerWeek: 30, yieldPerPlant: 0.05, seedCost: 5, maturityYears: 0.4 }]
        }
    },

    // TOMATOES
    tomatoes: {
        id: "tomatoes",
        name: "Tomatoes",
        category: "Vegetables",
        image: "tomatoes.jpg",
        emoji: "🍅",
        growthDuration: "Tomatoes mature in 3-4 months from transplanting. Year-round planting possible in frost-free areas. Indeterminate varieties produce longer.",
        plantingSeasons: "Plant spring-summer (August-January) in most areas. Year-round in warm regions. Protect from frost.",
        yieldPerArea: "Field tomatoes: 40-70 tons/ha. Greenhouse: 150-250 tons/ha. Home gardens: 10-15kg per plant.",
        soilRequirements: "Well-drained loam, pH 6.0-6.8. Heavy feeder. Add generous compost. Avoid waterlogging.",
        waterNeeds: "Requires 600-800mm. Critical during fruit development. Drip irrigation recommended. Consistent moisture prevents cracking.",
        sunlightNeeds: "Full sun - 6-8 hours daily. More sun = sweeter fruit. Some afternoon shade tolerated in very hot areas.",
        temperatureTolerance: "Optimal 18-28°C. Frost kills plants. High temperatures above 35°C reduce fruit set.",
        bestProvinces: ["Limpopo", "Mpumalanga", "Western Cape"],
        varieties: [
            { name: "Star 9037", description: "Processing tomato. High yield. Disease resistant" },
            { name: "Roma VF", description: "Paste tomato. Determinate. Good for canning" }
        ],
        fertilizers: [
            { name: "Vegetable Blend", cost: "R4500/ha", application: "2:3:2 (28) weekly fertigation or broadcast", npk: "2:3:2", benefits: "Balanced for vegetables. Regular feeding important" },
            { name: "Compost + Supplements", cost: "R2500/ha", application: "Compost 10 tons/ha + liquid fish fertilizer", npk: "Variable", benefits: "Organic option. Improves soil health" }
        ],
        diseases: [
            { name: "Early Blight", symptoms: "Dark concentric rings on older leaves. Leaf yellowing. Defoliation.", treatment: "Apply copper or mancozeb fungicides. Rotate crops. Mulch to prevent soil splash.", cost: "R250-400/ha" },
            { name: "Bacterial Wilt", symptoms: "Sudden wilting despite adequate water. Brown stem interior.", treatment: "No cure. Remove infected plants. Plant resistant varieties. Rotate with non-solanaceous crops.", cost: "Prevention only" }
        ],
        pests: [
            { name: "Tomato Hornworm", symptoms: "Large green caterpillars. Rapid defoliation. Fruit damage.", control: "Hand-pick if few. Spray Bt or spinosad. Encourage natural predators.", cost: "R150-250/ha" },
            { name: "Whiteflies", symptoms: "White flying insects on undersides. Honeydew. Sooty mold. Transmit viruses.", control: "Use yellow sticky traps. Spray neem oil or soap. Release parasitic wasps.", cost: "R200-350/ha" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Tomatoes", spacing: 0.6, waterPerWeek: 15, yieldPerPlant: 12, seedCost: 5, maturityYears: 0.3 }]
        }
    },

    // POTATOES
    potatoes: {
        id: "potatoes",
        name: "Potatoes",
        category: "Vegetables",
        image: "potatoes.jpg",
        emoji: "🥔",
        growthDuration: "Potatoes mature in 3-4 months depending on variety. Early varieties: 90 days. Late: 120+ days. Multiple plantings per year possible.",
        plantingSeasons: "Main season: August-October. Can plant year-round in some areas with irrigation. Avoid extreme heat or frost.",
        yieldPerArea: "Average 30-50 tons/ha. Top farms: 60-80 tons/ha. Home gardens: 1-2kg per plant.",
        soilRequirements: "Well-drained sandy-loam, pH 5.5-6.5. Hilling important for tuber development. Add compost and potassium.",
        waterNeeds: "Requires 500-700mm. Critical during tuber bulking. Consistent moisture prevents hollow heart. Reduce before harvest.",
        sunlightNeeds: "Full sun preferred. Tolerates partial shade. Foliage needs good light for tuber production.",
        temperatureTolerance: "Optimal 15-20°C for tuber formation. Frost damages foliage. Heat above 30°C reduces yields.",
        bestProvinces: ["Free State", "Western Cape", "Limpopo", "KwaZulu-Natal"],
        varieties: [
            { name: "BP1", description: "Processing variety. High yield. Good for chips" },
            { name: "Mondial", description: "Table variety. Yellow flesh. Disease resistant" }
        ],
        fertilizers: [
            { name: "Potato Fertilizer", cost: "R5000/ha", application: "2:3:4 (28) 600kg/ha at planting", npk: "2:3:4", benefits: "High potassium for tubers. Complete nutrition" },
            { name: "Organic Potato Feed", cost: "R3000/ha", application: "Compost 15 tons/ha + bone meal", npk: "Variable", benefits: "Improves soil. Slow release" }
        ],
        diseases: [
            { name: "Late Blight", symptoms: "Water-soaked lesions on leaves. White fungal growth. Tuber rot.", treatment: "Apply preventive fungicides (mancozeb, metalaxyl). Remove infected plants. Avoid overhead irrigation.", cost: "R600-900/ha" }
        ],
        pests: [
            { name: "Potato Tuber Moth", symptoms: "Mines in leaves. Tunnels in tubers. Storage damage.", control: "Hill plants properly. Harvest promptly. Use pheromone traps. Store cool.", cost: "R250-400/ha" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Potatoes", spacing: 0.3, waterPerWeek: 20, yieldPerPlant: 1.5, seedCost: 8, maturityYears: 0.3 }]
        }
    },

    // ORANGES
    oranges: {
        id: "oranges",
        name: "Oranges",
        category: "Fruits",
        image: "oranges.jpg",
        emoji: "🍊",
        growthDuration: "Orange trees take 3-4 years to first fruit. Full production by year 7-10. Trees produce for 30-50 years.",
        plantingSeasons: "Plant spring (September-November) after frost. Young trees need frost protection first 2 years.",
        yieldPerArea: "Commercial orchards: 30-45 tons/ha. Top farms: 60+ tons/ha. Home trees: 100-300 fruits annually.",
        soilRequirements: "Well-drained soil, pH 6.0-7.0. Deep soils preferred. Add compost. Avoid waterlogging.",
        waterNeeds: "Requires 900-1200mm annually. Drip irrigation recommended. Critical during fruit development.",
        sunlightNeeds: "Full sun essential - 8+ hours daily. Good light ensures sweet fruit.",
        temperatureTolerance: "Optimal 25-30°C. Tolerates brief cold but frost damages fruit and flowers.",
        bestProvinces: ["Eastern Cape", "Western Cape", "Limpopo", "Mpumalanga"],
        varieties: [
            { name: "Valencia", description: "Late season. Juice orange. High yields" },
            { name: "Navel", description: "Seedless. Early season. Excellent eating" }
        ],
        fertilizers: [
            { name: "Citrus Fertilizer", cost: "R400/tree/year", application: "5:1:5 (31) 3-4kg per tree quarterly", npk: "5:1:5", benefits: "Balanced for citrus. Includes micronutrients" },
            { name: "Organic Citrus", cost: "R250/tree/year", application: "Compost 20kg + organic nitrogen supplement", npk: "Variable", benefits: "Soil-building. Slow release" }
        ],
        diseases: [
            { name: "Citrus Black Spot", symptoms: "Black spots on fruit. Affects marketability. Premature drop.", treatment: "Apply copper fungicides. Improve drainage. Prune for air circulation.", cost: "R200-350/tree/season" }
        ],
        pests: [
            { name: "Citrus Psylla", symptoms: "Distorted new growth. Honeydew. Transmits greening disease.", control: "Spray horticultural oil. Remove infected growth. Release parasitic wasps.", cost: "R150-280/tree/season" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Standard Orange", spacing: 5, waterPerWeek: 80, yieldPerTree: 150, treeCost: 200, maturityYears: 4 }]
        }
    },

    // BANANAS
    bananas: {
        id: "bananas",
        name: "Bananas",
        category: "Fruits",
        image: "bananas.jpg",
        emoji: "🍌",
        growthDuration: "Bananas fruit in 9-12 months from planting. Continuous production after first harvest. Each plant fruits once then dies, replaced by suckers.",
        plantingSeasons: "Plant spring-summer (September-February) in frost-free areas. Requires year-round warm temperatures.",
        yieldPerArea: "Commercial: 30-50 tons/ha/year. Intensive: 60+ tons/ha. Backyard: 30-50kg per mat annually.",
        soilRequirements: "Rich, well-drained soil, pH 5.5-7.0. Heavy feeder. Add generous compost and mulch.",
        waterNeeds: "Requires 1200-2000mm annually. Regular watering essential. Mulch heavily to conserve moisture.",
        sunlightNeeds: "Full sun to partial shade. Tolerates some shade. Wind protection important.",
        temperatureTolerance: "Optimal 25-35°C. Frost kills plants. Growth slows below 15°C.",
        bestProvinces: ["KwaZulu-Natal", "Mpumalanga (Lowveld)", "Limpopo (Lowveld)"],
        varieties: [
            { name: "Cavendish", description: "Commercial variety. High yield. Export quality" },
            { name: "Williams", description: "Local favorite. Good flavor. Disease resistant" }
        ],
        fertilizers: [
            { name: "High Nitrogen Blend", cost: "R600/mat/year", application: "3:1:5 (28) monthly 500g per mat", npk: "3:1:5", benefits: "High nitrogen for rapid growth. Potassium for fruit" },
            { name: "Organic Banana Feed", cost: "R350/mat/year", application: "Chicken manure 10kg + compost monthly", npk: "Variable", benefits: "Cost-effective. Builds soil" }
        ],
        diseases: [
            { name: "Panama Disease (Fusarium Wilt)", symptoms: "Yellowing leaves. Plant collapse. No cure.", treatment: "Plant resistant varieties. Remove infected plants immediately. Sanitize tools. Avoid spreading soil.", cost: "Prevention only - disease devastating" }
        ],
        pests: [
            { name: "Banana Weevil Borer", symptoms: "Tunneling in corm. Weakened plants. Toppling.", control: "Use clean planting material. Trap with pheromones. Destroy infested plants.", cost: "R200-400/mat/year" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Banana Mat", spacing: 3, waterPerWeek: 100, yieldPerTree: 40, treeCost: 150, maturityYears: 1 }]
        }
    },

    // BLUEBERRIES
    blueberries: {
        id: "blueberries",
        name: "Blueberries",
        category: "High-Value Crops",
        image: "blueberries.jpg",
        emoji: "🫐",
        growthDuration: "Blueberries take 2-3 years to reach full production. Plants produce for 20-30 years with proper care.",
        plantingSeasons: "Plant winter (June-August) while dormant. Best establishment before spring growth.",
        yieldPerArea: "Commercial: 8-12 tons/ha. Home gardens: 2-4kg per bush annually.",
        soilRequirements: "Requires acidic soil, pH 4.5-5.5. Add sulfur if pH too high. Mulch with pine bark.",
        waterNeeds: "Requires 600-800mm annually. Shallow roots need consistent moisture. Drip irrigation ideal.",
        sunlightNeeds: "Full sun preferred - 6-8 hours daily. Tolerates partial shade in hot areas.",
        temperatureTolerance: "Requires 600-900 chill hours. Optimal 15-25°C during growth.",
        bestProvinces: ["Western Cape", "Eastern Cape", "Limpopo (high altitude)"],
        varieties: [
            { name: "Star", description: "Southern Highbush. Low chill. Early season" },
            { name: "Emerald", description: "Low chill. Large berries. High yield" }
        ],
        fertilizers: [
            { name: "Acid-Loving Plant Food", cost: "R350/plant/year", application: "Ammonium sulfate 50g per plant monthly", npk: "21:0:0", benefits: "Acidifies soil. Provides nitrogen" },
            { name: "Organic Blueberry Feed", cost: "R200/plant/year", application: "Pine bark mulch + coffee grounds + fish emulsion", npk: "Variable", benefits: "Maintains acidity. Natural" }
        ],
        diseases: [
            { name: "Stem Canker", symptoms: "Brown lesions on stems. Wilting branches. Dieback.", treatment: "Prune infected canes. Apply copper spray. Improve air circulation.", cost: "R150-250/season" }
        ],
        pests: [
            { name: "Birds", symptoms: "Berries eaten or damaged. Significant losses at harvest.", control: "Net plants before ripening. Use bird scarers. Harvest promptly.", cost: "R300 for netting" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Blueberry Bush", spacing: 1.5, waterPerWeek: 30, yieldPerTree: 3, treeCost: 120, maturityYears: 2 }]
        }
    },

    // LEMONS
    lemons: {
        id: "lemons",
        name: "Lemons",
        category: "Fruits",
        image: "lemons.jpg",
        emoji: "🍋",
        growthDuration: "Lemon trees fruit in 3 years. Year-round production once established. Trees live 30-50 years.",
        plantingSeasons: "Plant spring (September-November). Protect from frost first 2 years.",
        yieldPerArea: "Commercial: 25-40 tons/ha. Home trees: 200-600 lemons annually.",
        soilRequirements: "Well-drained soil, pH 6.0-7.0. Avoid waterlogging. Add compost annually.",
        waterNeeds: "Requires 800-1100mm annually. Year-round production needs consistent watering.",
        sunlightNeeds: "Full sun essential - 8+ hours daily. More sun = more fruit.",
        temperatureTolerance: "Optimal 25-30°C. Frost-sensitive. High heat tolerated but flowers may drop.",
        bestProvinces: ["Western Cape", "Eastern Cape", "Limpopo"],
        varieties: [
            { name: "Eureka", description: "Year-round production. Few thorns. Excellent quality" },
            { name: "Lisbon", description: "Very productive. Thorny. Heat tolerant" }
        ],
        fertilizers: [
            { name: "Citrus Fertilizer", cost: "R350/tree/year", application: "5:1:5 quarterly 2-3kg per tree", npk: "5:1:5", benefits: "High nitrogen for foliage. Potassium for fruit" }
        ],
        diseases: [
            { name: "Gummosis", symptoms: "Gum oozing from trunk. Bark damage. Tree decline.", treatment: "Improve drainage. Paint trunk with copper. Avoid trunk damage.", cost: "R100-200/tree" }
        ],
        pests: [
            { name: "Citrus Leaf Miner", symptoms: "Silvery trails on young leaves. Leaf curling.", control: "Spray neem oil on new growth. Remove heavily infested leaves.", cost: "R80-150/tree/season" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Lemon Tree", spacing: 4, waterPerWeek: 70, yieldPerTree: 400, treeCost: 180, maturityYears: 3 }]
        }
    },

    // GRAPEFRUIT
    grapefruit: {
        id: "grapefruit",
        name: "Grapefruit",
        category: "Fruits",
        image: "grapefruit.jpg",
        emoji: "🍊",
        growthDuration: "Grapefruit trees fruit in 3-4 years. Peak production by year 8. Trees produce 40-60 years.",
        plantingSeasons: "Plant spring after frost. Young trees need protection from cold.",
        yieldPerArea: "Commercial: 28-42 tons/ha. Home trees: 150-300 fruits annually.",
        soilRequirements: "Well-drained soil, pH 6.0-7.0. Deep roots need deep soil. Avoid heavy clay.",
        waterNeeds: "Requires 900-1200mm annually. Critical during fruit sizing (summer).",
        sunlightNeeds: "Full sun required - 8+ hours. Good sun sweetens fruit.",
        temperatureTolerance: "Optimal 25-32°C. Light frost tolerated but damages fruit.",
        bestProvinces: ["Limpopo", "Mpumalanga", "Western Cape"],
        varieties: [
            { name: "Star Ruby", description: "Red flesh. Seedless. Sweet" },
            { name: "Marsh", description: "White flesh. Seedy. Very productive" }
        ],
        fertilizers: [
            { name: "Citrus NPK", cost: "R380/tree/year", application: "5:1:5 (31) quarterly 3kg per tree", npk: "5:1:5", benefits: "Balanced for citrus growth and fruiting" }
        ],
        diseases: [
            { name: "Citrus Canker", symptoms: "Raised corky lesions on fruit and leaves.", treatment: "Remove infected fruit. Apply copper sprays. Quarantine affected areas.", cost: "R200-350/tree" }
        ],
        pests: [
            { name: "False Codling Moth", symptoms: "Entry holes in fruit. Larvae inside. Fruit drop.", control: "Pheromone traps. Remove dropped fruit. Spray Bt if needed.", cost: "R180-300/tree/season" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Grapefruit Tree", spacing: 5, waterPerWeek: 85, yieldPerTree: 220, treeCost: 200, maturityYears: 4 }]
        }
    },

    // TABLE GRAPES
    table_grapes: {
        id: "table_grapes",
        name: "Table Grapes",
        category: "Fruits",
        image: "grapes.jpg",
        emoji: "🍇",
        growthDuration: "Grapes fruit in 2-3 years. Full production by year 4. Vines produce 20-40 years.",
        plantingSeasons: "Plant winter (June-August) while dormant. Establish before spring growth.",
        yieldPerArea: "Commercial: 20-30 tons/ha. Home vines: 5-15kg per vine.",
        soilRequirements: "Well-drained soil, pH 6.0-7.0. Deep roots prefer loose soil. Avoid waterlogging.",
        waterNeeds: "Requires 500-700mm during growing season. Drip irrigation ideal.",
        sunlightNeeds: "Full sun essential - 8+ hours. Ripening needs maximum light.",
        temperatureTolerance: "Optimal 25-35°C during ripening. Requires winter chill 100-400 hours depending on variety.",
        bestProvinces: ["Western Cape", "Northern Cape", "Limpopo"],
        varieties: [
            { name: "Thompson Seedless", description: "Green. Seedless. Versatile" },
            { name: "Red Globe", description: "Large red berries. Seeded. Good storage" }
        ],
        fertilizers: [
            { name: "Vine Fertilizer", cost: "R2500/ha", application: "3:1:5 (28) 300kg/ha split applications", npk: "3:1:5", benefits: "High potassium for fruit quality" }
        ],
        diseases: [
            { name: "Downy Mildew", symptoms: "Yellow oil spots on leaves. White fungus underneath. Crop loss.", treatment: "Apply copper or mancozeb preventively. Improve air flow. Remove infected leaves.", cost: "R350-600/ha" }
        ],
        pests: [
            { name: "Mealybugs", symptoms: "White waxy insects on bunches. Honeydew. Sooty mold.", control: "Apply white oil. Release parasitic wasps. Remove infested bunches.", cost: "R250-450/ha" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Grape Vine", spacing: 2, waterPerWeek: 25, yieldPerTree: 10, treeCost: 80, maturityYears: 2 }]
        }
    },

    // WINE GRAPES
    wine_grapes: {
        id: "wine_grapes",
        name: "Wine Grapes",
        category: "Fruits",
        image: "wine_grapes.jpg",
        emoji: "🍷",
        growthDuration: "Wine grapes fruit in 2-3 years. Quality improves with vine age. Vines produce 30+ years.",
        plantingSeasons: "Plant winter (June-August) dormant. Establish rootstock before grafting.",
        yieldPerArea: "Commercial: 8-15 tons/ha (quality limited). Home: 3-8kg per vine.",
        soilRequirements: "Well-drained soil, pH 6.0-7.0. Limestone soils beneficial. Avoid waterlogging.",
        waterNeeds: "Requires 500-700mm. Stress pre-harvest concentrates flavors.",
        sunlightNeeds: "Full sun required - 8+ hours. Flavor development needs sun.",
        temperatureTolerance: "Optimal 20-30°C ripening. Cold winters beneficial. Mediterranean climate ideal.",
        bestProvinces: ["Western Cape", "Northern Cape"],
        varieties: [
            { name: "Cabernet Sauvignon", description: "Red wine. Full-bodied. Ages well" },
            { name: "Chardonnay", description: "White wine. Versatile. Popular" }
        ],
        fertilizers: [
            { name: "Low Nitrogen Blend", cost: "R2000/ha", application: "2:3:4 (22) limited nitrogen for quality", npk: "2:3:4", benefits: "Limits vigor. Improves wine quality" }
        ],
        diseases: [
            { name: "Powdery Mildew", symptoms: "White powder on leaves and fruit. Reduced quality.", treatment: "Sulfur sprays. Improve air circulation. Remove infected clusters.", cost: "R300-500/ha" }
        ],
        pests: [
            { name: "Birds", symptoms: "Berries eaten. Crop losses especially at harvest.", control: "Net vineyards. Bird scarers. Harvest promptly.", cost: "R500-1000/ha for netting" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Wine Grape Vine", spacing: 2, waterPerWeek: 20, yieldPerTree: 5, treeCost: 90, maturityYears: 3 }]
        }
    },

    // ONIONS
    onions: {
        id: "onions",
        name: "Onions",
        category: "Vegetables",
        image: "onions.jpg",
        emoji: "🧅",
        growthDuration: "Onions mature in 4-5 months from transplanting. Day-length sensitive - use appropriate varieties for region.",
        plantingSeasons: "Transplant March-May for winter harvest. February-April for summer varieties.",
        yieldPerArea: "Commercial: 35-60 tons/ha. Home gardens: 5-8kg per square meter.",
        soilRequirements: "Well-drained loam, pH 6.0-7.0. Shallow roots need fine tilth. Add compost.",
        waterNeeds: "Requires 400-600mm. Consistent moisture for bulb swelling. Reduce before harvest.",
        sunlightNeeds: "Full sun required - 6-8 hours. Bulbing triggered by day length.",
        temperatureTolerance: "Optimal 15-25°C. Tolerates light frost. Heat above 30°C slows growth.",
        bestProvinces: ["Western Cape", "Free State", "Limpopo"],
        varieties: [
            { name: "Texas Grano", description: "Sweet. Short-day. Brown skin" },
            { name: "Red Carpet", description: "Red onion. Long-day. Stores well" }
        ],
        fertilizers: [
            { name: "Vegetable NPK", cost: "R3500/ha", application: "2:3:4 (28) 400kg/ha + side-dress nitrogen", npk: "2:3:4", benefits: "Balanced for bulb formation" }
        ],
        diseases: [
            { name: "Downy Mildew", symptoms: "Grey-purple fuzz on leaves. Leaf collapse. Bulb rot.", treatment: "Apply metalaxyl or mancozeb. Space plants well. Avoid overhead watering.", cost: "R400-600/ha" }
        ],
        pests: [
            { name: "Onion Thrips", symptoms: "Silver streaks on leaves. Stunted growth. Reduced yields.", control: "Spray spinosad or neem oil. Use reflective mulches. Monitor with sticky traps.", cost: "R250-400/ha" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Onions", spacing: 0.15, waterPerWeek: 15, yieldPerPlant: 0.25, seedCost: 3, maturityYears: 0.4 }]
        }
    },

    // CABBAGE
    cabbage: {
        id: "cabbage",
        name: "Cabbage",
        category: "Vegetables",
        image: "cabbage.jpg",
        emoji: "🥬",
        growthDuration: "Cabbage matures in 3-4 months from transplanting. Year-round production possible in mild areas.",
        plantingSeasons: "Plant year-round in cool areas. Avoid extreme heat. February-April and August-October best.",
        yieldPerArea: "Commercial: 30-55 tons/ha. Home gardens: 1-2kg per head.",
        soilRequirements: "Fertile loam, pH 6.0-7.0. Heavy feeder. Add generous compost and lime.",
        waterNeeds: "Requires 500-700mm. Consistent moisture for head formation. Mulch to retain moisture.",
        sunlightNeeds: "Full sun preferred. Tolerates partial shade in hot areas.",
        temperatureTolerance: "Optimal 15-25°C. Tolerates light frost. Heat causes bolting.",
        bestProvinces: ["Western Cape", "KwaZulu-Natal", "Gauteng"],
        varieties: [
            { name: "Drumhead", description: "Large heads. Good for storage. Heat tolerant" },
            { name: "Kilaherb", description: "Fast growing. Disease resistant" }
        ],
        fertilizers: [
            { name: "Vegetable Blend", cost: "R3000/ha", application: "2:3:2 (28) 350kg/ha + side-dress nitrogen", npk: "2:3:2", benefits: "Heavy feeder needs regular feeding" }
        ],
        diseases: [
            { name: "Black Rot", symptoms: "V-shaped yellow lesions on leaves. Black veins. Head rot.", treatment: "Rotate crops. Hot water treat seeds. Remove infected plants. Apply copper.", cost: "R200-350/ha" }
        ],
        pests: [
            { name: "Cabbage Worm", symptoms: "Green caterpillars. Holes in leaves. Frass on heads.", control: "Spray Bt. Hand-pick. Use row covers. Encourage parasitic wasps.", cost: "R180-300/ha" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Cabbage", spacing: 0.5, waterPerWeek: 12, yieldPerPlant: 1.5, seedCost: 2, maturityYears: 0.3 }]
        }
    },

    // CARROTS
    carrots: {
        id: "carrots",
        name: "Carrots",
        category: "Vegetables",
        image: "carrots.jpg",
        emoji: "🥕",
        growthDuration: "Carrots mature in 3-4 months. Quick crops in 60 days possible with baby varieties.",
        plantingSeasons: "Plant year-round in cool areas. Best February-May and August-November. Avoid extreme heat.",
        yieldPerArea: "Commercial: 35-60 tons/ha. Home gardens: 6-10kg per square meter.",
        soilRequirements: "Deep sandy-loam, pH 6.0-7.0. Stones cause forking. Remove debris before planting.",
        waterNeeds: "Requires 450-650mm. Consistent moisture prevents cracking. Mulch to conserve moisture.",
        sunlightNeeds: "Full sun to partial shade. 6+ hours sunlight ideal.",
        temperatureTolerance: "Optimal 15-25°C. Tolerates light frost. Heat makes roots bitter.",
        bestProvinces: ["Western Cape", "Limpopo", "Free State"],
        varieties: [
            { name: "Kuroda", description: "Orange. Cylindrical. Heat tolerant" },
            { name: "Nantes", description: "Sweet. Coreless. Uniform" }
        ],
        fertilizers: [
            { name: "Root Vegetable Mix", cost: "R2800/ha", application: "2:3:4 (22) 300kg/ha at planting", npk: "2:3:4", benefits: "Potassium for root development" }
        ],
        diseases: [
            { name: "Cavity Spot", symptoms: "Sunken lesions on roots. Internal browning. Reduces quality.", treatment: "Improve drainage. Rotate crops. Avoid excess nitrogen. No effective chemical control.", cost: "Prevention through rotation" }
        ],
        pests: [
            { name: "Carrot Fly", symptoms: "Tunnels in roots. Rust-colored larvae. Crop damage.", control: "Use fine mesh covers. Practice rotation. Harvest promptly.", cost: "R150-250/ha for covers" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Carrots", spacing: 0.08, waterPerWeek: 10, yieldPerPlant: 0.15, seedCost: 1, maturityYears: 0.3 }]
        }
    },

    // LETTUCE
    lettuce: {
        id: "lettuce",
        name: "Lettuce",
        category: "Vegetables",
        image: "lettuce.jpg",
        emoji: "🥬",
        growthDuration: "Lettuce matures in 2-3 months. Quick harvest possible in 6-8 weeks for loose-leaf types.",
        plantingSeasons: "Year-round in cool areas. Best February-May and August-November. Avoid extreme heat.",
        yieldPerArea: "Commercial: 20-35 tons/ha. Home gardens: 15-25 heads per square meter over season.",
        soilRequirements: "Fertile loam, pH 6.0-7.0. Shallow roots need fine soil. Add compost.",
        waterNeeds: "Requires 350-500mm. Consistent moisture essential. Mulch lightly.",
        sunlightNeeds: "Full sun to partial shade. Some shade beneficial in hot weather.",
        temperatureTolerance: "Optimal 15-20°C. Heat causes bolting. Tolerates light frost.",
        bestProvinces: ["Western Cape", "Gauteng", "KwaZulu-Natal"],
        varieties: [
            { name: "Buttercrunch", description: "Butterhead. Heat tolerant. Sweet" },
            { name: "Cos/Romaine", description: "Upright. Crisp. Slow to bolt" }
        ],
        fertilizers: [
            { name: "Liquid Fertilizer", cost: "R2500/ha", application: "Weekly fertigation 2:1:3 (10) diluted", npk: "2:1:3", benefits: "Fast-growing crop needs regular feeding" }
        ],
        diseases: [
            { name: "Bottom Rot", symptoms: "Lower leaves rot. Brown slimy lesions. Plant collapse.", treatment: "Improve air circulation. Avoid overhead watering. Mulch prevents soil splash.", cost: "R150-250/ha for mulch" }
        ],
        pests: [
            { name: "Aphids", symptoms: "Clusters on leaves. Distorted growth. Honeydew.", control: "Spray soapy water or neem oil. Encourage ladybugs. Use row covers.", cost: "R80-150/ha" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Lettuce", spacing: 0.25, waterPerWeek: 8, yieldPerPlant: 0.3, seedCost: 1, maturityYears: 0.2 }]
        }
    },

    // PEPPERS
    peppers: {
        id: "peppers",
        name: "Peppers (Bell & Hot)",
        category: "Vegetables",
        image: "peppers.jpg",
        emoji: "🌶️",
        growthDuration: "Peppers mature in 3-5 months from transplanting. Multiple harvests from same plants.",
        plantingSeasons: "Plant spring (August-November) after frost. Year-round in frost-free areas.",
        yieldPerArea: "Bell peppers: 25-45 tons/ha. Hot peppers: 15-25 tons/ha. Home: 10-20 fruits per plant.",
        soilRequirements: "Well-drained loam, pH 6.0-7.0. Add compost. Avoid waterlogging.",
        waterNeeds: "Requires 600-800mm. Drip irrigation recommended. Consistent moisture for fruit quality.",
        sunlightNeeds: "Full sun - 6-8 hours daily. More sun = better fruiting.",
        temperatureTolerance: "Optimal 21-28°C. Frost kills plants. Heat above 35°C reduces fruit set.",
        bestProvinces: ["Limpopo", "Mpumalanga", "Western Cape"],
        varieties: [
            { name: "California Wonder", description: "Bell pepper. Large. Thick-walled" },
            { name: "Jalapeno", description: "Hot pepper. Medium heat. Very productive" }
        ],
        fertilizers: [
            { name: "Vegetable NPK", cost: "R4000/ha", application: "2:3:4 (28) weekly fertigation or broadcast", npk: "2:3:4", benefits: "Balanced for continuous production" }
        ],
        diseases: [
            { name: "Bacterial Spot", symptoms: "Small brown spots on leaves and fruit. Reduces quality.", treatment: "Apply copper sprays. Remove infected plants. Rotate crops.", cost: "R250-400/ha" }
        ],
        pests: [
            { name: "Aphids", symptoms: "Clusters on new growth. Distorted leaves. Transmit viruses.", control: "Spray neem oil. Encourage beneficial insects. Use reflective mulch.", cost: "R150-250/ha" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Pepper Plant", spacing: 0.5, waterPerWeek: 15, yieldPerPlant: 15, seedCost: 4, maturityYears: 0.35 }]
        }
    },

    // APPLES
    apples: {
        id: "apples",
        name: "Apples",
        category: "Fruits",
        image: "apples.jpg",
        emoji: "🍎",
        growthDuration: "Grafted apples begin bearing in 3-4 years. Full production by year 8-10. Trees produce for 30-40 years with proper care.",
        plantingSeasons: "Plant winter (May-July) while dormant. Best establishment before spring growth.",
        yieldPerArea: "Commercial: 30-50 tons/ha. Top orchards: 60-80 tons/ha. Home trees: 50-150kg per tree.",
        soilRequirements: "Well-drained loam, pH 6.0-7.0. Deep soil preferred. Add compost. Avoid waterlogging.",
        waterNeeds: "Requires 700-1000mm annually. Critical during fruit development. Drip irrigation recommended.",
        sunlightNeeds: "Full sun essential - 6-8 hours daily. Good coloring needs sunlight.",
        temperatureTolerance: "Requires 800-1500 chill hours below 7°C. Optimal 18-24°C during growth.",
        bestProvinces: ["Western Cape", "Eastern Cape"],
        varieties: [
            { name: "Golden Delicious", description: "Traditional favorite. Reliable cropper. Sweet" },
            { name: "Granny Smith", description: "Tart green apples. Excellent for cooking" },
            { name: "Pink Lady", description: "Sweet-tart. Stores well. Premium quality" }
        ],
        fertilizers: [
            { name: "Fruit Tree Blend", cost: "R450/tree/year", application: "3:1:5 (43) quarterly 1-2kg per tree", npk: "3:1:5", benefits: "Balanced for deciduous fruit. Includes zinc" },
            { name: "Organic Apple Feed", cost: "R250/tree/year", application: "Compost 20kg + bone meal spring", npk: "Variable", benefits: "Slow release. Builds soil health" }
        ],
        diseases: [
            { name: "Apple Scab", symptoms: "Dark olive spots on leaves and fruit. Scabby lesions.", treatment: "Spray lime sulfur during dormancy. Apply copper before flowering. Rake fallen leaves.", cost: "R300-450/tree/season" }
        ],
        pests: [
            { name: "Codling Moth", symptoms: "Worm holes in fruit. Brown frass. Larvae tunnel through core.", control: "Hang pheromone traps. Remove fallen fruit. Bag fruits. Spray spinosad.", cost: "R250-400/tree/season" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Dwarf Apple", spacing: 3, waterPerWeek: 20, yieldPerTree: 15, treeCost: 180, maturityYears: 2 }]
        }
    },

    // PEARS
    pears: {
        id: "pears",
        name: "Pears",
        category: "Fruits",
        image: "pears.jpg",
        emoji: "🍐",
        growthDuration: "Pears fruit in 3-4 years. Full production by year 8. Trees produce 30-50 years.",
        plantingSeasons: "Plant winter (May-July) dormant. Cold required for proper establishment.",
        yieldPerArea: "Commercial: 28-45 tons/ha. Home trees: 50-150kg per tree.",
        soilRequirements: "Well-drained loam, pH 6.0-7.0. Deep soil. Add compost annually.",
        waterNeeds: "Requires 700-1000mm annually. Critical during fruit development.",
        sunlightNeeds: "Full sun - 6-8 hours daily. Good light for sweet fruit.",
        temperatureTolerance: "Requires cold winters 800-1200 chill hours. Optimal growth 18-25°C.",
        bestProvinces: ["Western Cape", "Eastern Cape"],
        varieties: [
            { name: "Packham's Triumph", description: "Green. Large. Excellent flavor" },
            { name: "Williams Bon Chretien", description: "Yellow. Very productive. Processing" }
        ],
        fertilizers: [
            { name: "Fruit Tree NPK", cost: "R400/tree/year", application: "3:1:5 (43) quarterly 1-2kg per tree", npk: "3:1:5", benefits: "Balanced for pome fruit" }
        ],
        diseases: [
            { name: "Fire Blight", symptoms: "Blackened shoots. Shepherd's crook appearance. Can kill trees.", treatment: "Prune 30cm below infection. Sterilize tools. Apply copper dormant spray.", cost: "R150-300/tree" }
        ],
        pests: [
            { name: "Codling Moth", symptoms: "Worm holes in fruit. Frass at entry. Tunneling damage.", control: "Pheromone traps. Remove fallen fruit. Spray spinosad. Bag fruit.", cost: "R250-400/tree/season" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Pear Tree", spacing: 4, waterPerWeek: 60, yieldPerTree: 100, treeCost: 200, maturityYears: 4 }]
        }
    },

    // PEACHES
    peaches: {
        id: "peaches",
        name: "Peaches",
        category: "Fruits",
        image: "peaches.jpg",
        emoji: "🍑",
        growthDuration: "Peaches fruit in 2-3 years. Peak production year 5-10. Trees produce 15-20 years.",
        plantingSeasons: "Plant winter (June-August) dormant. Establish before spring growth.",
        yieldPerArea: "Commercial: 20-35 tons/ha. Home trees: 30-80kg per tree.",
        soilRequirements: "Well-drained sandy-loam, pH 6.0-7.0. Avoid heavy clay. Add compost.",
        waterNeeds: "Requires 700-900mm annually. Critical during fruit swell.",
        sunlightNeeds: "Full sun essential - 8+ hours. Maximum light for sweetness.",
        temperatureTolerance: "Requires 600-900 chill hours. Optimal 25-30°C during fruit development.",
        bestProvinces: ["Western Cape", "Eastern Cape", "Free State"],
        varieties: [
            { name: "Kakamas", description: "Yellow flesh. Clingstone. High yield" },
            { name: "Alpine", description: "White flesh. Freestone. Excellent eating" }
        ],
        fertilizers: [
            { name: "Stone Fruit Blend", cost: "R380/tree/year", application: "3:1:5 (43) + calcium quarterly", npk: "3:1:5", benefits: "Calcium prevents split pit" }
        ],
        diseases: [
            { name: "Leaf Curl", symptoms: "Reddish blisters on leaves. Leaf distortion. Defoliation.", treatment: "Spray copper or lime sulfur during dormancy. Critical for prevention.", cost: "R200-350/tree/season" }
        ],
        pests: [
            { name: "Oriental Fruit Moth", symptoms: "Shoot wilting. Larvae in shoots and fruit.", control: "Pheromone mating disruption. Remove infested shoots. Spray if needed.", cost: "R250-450/tree/season" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Peach Tree", spacing: 4, waterPerWeek: 55, yieldPerTree: 55, treeCost: 180, maturityYears: 3 }]
        }
    },

    // PLUMS
    plums: {
        id: "plums",
        name: "Plums",
        category: "Fruits",
        image: "plums.jpg",
        emoji: "🍑",
        growthDuration: "Plums fruit in 2-3 years. Full production by year 6. Trees produce 20-30 years.",
        plantingSeasons: "Plant winter (June-August) dormant. Cold period essential.",
        yieldPerArea: "Commercial: 18-32 tons/ha. Home trees: 30-60kg per tree.",
        soilRequirements: "Well-drained loam, pH 6.0-7.0. Add compost. Avoid waterlogging.",
        waterNeeds: "Requires 650-900mm annually. Regular watering during fruit development.",
        sunlightNeeds: "Full sun - 6-8 hours daily. Good light for fruit color.",
        temperatureTolerance: "Requires 700-1000 chill hours. Optimal 20-28°C during ripening.",
        bestProvinces: ["Western Cape", "Eastern Cape"],
        varieties: [
            { name: "Laetitia", description: "Japanese plum. Red. High yield" },
            { name: "Songold", description: "Yellow flesh. Early. Sweet" }
        ],
        fertilizers: [
            { name: "Stone Fruit NPK", cost: "R350/tree/year", application: "3:1:5 quarterly 1-1.5kg per tree", npk: "3:1:5", benefits: "Balanced for stone fruit" }
        ],
        diseases: [
            { name: "Brown Rot", symptoms: "Brown rot on fruit. Mummified fruit on tree. Blossom blight.", treatment: "Remove mummies. Apply fungicide at bloom. Harvest promptly.", cost: "R200-350/tree/season" }
        ],
        pests: [
            { name: "Mediterranean Fruit Fly", symptoms: "Puncture marks on fruit. Maggots inside. Premature drop.", control: "Protein bait traps. Remove fallen fruit. Orchard sanitation critical.", cost: "R150-300/tree/season" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Plum Tree", spacing: 4, waterPerWeek: 50, yieldPerTree: 45, treeCost: 190, maturityYears: 3 }]
        }
    },

    // MANGOES
    mangoes: {
        id: "mangoes",
        name: "Mangoes",
        category: "Fruits",
        image: "mangoes.jpg",
        emoji: "🥭",
        growthDuration: "Mangoes fruit in 3-5 years. Full production by year 8-10. Trees produce 40+ years.",
        plantingSeasons: "Plant spring-summer (September-January) in frost-free areas.",
        yieldPerArea: "Commercial: 12-20 tons/ha. Home trees: 50-150kg per tree.",
        soilRequirements: "Well-drained soil, pH 5.5-7.5. Deep-rooted. Avoid waterlogging.",
        waterNeeds: "Requires 800-1200mm annually. Less water during flowering promotes fruiting.",
        sunlightNeeds: "Full sun essential - 8+ hours. Maximum light for sweetness.",
        temperatureTolerance: "Tropical to subtropical. Optimal 24-30°C. No frost tolerance.",
        bestProvinces: ["Limpopo", "Mpumalanga", "KwaZulu-Natal"],
        varieties: [
            { name: "Tommy Atkins", description: "Red blush. Good shipper. Fibrous" },
            { name: "Kent", description: "Sweet. Low fiber. Excellent quality" }
        ],
        fertilizers: [
            { name: "Mango Fertilizer", cost: "R450/tree/year", application: "3:1:5 (28) + micronutrients quarterly", npk: "3:1:5", benefits: "Includes zinc, boron for flowering" }
        ],
        diseases: [
            { name: "Anthracnose", symptoms: "Black spots on fruit. Post-harvest rot. Flower infection.", treatment: "Apply copper at flowering. Prochloraz post-harvest. Good orchard hygiene.", cost: "R250-400/tree/season" }
        ],
        pests: [
            { name: "Mango Seed Weevil", symptoms: "Small holes in fruit. Larvae in seed. Reduced quality.", control: "Orchard sanitation. Remove fallen fruit. Pheromone traps. Hot water treatment post-harvest.", cost: "R200-350/tree/season" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Mango Tree", spacing: 8, waterPerWeek: 90, yieldPerTree: 100, treeCost: 220, maturityYears: 4 }]
        }
    },

    // PINEAPPLES
    pineapples: {
        id: "pineapples",
        name: "Pineapples",
        category: "Fruits",
        image: "pineapples.jpg",
        emoji: "🍍",
        growthDuration: "Pineapples fruit in 18-24 months. Ratoon crops faster (12-15 months). 3-4 crops per planting.",
        plantingSeasons: "Plant year-round in warm coastal areas. Best spring-summer.",
        yieldPerArea: "Commercial: 40-65 tons/ha. Home gardens: 1 fruit per plant per cycle.",
        soilRequirements: "Well-drained acidic soil, pH 4.5-6.5. Sandy loam ideal. Add sulfur if needed.",
        waterNeeds: "Requires 1000-1500mm annually. Drought tolerant but irrigation improves yield.",
        sunlightNeeds: "Full sun essential - 8+ hours daily. Bright light for sweetness.",
        temperatureTolerance: "Optimal 25-32°C. No frost tolerance. Coastal subtropical climate ideal.",
        bestProvinces: ["Eastern Cape", "KwaZulu-Natal"],
        varieties: [
            { name: "Smooth Cayenne", description: "Most common. Large fruit. Good canning" },
            { name: "Queen Victoria", description: "Smaller. Very sweet. Fresh market" }
        ],
        fertilizers: [
            { name: "Pineapple NPK", cost: "R3500/ha", application: "Foliar sprays 20:20:20 monthly + soil application", npk: "20:20:20", benefits: "High nitrogen for vegetative growth" }
        ],
        diseases: [
            { name: "Heart Rot (Phytophthora)", symptoms: "Water-soaked heart leaves. Plant collapse. Foul odor.", treatment: "Improve drainage. Apply metalaxyl. Remove infected plants. Avoid overhead irrigation.", cost: "R400-600/ha" }
        ],
        pests: [
            { name: "Pineapple Mealybug", symptoms: "White waxy insects. Honeydew. Transmits wilt virus.", control: "Release parasitic wasps. Apply white oil. Practice field hygiene.", cost: "R250-450/ha" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Pineapple Plant", spacing: 0.4, waterPerWeek: 15, yieldPerTree: 2, treeCost: 15, maturityYears: 1.5 }]
        }
    },

    // SPINACH
    spinach: {
        id: "spinach",
        name: "Spinach",
        category: "Vegetables",
        image: "spinach.jpg",
        emoji: "🥬",
        growthDuration: "Spinach matures in 6-8 weeks. Quick harvest possible in 4 weeks for baby leaves.",
        plantingSeasons: "Year-round in cool areas. Best March-May and August-October. Bolts in heat.",
        yieldPerArea: "Commercial: 15-25 tons/ha. Home gardens: Cut-and-come-again harvests over 2-3 months.",
        soilRequirements: "Fertile loam, pH 6.5-7.5. Add compost. Shallow roots need good tilth.",
        waterNeeds: "Requires 350-500mm. Consistent moisture for tender leaves.",
        sunlightNeeds: "Full sun to partial shade. Some shade beneficial in hot weather.",
        temperatureTolerance: "Optimal 10-20°C. Bolts in heat above 25°C. Tolerates light frost.",
        bestProvinces: ["Western Cape", "Gauteng", "Free State"],
        varieties: [
            { name: "Bloomsdale", description: "Savoy. Crinkled leaves. Cold hardy" },
            { name: "Baby Leaf Mix", description: "Smooth. Quick growing. Multiple cuts" }
        ],
        fertilizers: [
            { name: "High Nitrogen", cost: "R2000/ha", application: "LAN weekly at 100kg/ha or liquid feed", npk: "28:0:0", benefits: "Leafy green needs nitrogen" }
        ],
        diseases: [
            { name: "Downy Mildew", symptoms: "Yellow spots on upper leaf. Purple fuzz underneath.", treatment: "Improve air circulation. Avoid overhead watering. Resistant varieties. Fungicides limited.", cost: "R200-350/ha" }
        ],
        pests: [
            { name: "Leaf Miners", symptoms: "Serpentine trails in leaves. Larvae visible in mines.", control: "Remove affected leaves. Use row covers. Spray spinosad if severe.", cost: "R150-250/ha" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Spinach", spacing: 0.15, waterPerWeek: 8, yieldPerPlant: 0.15, seedCost: 1, maturityYears: 0.15 }]
        }
    },

    // BEETROOT
    beetroot: {
        id: "beetroot",
        name: "Beetroot",
        category: "Vegetables",
        image: "beetroot.jpg",
        emoji: "🫐",
        growthDuration: "Beetroot matures in 8-12 weeks depending on size required.",
        plantingSeasons: "Year-round in mild climates. Best March-May and August-November.",
        yieldPerArea: "Commercial: 25-40 tons/ha. Home gardens: 4-6kg per square meter.",
        soilRequirements: "Well-drained loam, pH 6.0-7.0. Add compost. Avoid fresh manure which causes forking.",
        waterNeeds: "Requires 400-600mm. Consistent moisture for tender roots.",
        sunlightNeeds: "Full sun to partial shade. 6+ hours ideal.",
        temperatureTolerance: "Optimal 15-25°C. Tolerates light frost. Heat causes woody roots.",
        bestProvinces: ["Western Cape", "Free State", "Gauteng"],
        varieties: [
            { name: "Detroit Dark Red", description: "Round. Deep red. Uniform" },
            { name: "Golden", description: "Yellow flesh. Sweet. Doesn't stain" }
        ],
        fertilizers: [
            { name: "Root Crop Fertilizer", cost: "R2500/ha", application: "2:3:4 (22) 300kg/ha at planting", npk: "2:3:4", benefits: "Potassium for root development" }
        ],
        diseases: [
            { name: "Cercospora Leaf Spot", symptoms: "Brown spots with purple margins on leaves.", treatment: "Apply fungicide. Remove old leaves. Rotate crops.", cost: "R150-250/ha" }
        ],
        pests: [
            { name: "Leaf Miner", symptoms: "Blotches on leaves. Tunneling damage.", control: "Remove affected leaves. Use row covers. Rotate crops.", cost: "R100-200/ha" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Beetroot", spacing: 0.1, waterPerWeek: 8, yieldPerPlant: 0.2, seedCost: 2, maturityYears: 0.2 }]
        }
    },

    // BROCCOLI
    broccoli: {
        id: "broccoli",
        name: "Broccoli",
        category: "Vegetables",
        image: "broccoli.jpg",
        emoji: "🥦",
        growthDuration: "Broccoli matures in 3-4 months from transplanting. Side shoots continue after main head.",
        plantingSeasons: "Plant February-May for winter harvest. Cool-season crop.",
        yieldPerArea: "Commercial: 18-30 tons/ha. Home gardens: 300-800g main head per plant.",
        soilRequirements: "Fertile loam, pH 6.0-7.0. Heavy feeder. Add generous compost and lime.",
        waterNeeds: "Requires 500-700mm. Consistent moisture for head formation.",
        sunlightNeeds: "Full sun preferred. Tolerates partial shade.",
        temperatureTolerance: "Optimal 15-20°C. Tolerates frost. Heat causes bolting.",
        bestProvinces: ["Western Cape", "Gauteng", "Free State"],
        varieties: [
            { name: "Calabrese", description: "Open pollinated. Side shoots after main head" },
            { name: "Premium Crop", description: "Hybrid. Large heads. Uniform" }
        ],
        fertilizers: [
            { name: "Brassica Fertilizer", cost: "R3200/ha", application: "2:3:2 (28) 400kg/ha + side-dress nitrogen", npk: "2:3:2", benefits: "Heavy feeder needs regular feeding" }
        ],
        diseases: [
            { name: "Clubroot", symptoms: "Swollen distorted roots. Stunted growth. Wilting.", treatment: "Lime soil to pH 7.2. Rotate 4-5 years. Remove infected plants.", cost: "Lime R500-800/ha" }
        ],
        pests: [
            { name: "Cabbage Aphid", symptoms: "Grey-green aphids on heads. Honeydew. Sooty mold.", control: "Spray soapy water or neem. Encourage ladybugs. Remove heavily infested plants.", cost: "R120-220/ha" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Broccoli", spacing: 0.45, waterPerWeek: 12, yieldPerPlant: 0.5, seedCost: 3, maturityYears: 0.3 }]
        }
    },

    // CAULIFLOWER
    cauliflower: {
        id: "cauliflower",
        name: "Cauliflower",
        category: "Vegetables",
        image: "cauliflower.jpg",
        emoji: "🥦",
        growthDuration: "Cauliflower matures in 3-5 months from transplanting. Requires cool weather.",
        plantingSeasons: "Plant February-May for winter harvest. Very sensitive to heat.",
        yieldPerArea: "Commercial: 20-35 tons/ha. Home gardens: 500-1200g per head.",
        soilRequirements: "Fertile loam, pH 6.5-7.5. Very heavy feeder. Needs consistent moisture and nutrients.",
        waterNeeds: "Requires 600-800mm. Water stress causes poor curd formation.",
        sunlightNeeds: "Full sun preferred. Needs good light for curd development.",
        temperatureTolerance: "Optimal 15-20°C. Very sensitive to heat. Tolerates frost.",
        bestProvinces: ["Western Cape", "Free State"],
        varieties: [
            { name: "Snowball", description: "White. Reliable. Classic variety" },
            { name: "Cheddar", description: "Orange. High in beta-carotene" }
        ],
        fertilizers: [
            { name: "Heavy Feeder Mix", cost: "R3500/ha", application: "2:3:2 (28) 450kg/ha + weekly side-dress", npk: "2:3:2", benefits: "Needs constant nutrition for curd formation" }
        ],
        diseases: [
            { name: "Black Rot", symptoms: "V-shaped yellow lesions. Black veins. Curd rot.", treatment: "Hot water treat transplants. Rotate crops. Apply copper. Remove infected plants.", cost: "R200-350/ha" }
        ],
        pests: [
            { name: "Diamondback Moth", symptoms: "Small holes in leaves. Larvae on undersides.", control: "Spray Bt. Rotate insecticides. Encourage parasitic wasps.", cost: "R180-300/ha" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Cauliflower", spacing: 0.5, waterPerWeek: 14, yieldPerPlant: 0.8, seedCost: 3, maturityYears: 0.35 }]
        }
    },

    // CUCUMBER
    cucumber: {
        id: "cucumber",
        name: "Cucumber",
        category: "Vegetables",
        image: "cucumber.jpg",
        emoji: "🥒",
        growthDuration: "Cucumbers mature in 2-3 months. Continuous harvest over 6-10 weeks.",
        plantingSeasons: "Plant spring-summer (September-February) after frost. Warm season crop.",
        yieldPerArea: "Commercial: 30-50 tons/ha. Home gardens: 10-20 fruits per plant.",
        soilRequirements: "Well-drained fertile soil, pH 6.0-7.0. Heavy feeder. Add generous compost.",
        waterNeeds: "Requires 400-600mm. Consistent moisture essential. Drip irrigation ideal.",
        sunlightNeeds: "Full sun - 6-8 hours daily. Warm temperatures needed.",
        temperatureTolerance: "Optimal 24-30°C. Frost kills plants. Cool nights slow growth.",
        bestProvinces: ["Limpopo", "Mpumalanga", "Western Cape"],
        varieties: [
            { name: "Marketmore", description: "Slicing. Disease resistant. Productive" },
            { name: "National Pickling", description: "Small. Uniform. For pickling" }
        ],
        fertilizers: [
            { name: "Vegetable NPK", cost: "R3000/ha", application: "2:3:4 (28) weekly fertigation", npk: "2:3:4", benefits: "Regular feeding for continuous production" }
        ],
        diseases: [
            { name: "Powdery Mildew", symptoms: "White powder on leaves. Reduced photosynthesis.", treatment: "Apply sulfur or baking soda spray. Improve air circulation.", cost: "R150-250/ha" }
        ],
        pests: [
            { name: "Aphids", symptoms: "Clusters on growing tips. Curled leaves. Transmit viruses.", control: "Spray soapy water. Use reflective mulch. Release lacewings.", cost: "R100-200/ha" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Cucumber", spacing: 0.6, waterPerWeek: 15, yieldPerPlant: 15, seedCost: 3, maturityYears: 0.25 }]
        }
    },

    // BUTTERNUT
    butternut: {
        id: "butternut",
        name: "Butternut Squash",
        category: "Vegetables",
        image: "butternut.jpg",
        emoji: "🎃",
        growthDuration: "Butternut matures in 3-4 months. Stores well for months after harvest.",
        plantingSeasons: "Plant October-January. Warm season crop needing long growing period.",
        yieldPerArea: "Commercial: 20-35 tons/ha. Home gardens: 3-8 fruits per plant.",
        soilRequirements: "Well-drained fertile soil, pH 6.0-7.0. Add compost. Needs space to ramble.",
        waterNeeds: "Requires 500-700mm. Reduce watering as fruit matures for better storage.",
        sunlightNeeds: "Full sun essential - 8+ hours daily.",
        temperatureTolerance: "Optimal 21-30°C. Frost kills plants. Heat tolerant once established.",
        bestProvinces: ["Limpopo", "Mpumalanga", "Free State"],
        varieties: [
            { name: "Waltham", description: "Classic. Uniform. Good storage" },
            { name: "Butternut Tuffy", description: "SA variety. Powdery mildew resistant" }
        ],
        fertilizers: [
            { name: "Cucurbit Fertilizer", cost: "R2800/ha", application: "2:3:4 (28) at planting + side-dress", npk: "2:3:4", benefits: "Supports vine and fruit development" }
        ],
        diseases: [
            { name: "Powdery Mildew", symptoms: "White powder on leaves. Premature senescence.", treatment: "Apply sulfur sprays. Plant resistant varieties. Remove old leaves.", cost: "R200-350/ha" }
        ],
        pests: [
            { name: "Squash Bug", symptoms: "Brown bugs. Leaf wilting. Reduced yield.", control: "Hand-pick eggs and adults. Remove plant debris. Use row covers on young plants.", cost: "R150-250/ha" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Butternut", spacing: 1.5, waterPerWeek: 20, yieldPerPlant: 5, seedCost: 4, maturityYears: 0.35 }]
        }
    },

    // PUMPKIN
    pumpkin: {
        id: "pumpkin",
        name: "Pumpkin",
        category: "Vegetables",
        image: "pumpkin.jpg",
        emoji: "🎃",
        growthDuration: "Pumpkins mature in 3-4 months. Large varieties take longer.",
        plantingSeasons: "Plant October-January. Warm season. Needs long growing period.",
        yieldPerArea: "Commercial: 15-30 tons/ha depending on variety. Home: 2-6 pumpkins per plant.",
        soilRequirements: "Fertile well-drained soil, pH 6.0-7.0. Heavy feeder. Space for vines to spread.",
        waterNeeds: "Requires 500-700mm. Regular watering until fruit set, then reduce.",
        sunlightNeeds: "Full sun - 8+ hours daily. Maximum light for fruit development.",
        temperatureTolerance: "Optimal 24-30°C. Frost kills plants. Heat tolerant.",
        bestProvinces: ["Limpopo", "Free State", "North West"],
        varieties: [
            { name: "Flat White Boer", description: "SA traditional. Large. Grey-white" },
            { name: "Atlantic Giant", description: "Huge. For shows. 100kg+" }
        ],
        fertilizers: [
            { name: "High Potassium Mix", cost: "R2500/ha", application: "2:3:4 (28) at planting, side-dress during fruiting", npk: "2:3:4", benefits: "Potassium for large fruit" }
        ],
        diseases: [
            { name: "Fusarium Wilt", symptoms: "Yellowing. Wilting. Vascular browning.", treatment: "Plant resistant varieties. Rotate crops. Remove infected plants. No cure.", cost: "Prevention through rotation" }
        ],
        pests: [
            { name: "Pumpkin Beetle", symptoms: "Orange beetles. Holes in leaves. Vine damage.", control: "Hand-pick beetles. Use row covers. Apply neem if severe.", cost: "R180-300/ha" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Pumpkin", spacing: 2, waterPerWeek: 25, yieldPerPlant: 4, seedCost: 3, maturityYears: 0.35 }]
        }
    },

    // GREEN BEANS
    green_beans: {
        id: "green_beans",
        name: "Green Beans (Bush/Pole)",
        category: "Vegetables",
        image: "green_beans.jpg",
        emoji: "🫘",
        growthDuration: "Bush beans mature in 7-9 weeks. Pole beans in 9-11 weeks but produce longer.",
        plantingSeasons: "Plant October-March in warm areas. Year-round in frost-free regions.",
        yieldPerArea: "Bush beans: 8-12 tons/ha. Pole beans: 15-25 tons/ha. Home: 500g-1kg per plant.",
        soilRequirements: "Well-drained loam, pH 6.0-7.0. Light feeder - fixes nitrogen. Add compost.",
        waterNeeds: "Requires 350-500mm. Regular watering during flowering and pod set.",
        sunlightNeeds: "Full sun preferred - 6+ hours daily.",
        temperatureTolerance: "Optimal 18-27°C. Sensitive to frost. High heat reduces pod set.",
        bestProvinces: ["Mpumalanga", "Limpopo", "Western Cape"],
        varieties: [
            { name: "Contender", description: "Bush. Heat tolerant. Stringless" },
            { name: "Kentucky Wonder", description: "Pole. Long pods. Excellent flavor" }
        ],
        fertilizers: [
            { name: "Low Nitrogen Mix", cost: "R1800/ha", application: "2:3:4 (22) 200kg/ha - beans fix nitrogen", npk: "2:3:4", benefits: "Light feeding only - fixes own nitrogen" }
        ],
        diseases: [
            { name: "Common Bean Rust", symptoms: "Rust-colored pustules on leaves. Premature defoliation.", treatment: "Apply sulfur or copper fungicides. Plant resistant varieties. Remove debris.", cost: "R150-280/ha" }
        ],
        pests: [
            { name: "Bean Fly", symptoms: "Maggots in stems. Stunted plants. Reduced yield.", control: "Early planting escapes peak populations. Seed treatment. Remove infested plants.", cost: "R120-220/ha" }
        ],
        gardenPlanner: {
            treeTypes: [{ name: "Green Beans", spacing: 0.3, waterPerWeek: 10, yieldPerPlant: 0.7, seedCost: 2, maturityYears: 0.2 }]
        }
    }

};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CROPS_DATABASE;
}