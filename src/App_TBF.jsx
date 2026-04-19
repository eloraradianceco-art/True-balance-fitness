import { createElement as h, useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
const supabase = SUPABASE_URL ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

const C={navy:"#1C2B39",navy2:"#243447",teal:"#2A8C8C",teal2:"#1E6E6E",tealLight:"#E8F4F4",cream:"#F7F6F1",white:"#FFFFFF",gray:"#6B7280",grayLight:"#F3F4F6",grayBorder:"#E5E7EB",red:"#C0392B",greenLight:"#F0FDF4",green:"#1E7A4A",amber:"#D97706",amberLight:"#FFFBEB",purple:"#7C3AED"};
const LS={get:(k,d=null)=>{try{const v=localStorage.getItem(k);return v!==null?JSON.parse(v):d;}catch{return d;}},set:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));}catch{}},del:(k)=>{try{localStorage.removeItem(k);}catch{}}};
const si=(a,b={})=>Object.assign({},a,b);
const istyle={width:"100%",border:`1.5px solid #E5E7EB`,borderRadius:7,padding:"9px 12px",fontSize:13,outline:"none",fontFamily:"Georgia,serif",boxSizing:"border-box"};
const Btn=({children,onClick,color=C.teal,fg=C.white,small=false,full=false,st={}})=>h("button",{onClick,style:{background:color,color:fg,border:"none",borderRadius:7,padding:small?"5px 12px":"10px 20px",fontFamily:"Georgia,serif",fontSize:small?11:13,fontWeight:"bold",cursor:"pointer",width:full?"100%":"auto",...st}},children);
const Inp=({value,onChange,placeholder,type="text",st={}})=>h("input",{value,onChange:e=>onChange(e.target.value),placeholder,type,style:{...istyle,...st}});
const Sel=({value,onChange,options,st={}})=>h("select",{value,onChange:e=>onChange(e.target.value),style:{...istyle,background:C.white,...st}},options.map(([v,l])=>h("option",{key:v,value:v},l)));
const TA=({value,onChange,placeholder,rows=3})=>h("textarea",{value,onChange:e=>onChange(e.target.value),placeholder,rows,style:{...istyle,resize:"vertical"}});
const Lbl=({t})=>h("div",{style:{fontSize:11,color:C.gray,fontWeight:"bold",letterSpacing:0.5,marginBottom:4}},t);
const Fld=({label,children,mb=12})=>h("div",{style:{marginBottom:mb}},h(Lbl,{t:label}),children);
const Card=({children,st={}})=>h("div",{style:{background:C.white,borderRadius:10,boxShadow:"0 1px 6px rgba(0,0,0,0.07)",overflow:"hidden",marginBottom:12,...st}},children);
const CardH=({t,color=C.navy})=>h("div",{style:{background:color,color:C.white,padding:"9px 14px",fontSize:11,fontWeight:"bold",letterSpacing:1}},t);
const CardB=({children,p=14})=>h("div",{style:{padding:p}},children);
const Pill=({label,color=C.teal})=>h("span",{style:{background:color+"22",color,border:`1px solid ${color}44`,borderRadius:20,padding:"2px 9px",fontSize:10,fontWeight:"bold",display:"inline-block",marginRight:4,marginBottom:3}},label);
const Tag=({label,color=C.teal})=>h("span",{style:{background:color,color:C.white,borderRadius:4,padding:"1px 6px",fontSize:9,fontWeight:"bold"}},label);
const Chk=({checked,onClick})=>h("div",{onClick,style:{width:22,height:22,borderRadius:5,border:`2px solid ${checked?C.green:C.grayBorder}`,background:checked?C.green:C.white,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0}},checked&&h("span",{style:{color:C.white,fontSize:12,fontWeight:"bold"}},"✓"));
const G2=({children})=>h("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}},children);

const VID={"Glute Bridge":"https://www.youtube.com/results?search_query=glute+bridge+form","Clamshell":"https://www.youtube.com/results?search_query=clamshell+exercise","Dead Bug":"https://www.youtube.com/results?search_query=dead+bug+exercise+core","Chin Tucks":"https://www.youtube.com/results?search_query=chin+tuck+neck+retraction","Wall Angels":"https://www.youtube.com/results?search_query=wall+angels+posture","Prone Y Raise":"https://www.youtube.com/results?search_query=prone+Y+raise+lower+trap","Face Pull — Cable or Band":"https://www.youtube.com/results?search_query=face+pull+form","Sidelying External Rotation — Bilateral":"https://www.youtube.com/results?search_query=sidelying+external+rotation","Serratus Anterior — Wall Push-Up Plus":"https://www.youtube.com/results?search_query=serratus+anterior+push+up+plus","Lat Pulldown":"https://exrx.net/WeightExercises/LatissimusDorsi/CBUnderhndPulldown","Seated Cable Row — Neutral Grip":"https://exrx.net/WeightExercises/BackGeneral/CBSeatedRow","TVA Draw-In — Supine":"https://www.youtube.com/results?search_query=TVA+draw+in+activation","Kneeling Hip Flexor Stretch":"https://www.youtube.com/results?search_query=kneeling+hip+flexor+stretch","Doorway Pec Stretch":"https://www.youtube.com/results?search_query=doorway+pec+stretch","Thoracic Extension — Foam Roller":"https://www.youtube.com/results?search_query=thoracic+extension+foam+roller","Dumbbell Bench Press":"https://exrx.net/WeightExercises/PectoralSternal/DBBenchPress","Push-Up":"https://exrx.net/WeightExercises/PectoralSternal/WtPushup","Bird Dog":"https://www.youtube.com/results?search_query=bird+dog+exercise","Forearm Plank":"https://www.youtube.com/results?search_query=forearm+plank+form","Pallof Press — Band":"https://www.youtube.com/results?search_query=pallof+press","Hamstring Bridge — Heel Drive":"https://www.youtube.com/results?search_query=hamstring+bridge+heel+drive","Sit-to-Stand":"https://www.youtube.com/results?search_query=sit+to+stand+rehab","Zone 2 — Incline Walk / Bike":"https://www.youtube.com/results?search_query=zone+2+cardio","Lateral Raise — Both Arms":"https://exrx.net/WeightExercises/DeltoidLateral/DBLateralRaise","Seated Scapular Retraction — Lower Trap":"https://www.youtube.com/results?search_query=seated+scapular+retraction","QL Release":"https://www.youtube.com/results?search_query=QL+foam+roll","TFL Release":"https://www.youtube.com/results?search_query=TFL+foam+roll","Piriformis Release":"https://www.youtube.com/results?search_query=piriformis+foam+roll","Adductor Release":"https://www.youtube.com/results?search_query=adductor+foam+roll","Lat Release":"https://www.youtube.com/results?search_query=lat+foam+roll","Pec Minor Release — Lacrosse Ball":"https://www.youtube.com/results?search_query=pec+minor+lacrosse+ball","Left QL Release":"https://www.youtube.com/results?search_query=QL+foam+roll","Standing Glute Squeeze":"https://www.youtube.com/results?search_query=standing+glute+activation","Copenhagen Plank":"https://www.youtube.com/results?search_query=copenhagen+plank"};

const CUES={"Glute Bridge":"Lie on your back, knees bent, feet flat. Before lifting ANYTHING — squeeze your butt cheeks together first like cracking a walnut. THEN push your hips up. Hold 2 seconds. Feel this in your butt, not your lower back. Think: SQUEEZE then LIFT.","Clamshell":"Lie on your side, knees bent at 45 degrees, feet touching. Keep feet together the whole time. Open your top knee toward the ceiling — HIPS STAY STILL. Don't rock backward. Feel the burn on the outside of your hip.","Dead Bug":"Lie on your back. Press your lower back FLAT to the floor. Arms up, knees up, shins parallel to floor. Slowly lower your right arm and left leg at the SAME TIME. Back must stay flat. Bring them back. Switch sides. Exhale as you lower.","Chin Tucks":"Sit tall. Slide your head straight BACK — not down, not up — making a double chin. Feel a gentle stretch at the base of your skull. Hold 2 seconds. Think turtle pulling its head into its shell — straight back.","Wall Angels":"Stand with your back against a wall. Head, shoulder blades, and lower back ALL touch the wall. Arms up like a goalpost, backs of hands on wall. Slowly slide arms up like a snow angel, keeping everything touching the wall.","Prone Y Raise":"Lie face down. Arms in a Y shape, thumbs up. Squeeze shoulder blades DOWN your back first — like putting them in your back pockets. THEN lift your arms. Feel this under your shoulder blades, not in your neck.","Face Pull — Cable or Band":"Pull toward your EARS — not your nose — while spreading elbows wide and high. At the end, elbows are higher than wrists. Hold 1 second. Feel the squeeze between your shoulder blades.","Sidelying External Rotation — Bilateral":"Lie on your side. Pin top elbow against your ribs — it does NOT leave your side. Bend elbow to 90 degrees. Rotate forearm UP like opening a gate. Feel this in the back of your shoulder.","Serratus Anterior — Wall Push-Up Plus":"Hands on wall at shoulder height. Push toward wall — at the very END, push extra and let shoulder blades spread apart and wrap around your rib cage. That extra push is the plus. Hold 1 second.","TVA Draw-In — Supine":"Without holding your breath, gently draw your belly button toward your spine about 20% — like bracing for a light poke. Breathe NORMALLY while holding. Not a crunch. A deep quiet squeeze.","Kneeling Hip Flexor Stretch":"Kneel on one knee. Tuck your pelvis under — like you have a tail between your legs. Feel the stretch at the very front top of your hip. Don't lean forward — stand tall and tuck under.","Doorway Pec Stretch":"Stand in a doorway. Arm at 90 degrees, forearm on frame. Step same-side foot forward and let your chest rotate away. Feel the stretch across your chest. Hold at least 45 seconds.","Thoracic Extension — Foam Roller":"Place roller across your MID-back between shoulder blades — NOT lower back. Support your head. Gently arch over the roller and breathe in. Work slowly up and down between shoulder blades and base of neck only.","Hamstring Bridge — Heel Drive":"Lie on back. Slide feet FURTHER away than normal bridge. Toes slightly inward. Drive heels into floor like dragging them toward your body. This fires hamstrings. THEN lift hips.","Sit-to-Stand":"Sit on edge of chair. Feet flat, hip-width apart. Lean your chest FORWARD over your knees first. Squeeze glutes and push through heels to stand. No rocking. No momentum.","Pallof Press — Band":"Anchor band at belly button height. Stand sideways. Hold with both hands at chest. Push hands straight out and HOLD 2 seconds. The band wants to twist you — resist that rotation completely.","Lateral Raise — Both Arms":"Lead with your ELBOWS — like pushing wings out to the sides. Lift to shoulder height. Pinky slightly higher than thumb at top. Lower SLOWLY — 3 full seconds down.","Seated Scapular Retraction — Lower Trap":"Sit upright, lean slightly forward. Pull shoulder blades DOWN and BACK — like sliding them into your back pockets. Not just back — DOWN and back. Hold 2 seconds.","Lat Pulldown":"Before pulling — push chest up slightly and let shoulder blades DROP. Pull bar toward upper chest, leading with ELBOWS. Control the return slowly — 3 full seconds. Feel this along the sides of your back.","Seated Cable Row — Neutral Grip":"Extend arms fully forward — feel shoulder blades spread apart. Pull elbows straight back. At the end, shoulder blades squeeze TOGETHER and DOWN. Torso stays upright. Return slowly.","Bird Dog":"On all fours, hands under shoulders, knees under hips. Extend right arm forward and left leg back SIMULTANEOUSLY. Reach long. Hips stay SQUARE to the floor. Hold 2 seconds.","Forearm Plank":"Forearms on floor, elbows under shoulders. Body in a straight line from heels to head. Squeeze quads, squeeze glutes, draw belly button gently in. One rigid plank of wood.","Standing Glute Squeeze":"Stand tall. Squeeze BOTH glutes as hard as you can — like holding a quarter between your cheeks. Hold 10 full seconds. Do this every single time you stand from a chair throughout your day.","Zone 2 — Incline Walk / Bike":"Zone 2 means talking is slightly uncomfortable but totally possible. If you can chat effortlessly — go harder. If you can't finish a sentence — slow down. Target: 120–140 heartbeats per minute. Steady the entire time.","Dumbbell Bench Press":"Lower slowly until upper arms just below parallel — elbows at 45 degrees from body. Feel stretch across chest. Push up and slightly toward each other at the top. Breathe out as you push.","Push-Up":"Hands slightly wider than shoulders, body in a straight line. Lower slowly 2–3 seconds, elbows at 45 degrees. Chest nearly touches floor. Push the floor AWAY from you back to start."};

const PROG={"Glute Bridge":["Single Leg Glute Bridge","Band Glute Bridge","Dumbbell Hip Thrust","Barbell Glute Bridge","Barbell Hip Thrust"],"Clamshell":["Clamshell with Band","Mini Band Isometric Clamshell","Side Lying Leg Ext"],"Lateral Raise — Both Arms":["Lateral Raise — 5 lb DB","Dumbbell Lateral Raise","Cable Lateral Raise","Lateral Raise Machine"],"Wall Angels":["Single Arm Wall Angel","Wall Angels with Band"],"Prone Y Raise":["Prone Y Raise — Light DB","Lower Trap Lv2","Lower Trap Lv3","TRX Y Deltoid Fly"],"Sidelying External Rotation — Bilateral":["Cable Standing External Shoulder Rotation","Band Standing External Shoulder Rotation"],"Face Pull — Cable or Band":["Cable Face Pull","Cable Kneeling Face Pull","Band Face Pull to Y"],"Serratus Anterior — Wall Push-Up Plus":["Serratus Plank Level Two","Cable Seated Scapular Protraction"],"Seated Cable Row — Neutral Grip":["Dumbbell Single Arm Bent Over Row","Barbell Bent Over Row","Scapular Retraction Inverted Row"],"Lat Pulldown":["Neutral Grip Lat Pulldown","Machine Assisted Pull Up","Chin Up"],"Dead Bug":["Deadbug Lv1","Deadbug Lv2","Deadbug Lv3"],"TVA Draw-In — Supine":["TVA Draw-In — Seated","TVA Draw-In — Standing","Pallof Press — Band"],"Chin Tucks":["Cervical Neck Retractions Lv2","Neck Retractions with Swiss Ball"],"Seated Scapular Retraction — Lower Trap":["Lower Trap Lv1","Lower Trap Lv2","Lower Trap Lv3","Prone Y Raise"],"Kneeling Hip Flexor Stretch":["Thomas Stretch","90/90 Hip External Rotation Stretch","Couch Stretch"],"Hamstring Bridge — Heel Drive":["Exercise Ball Hamstring Curl","Prone Lying Hamstring Curl Machine"],"Sit-to-Stand":["Sit-to-Stand — One Hand","Sit-to-Stand — No Hands","Body Weight Squat"],"Pallof Press — Band":["Cable Half Kneeling Pallof Press","Cable Split Stance Pallof Press"],"Forearm Plank":["High Plank","Plank with Leg Lift","Copenhagen Plank"],"Bird Dog":["Bird-Dog Off Bench","Dead Bug"],"Dumbbell Bench Press":["Barbell Bench Press","Dumbbell Incline Bench Press"],"Push-Up":["Push-Up to Side Plank","Close Grip Push Up","Decline Push Up"]};

const ALL_EX=[...["Adductor Release","Lat Release","Levator","Outside Calf Release","Pec Minor Release","Peroneal Release","Piriformis Release","QL Release","Rhomboids SMR","TFL Release","Full Quad Release","Bicep Femoris Release","Suboccipital Release","Calcaneus SMR","Pec Minor Release — Lacrosse Ball","Left QL Release"].map(n=>({name:n,cat:"Release"})),...["Doorway Pec Stretch","Kneeling Hip Flexor Stretch","Lat Stretch","Levator Scap Stretch","QL Stretch","Thomas Stretch","Standing Gastrocnemius Calf Stretch","Swiss Ball Lat Stretch","Childs Pose","Pigeon Stretch","Thoracic Extension — Foam Roller","90/90 Hip External Rotation Stretch","90/90 Hamstring Stretch","Adductor Stretch — Side-Lying","Calf Stretch — Bent Knee","Active Thoracic Extension","Cat Cow","Inchworm","Lying Figure Four Stretch","Lateral Neck Stretch"].map(n=>({name:n,cat:"Mobility"})),...["Clamshell","Dead Bug","Bird Dog","TVA Draw-In — Supine","Chin Tucks","Wall Angels","Prone Y Raise","Sidelying External Rotation — Bilateral","Serratus Anterior — Wall Push-Up Plus","Seated Scapular Retraction — Lower Trap","Standing Glute Squeeze","Glute Bridge","Hamstring Bridge — Heel Drive","Sit-to-Stand","Mini Band Lateral Walk (High)","Band X Walks","Tib Anterior Lifts","Arch Lift","Inner Calf Raises","Side Plank Lv1","Single Leg Balance","Glute Max","Medial Hamstring"].map(n=>({name:n,cat:"Activation"})),...["Forearm Plank","Pallof Press — Band","Copenhagen Plank","Flutter Kicks","Bear Crawl Shoulder Tap","Reverse Crunch","Mountain Climbers","Bicycle Crunch","Active Hollow Hold","Lateral Plank Walk"].map(n=>({name:n,cat:"Core"})),...["Lat Pulldown","Neutral Grip Lat Pulldown","Seated Cable Row — Neutral Grip","Dumbbell Single Arm Bent Over Row","Face Pull — Cable or Band","Rear Delt Fly Machine","Barbell Bent Over Row","TRX Y Deltoid Fly","Chest Supported Lower Trap","Lower Trap Lv1","Lower Trap Lv2","Lower Trap Lv3","Dumbbell Rear Delt Row","Cable Lateral Raise","Dumbbell Lateral Raise","Lateral Raise Machine","Cable Face Pull","Band Pull Apart","Machine Assisted Pull Up","Chin Up","Lateral Raise — Both Arms"].map(n=>({name:n,cat:"Upper Pull"})),...["Push-Up","Dumbbell Bench Press","Barbell Bench Press","Dumbbell Incline Bench Press","Barbell Overhead Press","Dumbbell Shoulder Press","Seated Shoulder Press Machine","Chest Press Machine","Close Grip Push Up","Diamond Push Up"].map(n=>({name:n,cat:"Upper Push"})),...["Glute Bridge","Barbell Glute Bridge","Barbell Hip Thrust","Dumbbell Hip Thrust","Body Weight Glute Bridge","Leg Press","Dumbbell Romanian Deadlift","Barbell Romanian Deadlift","Barbell Deadlift","Hex Bar Deadlift","Barbell Squat","Dumbbell Goblet Squat","Body Weight Squat","Seated Hamstring Curl Machine","Prone Lying Hamstring Curl Machine","Dumbbell Step Ups","Body Weight Step Up","Dumbbell Walking Lunge","Dumbbell Split Squat","Dumbbell Standing Calf Raise","Seated Calf Raise Machine","Hamstring Bridge — Heel Drive","Single Leg Glute Bridge","Heels Elevated Goblet Squat"].map(n=>({name:n,cat:"Lower"})),...["Exercise Bike","Treadmill Walk","Treadmill Incline Walk","Row Machine","Zone 2 — Incline Walk / Bike","HIIT Intervals","Jumping Jacks","Mountain Climbers"].map(n=>({name:n,cat:"Cardio"})),...["Sit-to-Stand","Pallof Press — Cable","Cable Standing Low to High Chop","Dumbbell Renegade Row","Single Leg Balance with Reach","Suitcase Carry","Farmers Walk"].map(n=>({name:n,cat:"Integration"}))];

const ALL_FOODS=[...["Chicken breast","Lean ground beef","Salmon","Tuna (canned)","Eggs","Egg whites","Greek yogurt","Cod","Turkey breast","Shrimp","Pork tenderloin","Sardines","Cottage cheese","Edamame","Tempeh","Black beans","Lentils"].map(n=>({name:n,cat:"Protein"})),...["Jasmine rice","Brown rice","Sweet potato","White potato","Oats","Kodiak pancake mix","Quinoa","Banana","Pineapple","Blueberries","Strawberries","Mixed berries","Ezekiel bread","Farro","Chickpeas","Beets","Butternut squash"].map(n=>({name:n,cat:"Carbs"})),...["Avocado","Olive oil","Walnuts","Almonds","Pecans","Cashews","Almond butter","Natural peanut butter","Chia seeds","Flaxseeds","Coconut oil","Grass-fed butter","Dark chocolate (85%+)","Pumpkin seeds"].map(n=>({name:n,cat:"Fats"})),...["Spinach","Kale","Arugula","Asparagus","Broccoli","Zucchini","Mushrooms","Bell peppers","Cucumber","Celery","Tomatoes","Garlic","Brussels sprouts","Cauliflower","Green beans","Cabbage","Romaine lettuce"].map(n=>({name:n,cat:"Veggies"})),...["Banana","Apple","Orange","Pineapple","Blueberries","Strawberries","Raspberries","Blackberries","Mango","Watermelon","Kiwi","Grapefruit","Pomegranate"].map(n=>({name:n,cat:"Fruits"})),...["Honey","Electrolytes","Protein powder (whey)","Creatine","Turmeric","Ginger","Apple cider vinegar","Bone broth"].map(n=>({name:n,cat:"Extras"}))];

const TEMPLATES={
posture:{label:"Posture Correction",focus:"Corrective Exercise | Posture Correction",phase:1,days:[{title:"SESSION — CORRECTIVE UPPER BODY",type:"session",sections:[{label:"WARM-UP / RELEASE",color:C.navy,exercises:[{name:"Pec Minor Release — Lacrosse Ball",prescription:"60 sec each side",cue:""},{name:"Thoracic Extension — Foam Roller",prescription:"60 sec",cue:""}]},{label:"CORRECTIVE ACTIVATION",color:C.teal,exercises:[{name:"Chin Tucks",prescription:"3 x 10 x 2s hold",cue:""},{name:"Wall Angels",prescription:"3 x 10 slow",cue:""},{name:"Prone Y Raise",prescription:"3 x 12",cue:""},{name:"Face Pull — Cable or Band",prescription:"3 x 15",cue:""}]},{label:"STRENGTH",color:C.navy2,exercises:[{name:"Seated Cable Row — Neutral Grip",prescription:"3 x 12",cue:""},{name:"Glute Bridge",prescription:"3 x 15 x 2s hold",cue:""},{name:"Dead Bug",prescription:"3 x 8 each",cue:""}]}]}]},
weightloss:{label:"Weight Loss",focus:"Weight Loss | Metabolic Conditioning",phase:1,days:[{title:"SESSION — FULL BODY METABOLIC",type:"session",sections:[{label:"WARM-UP",color:C.navy,exercises:[{name:"Glute Bridge",prescription:"2 x 15",cue:""},{name:"Bird Dog",prescription:"2 x 10 each",cue:""}]},{label:"MAIN CIRCUIT",color:C.teal,exercises:[{name:"Body Weight Squat",prescription:"3 x 15",cue:""},{name:"Push-Up",prescription:"3 x 10–15",cue:""},{name:"Dumbbell Romanian Deadlift",prescription:"3 x 12",cue:""},{name:"Bird Dog",prescription:"3 x 10 each",cue:""}]},{label:"CARDIO FINISHER",color:C.navy2,exercises:[{name:"Zone 2 — Incline Walk / Bike",prescription:"20–25 min | HR 120–140",cue:""}]}]}]},
performance:{label:"Athletic Performance",focus:"Athletic Performance | Strength & Power",phase:1,days:[{title:"SESSION — PUSH + LOWER",type:"session",sections:[{label:"ACTIVATION",color:C.teal,exercises:[{name:"Band X Walks",prescription:"2 x 15 each direction",cue:""},{name:"Bird Dog",prescription:"2 x 10 each",cue:""}]},{label:"STRENGTH",color:C.navy,exercises:[{name:"Barbell Squat",prescription:"4 x 5",cue:""},{name:"Dumbbell Bench Press",prescription:"4 x 8",cue:""},{name:"Dumbbell Romanian Deadlift",prescription:"3 x 8",cue:""},{name:"Dumbbell Shoulder Press",prescription:"3 x 10",cue:""}]}]},{title:"SESSION — PULL + UPPER",type:"session",sections:[{label:"ACTIVATION",color:C.teal,exercises:[{name:"Wall Angels",prescription:"2 x 10",cue:""},{name:"Dead Bug",prescription:"2 x 8 each",cue:""}]},{label:"STRENGTH",color:C.navy,exercises:[{name:"Lat Pulldown",prescription:"4 x 8",cue:""},{name:"Seated Cable Row — Neutral Grip",prescription:"4 x 10",cue:""},{name:"Face Pull — Cable or Band",prescription:"3 x 15",cue:""},{name:"Dumbbell Single Arm Bent Over Row",prescription:"3 x 10 each",cue:""}]}]}]},
postpartum:{label:"Postpartum Recovery",focus:"Postpartum Recovery | Core Restore | Glute Activation",phase:1,days:[{title:"HOME — GENTLE RESTORE",type:"home",sections:[{label:"BREATHE + RELEASE",color:C.teal,exercises:[{name:"Kneeling Hip Flexor Stretch",prescription:"3 x 45 sec each",cue:""},{name:"Doorway Pec Stretch",prescription:"3 x 45 sec",cue:""}]},{label:"CORE + GLUTE RESTORE",color:C.navy,exercises:[{name:"TVA Draw-In — Supine",prescription:"3 x 10 x 5s hold",cue:""},{name:"Glute Bridge",prescription:"3 x 10 x 2s hold",cue:""},{name:"Clamshell",prescription:"3 x 12 each",cue:""},{name:"Sit-to-Stand",prescription:"5–8 reps",cue:""}]}]}]},
seniors:{label:"Senior Fitness",focus:"Senior Fitness | Balance | Functional Strength",phase:1,days:[{title:"SESSION — FUNCTIONAL MOVEMENT",type:"session",sections:[{label:"WARM-UP",color:C.teal,exercises:[{name:"Sit-to-Stand",prescription:"2 x 8 | Slow",cue:""},{name:"Chin Tucks",prescription:"2 x 10 x 2s",cue:""}]},{label:"STRENGTH + BALANCE",color:C.navy,exercises:[{name:"Wall Angels",prescription:"3 x 10 slow",cue:""},{name:"Glute Bridge",prescription:"3 x 12 x 2s hold",cue:""},{name:"Seated Cable Row — Neutral Grip",prescription:"3 x 12 | Light",cue:""},{name:"Dead Bug",prescription:"3 x 6 each | Slow",cue:""},{name:"Single Leg Balance",prescription:"3 x 20 sec each",cue:""}]},{label:"CARDIO",color:C.navy2,exercises:[{name:"Zone 2 — Incline Walk / Bike",prescription:"15–20 min | Comfortable",cue:""}]}]}]},
chronic_pain:{label:"Chronic Pain Management",focus:"Chronic Pain | Decompression | Neuromuscular Re-ed",phase:1,days:[{title:"HOME — PAIN MANAGEMENT PROTOCOL",type:"home",sections:[{label:"RELEASE",color:C.navy,exercises:[{name:"QL Release",prescription:"60–90 sec each side",cue:""},{name:"TFL Release",prescription:"60 sec each side",cue:""},{name:"Thoracic Extension — Foam Roller",prescription:"60 sec",cue:""}]},{label:"GENTLE ACTIVATION",color:C.teal,exercises:[{name:"TVA Draw-In — Supine",prescription:"3 x 10 x 5s | Very gentle",cue:""},{name:"Glute Bridge",prescription:"3 x 10 | Pain-free range",cue:""},{name:"Bird Dog",prescription:"3 x 6 each | Controlled",cue:""}]}]}]},
fat_loss_muscle:{label:"Body Recomposition",focus:"Fat Loss | Muscle Building | Metabolic",phase:1,days:[{title:"SESSION — UPPER BODY",type:"session",sections:[{label:"ACTIVATION",color:C.teal,exercises:[{name:"Wall Angels",prescription:"2 x 10",cue:""},{name:"Prone Y Raise",prescription:"2 x 12",cue:""}]},{label:"STRENGTH",color:C.navy,exercises:[{name:"Dumbbell Bench Press",prescription:"4 x 8–10 | 2s down",cue:""},{name:"Seated Cable Row — Neutral Grip",prescription:"4 x 10 | 2s hold",cue:""},{name:"Dumbbell Shoulder Press",prescription:"3 x 10–12",cue:""},{name:"Face Pull — Cable or Band",prescription:"3 x 15",cue:""}]},{label:"CARDIO",color:C.navy2,exercises:[{name:"Zone 2 — Incline Walk / Bike",prescription:"20 min | HR 120–140",cue:""}]}]},{title:"SESSION — LOWER BODY",type:"session",sections:[{label:"ACTIVATION",color:C.teal,exercises:[{name:"Glute Bridge",prescription:"2 x 15 | 2s hold",cue:""},{name:"Clamshell",prescription:"2 x 12 each",cue:""}]},{label:"STRENGTH",color:C.navy,exercises:[{name:"Dumbbell Goblet Squat",prescription:"4 x 10–12",cue:""},{name:"Dumbbell Romanian Deadlift",prescription:"4 x 10",cue:""},{name:"Hamstring Bridge — Heel Drive",prescription:"3 x 12",cue:""},{name:"Dumbbell Step Ups",prescription:"3 x 10 each",cue:""}]},{label:"CARDIO",color:C.navy2,exercises:[{name:"Zone 2 — Incline Walk / Bike",prescription:"20 min | HR 120–140",cue:""}]}]}]},
corrective_lower:{label:"Lower Body Corrective",focus:"Lower Cross Syndrome | Hip / Knee / Ankle",phase:1,days:[{title:"SESSION — LOWER BODY CORRECTIVE",type:"session",sections:[{label:"RELEASE",color:C.navy,exercises:[{name:"QL Release",prescription:"90 sec each side",cue:""},{name:"TFL Release",prescription:"60 sec each side",cue:""},{name:"Piriformis Release",prescription:"60 sec each side",cue:""}]},{label:"LENGTHEN",color:C.teal2,exercises:[{name:"Kneeling Hip Flexor Stretch",prescription:"3 x 45 sec each",cue:""},{name:"Adductor Stretch — Side-Lying",prescription:"3 x 45 sec",cue:""}]},{label:"ACTIVATE",color:C.teal,exercises:[{name:"Glute Bridge",prescription:"3 x 15 x 2s hold",cue:""},{name:"Clamshell",prescription:"3 x 12 each",cue:""},{name:"TVA Draw-In — Supine",prescription:"3 x 10 x 5s",cue:""},{name:"Standing Glute Squeeze",prescription:"5 x 10s hold",cue:""}]},{label:"INTEGRATE",color:C.navy2,exercises:[{name:"Body Weight Squat",prescription:"3 x 12 | Controlled",cue:""},{name:"Pallof Press — Band",prescription:"3 x 10 each | 2s hold",cue:""}]}]}]},
corrective_upper:{label:"Upper Body Corrective",focus:"Upper Cross Syndrome | Shoulder / Neck / Thoracic",phase:1,days:[{title:"SESSION — UPPER BODY CORRECTIVE",type:"session",sections:[{label:"RELEASE",color:C.navy,exercises:[{name:"Pec Minor Release — Lacrosse Ball",prescription:"60 sec each side",cue:""},{name:"Lat Release",prescription:"60 sec each side",cue:""},{name:"Suboccipital Release",prescription:"60 sec",cue:""}]},{label:"LENGTHEN",color:C.teal2,exercises:[{name:"Doorway Pec Stretch",prescription:"3 x 45 sec",cue:""},{name:"Levator Scap Stretch",prescription:"3 x 45 sec each",cue:""},{name:"Thoracic Extension — Foam Roller",prescription:"60 sec",cue:""}]},{label:"ACTIVATE",color:C.teal,exercises:[{name:"Chin Tucks",prescription:"3 x 10 x 2s hold",cue:""},{name:"Prone Y Raise",prescription:"3 x 12",cue:""},{name:"Sidelying External Rotation — Bilateral",prescription:"3 x 12 each | Light",cue:""},{name:"Serratus Anterior — Wall Push-Up Plus",prescription:"3 x 12",cue:""}]},{label:"INTEGRATE",color:C.navy2,exercises:[{name:"Seated Cable Row — Neutral Grip",prescription:"3 x 12",cue:""},{name:"Face Pull — Cable or Band",prescription:"3 x 15",cue:""},{name:"Wall Angels",prescription:"3 x 10",cue:""}]}]}]}
}

const CM={head_forward:{label:"Forward Head Posture",explain:"Your head sits forward of your shoulders. Every inch forward adds roughly 10 lbs of load to your neck — causing neck pain, headaches, and upper back tension.",release:["Suboccipital Release","Levator"],stretch:["Levator Scap Stretch","Lateral Neck Stretch"],activate:["Chin Tucks"],integrate:["Wall Angels","Seated Scapular Retraction — Lower Trap"]},shoulders_rounded:{label:"Rounded Shoulders / Upper Cross Syndrome",explain:"Your shoulders are rolling forward, compressing the front of your shoulder and shutting off your upper back muscles. The most common postural pattern — caused by sitting and screens.",release:["Pec Minor Release — Lacrosse Ball","Lat Release"],stretch:["Doorway Pec Stretch","Lat Stretch","Levator Scap Stretch"],activate:["Prone Y Raise","Wall Angels","Sidelying External Rotation — Bilateral","Face Pull — Cable or Band","Seated Scapular Retraction — Lower Trap"],integrate:["Seated Cable Row — Neutral Grip","Lat Pulldown"]},thoracic_kyphosis:{label:"Excessive Thoracic Kyphosis",explain:"Your upper and mid back has an excessive forward curve — the hunch. This puts pressure on your spinal discs and compresses your breathing muscles.",release:["Pec Minor Release — Lacrosse Ball","Lat Release"],stretch:["Thoracic Extension — Foam Roller","Doorway Pec Stretch","Childs Pose"],activate:["Prone Y Raise","Wall Angels","Seated Scapular Retraction — Lower Trap"],integrate:["Seated Cable Row — Neutral Grip","Face Pull — Cable or Band"]},left_shoulder_elevated:{label:"Left Shoulder Elevation",explain:"Your left shoulder sits higher than your right. The left upper trap and levator scapulae are overworking. Left side is the priority every session.",release:["Levator","Rhomboids SMR"],stretch:["Levator Scap Stretch","Lateral Neck Stretch"],activate:["Lower Trap Lv1","Seated Scapular Retraction — Lower Trap"],integrate:["Wall Angels","Prone Y Raise"]},right_shoulder_elevated:{label:"Right Shoulder Elevation",explain:"Your right shoulder sits higher than your left. Right upper trap and levator are overworking.",release:["Levator","Rhomboids SMR"],stretch:["Levator Scap Stretch","Lateral Neck Stretch"],activate:["Lower Trap Lv1","Seated Scapular Retraction — Lower Trap"],integrate:["Wall Angels","Prone Y Raise"]},apt_bilateral:{label:"Anterior Pelvic Tilt — Bilateral / Lower Cross Syndrome",explain:"Your pelvis tilts forward, meaning your hip flexors and lower back are overworking while your glutes and core are underactive. The most common cause of lower back pain. Think of your pelvis as a bowl of water — yours is spilling forward.",release:["QL Release","TFL Release","Piriformis Release","Full Quad Release"],stretch:["Kneeling Hip Flexor Stretch","Thomas Stretch","QL Stretch"],activate:["Glute Bridge","TVA Draw-In — Supine","Bird Dog","Dead Bug"],integrate:["Pallof Press — Band","Sit-to-Stand","Hamstring Bridge — Heel Drive"]},apt_left_dominant:{label:"Left-Dominant Anterior Pelvic Tilt",explain:"Your pelvis tilts forward more on the left side. Your left hip flexor is the primary driver — left side gets priority every session.",release:["QL Release","TFL Release","Piriformis Release"],stretch:["Kneeling Hip Flexor Stretch","QL Stretch"],activate:["Glute Bridge","TVA Draw-In — Supine","Glute Max"],integrate:["Pallof Press — Band","Single Leg Balance"]},apt_right_dominant:{label:"Right-Dominant Anterior Pelvic Tilt",explain:"Your pelvis tilts forward more on the right side. Right hip flexor is the primary driver — right side gets priority.",release:["QL Release","TFL Release","Piriformis Release"],stretch:["Kneeling Hip Flexor Stretch","QL Stretch"],activate:["Glute Bridge","TVA Draw-In — Supine","Glute Max"],integrate:["Pallof Press — Band","Single Leg Balance"]},left_pelvic_elevation:{label:"Left Pelvic Elevation (Hip Hike)",explain:"Your left hip sits higher than your right. Your left QL is overworking and pulling the hip up — a common driver of lower back pain.",release:["QL Release","TFL Release"],stretch:["QL Stretch","QL Side Lean Stretch"],activate:["Glute Max","Medial Hamstring"],integrate:["Pallof Press — Band","Bird Dog"]},right_pelvic_elevation:{label:"Right Pelvic Elevation (Hip Hike)",explain:"Your right hip sits higher than your left. Right QL is overworking.",release:["QL Release","TFL Release"],stretch:["QL Stretch"],activate:["Glute Max","Medial Hamstring"],integrate:["Pallof Press — Band","Bird Dog"]},knee_valgus_bilateral:{label:"Bilateral Knee Valgus — Knees Cave In",explain:"Your knees fall inward when squatting or walking. Your glutes and inner quads are not activating properly.",release:["Adductor Release","TFL Release","Full Quad Release"],stretch:["Adductor Stretch — Side-Lying","Thomas Stretch"],activate:["Clamshell","Mini Band Lateral Walk (High)","Arch Lift"],integrate:["Body Weight Squat","Glute Bridge","Sit-to-Stand"]},knee_valgus_left:{label:"Left Knee Valgus",explain:"Your left knee falls inward. Left glute med and VMO are not activating properly.",release:["Adductor Release","TFL Release"],stretch:["Adductor Stretch — Side-Lying"],activate:["Clamshell","Mini Band Lateral Walk (High)","Arch Lift"],integrate:["Body Weight Squat","Glute Bridge"]},knee_valgus_right:{label:"Right Knee Valgus",explain:"Your right knee falls inward. Right glute med and VMO are not activating properly.",release:["Adductor Release","TFL Release"],stretch:["Adductor Stretch — Side-Lying"],activate:["Clamshell","Mini Band Lateral Walk (High)","Arch Lift"],integrate:["Body Weight Squat","Glute Bridge"]},pronation_bilateral:{label:"Bilateral Foot Pronation — Flat Arches",explain:"Both feet roll inward when you stand and walk. Everything above the foot compensates.",release:["Calcaneus SMR","Peroneal Release","Outside Calf Release"],stretch:["Standing Gastrocnemius Calf Stretch","Calf Stretch — Bent Knee"],activate:["Arch Lift","Tib Anterior Lifts","Inner Calf Raises"],integrate:["Single Leg Balance","Sit-to-Stand"]},pronation_left:{label:"Left Foot Pronation",explain:"Your left foot rolls inward. Left arch activation is the priority.",release:["Calcaneus SMR","Peroneal Release"],stretch:["Calf Stretch — Bent Knee"],activate:["Arch Lift","Tib Anterior Lifts"],integrate:["Single Leg Balance"]},pronation_right:{label:"Right Foot Pronation",explain:"Your right foot rolls inward. Right arch activation is the priority.",release:["Calcaneus SMR","Peroneal Release"],stretch:["Calf Stretch — Bent Knee"],activate:["Arch Lift","Tib Anterior Lifts"],integrate:["Single Leg Balance"]},ankle_dorsiflexion_limited:{label:"Limited Ankle Dorsiflexion",explain:"Your ankle doesn't bend forward enough when squatting. This causes heel lift, knee cave, and extra load on your lower back.",release:["Outside Calf Release","Calcaneus SMR","Peroneal Release"],stretch:["Calf Stretch — Bent Knee","Standing Gastrocnemius Calf Stretch"],activate:["Tib Anterior Lifts","Arch Lift","Inner Calf Raises"],integrate:["Heels Elevated Goblet Squat","Sit-to-Stand"]}};

const OHSA_R=[{region:"Anterior — Feet & Ankles",signs:[["foot_flatten","Foot Flatten (Eversion)"],["foot_turnout","Foot Turn Out"],["high_arch","High Arch (Inversion)"]],oa:[["gastroc_soleus","Gastroc/Soleus"],["peroneals","Peroneals"],["tfl","TFL"]],ua:[["tibialis_anterior","Tib Anterior"],["glute_med","Glute Med"],["vmq_quads","VMO/Quads"]]},{region:"Anterior — Knees",signs:[["knee_valgus","Knee Bow In (Valgus)"],["knee_varus","Knee Bow Out (Varus)"]],oa:[["adductors","Adductors"],["tfl","TFL"],["bicep_femoris","Bicep Femoris"]],ua:[["glute_med","Glute Med"],["vmq_quads","VMO/Quads"],["hamstrings","Hamstrings"]]},{region:"Anterior — Shoulders",signs:[["arms_fall","Arms Fall"]],oa:[["pec_minor","Pec Minor"],["lats","Lats"],["upper_trap","Upper Trap"]],ua:[["lower_trap","Lower Trap"],["serratus_anterior","Serratus"],["deep_cervical_flexors","Deep Cervical"]]},{region:"Lateral — LPHC",signs:[["forward_lean","Excessive Forward Lean"],["ant_pelvic_tilt","Anterior Pelvic Tilt"],["lordosis","Excessive Lordosis"],["post_pelvic_tilt","Posterior Pelvic Tilt"]],oa:[["hip_flexors","Hip Flexors"],["piriformis","Piriformis"],["ql","QL"],["bicep_femoris","Bicep Femoris"]],ua:[["glute_max","Glute Max"],["tva_core","TVA/Core"],["hamstrings","Hamstrings"]]},{region:"Lateral — Shoulder & Head",signs:[["arms_fall","Arms Fall"],["forward_head","Forward Head Posture"]],oa:[["pec_minor","Pec Minor"],["lats","Lats"],["upper_trap","Upper Trap"],["levator_scap","Levator Scap"],["sternocleidomastoid","SCM"]],ua:[["lower_trap","Lower Trap"],["serratus_anterior","Serratus"],["deep_cervical_flexors","Deep Cervical"]]},{region:"Posterior — LPHC",signs:[["asym_weight_shift","Asymmetrical Weight Shift"]],oa:[["ql","QL"],["piriformis","Piriformis"],["tfl","TFL"]],ua:[["glute_max","Glute Max"],["glute_med","Glute Med"],["tva_core","TVA/Core"]]},{region:"Posterior — Shoulder Girdle",signs:[["scapula_elevate","Scapula Elevates"]],oa:[["upper_trap","Upper Trap"],["levator_scap","Levator Scap"],["pec_minor","Pec Minor"]],ua:[["lower_trap","Lower Trap"],["serratus_anterior","Serratus"],["rhomboids","Rhomboids"]]}];
const ML_T=[{k:"cervical_rotation",l:"Cervical Rotation",bi:true},{k:"lat_length",l:"Lat Length Test",bi:true},{k:"pec_maj_min",l:"Pec Maj/Min Test",bi:true},{k:"subscap_length",l:"Subscap Length Test",bi:true},{k:"obers_test",l:"Ober's Test",bi:true},{k:"elys_test",l:"Ely's Test",bi:true},{k:"thomas_test",l:"Thomas Test",bi:true},{k:"hamstring_length",l:"Hamstring Length Test",bi:true},{k:"calf_sole_length",l:"Calf/Sole Length Test",bi:true}];
const ST_T=[{k:"posterolateral_neck_ext",l:"Posterolateral Neck Extensors",bi:true},{k:"anterolateral_neck_flex",l:"Anterolateral Neck Flexors",bi:true},{k:"anterior_neck_flex",l:"Anterior Neck Flexors",bi:false},{k:"serratus_anterior",l:"Serratus Anterior",bi:true},{k:"humeral_internal_rot",l:"Humeral Internal Rotators",bi:true},{k:"humeral_external_rot",l:"Humeral External Rotators",bi:true},{k:"lower_trapezius",l:"Lower Trapezius",bi:true},{k:"rhomboids",l:"Rhomboids",bi:true},{k:"latissimus_dorsi",l:"Latissimus Dorsi",bi:true},{k:"oblique_ext_int",l:"Oblique Ext/Int",bi:true},{k:"transverse_abdominis",l:"Transverse Abdominis",bi:false},{k:"hip_flexors",l:"Hip Flexors",bi:true},{k:"glute_maximus",l:"Glute Maximus",bi:true},{k:"hip_external_rotators",l:"Hip External Rotators",bi:true},{k:"glute_medius",l:"Glute Medius",bi:true},{k:"adductor_magnus",l:"Adductor Magnus",bi:true},{k:"adductor_complex",l:"Adductor Complex",bi:true},{k:"bicep_femoris",l:"Bicep Femoris",bi:true},{k:"medial_hamstring",l:"Medial Hamstring Complex",bi:true},{k:"posterior_tibialis",l:"Posterior Tibialis",bi:true},{k:"anterior_tibialis",l:"Anterior Tibialis",bi:true}];

function genSugg(a){
  const findings=[],R=new Set(),S=new Set(),A=new Set(),I=new Set();
  const p=a.postural||{};
  [["head_forward",p.head_position==="forward"],["shoulders_rounded",p.shoulder_position==="rounded"],["thoracic_kyphosis",p.thoracic_curve==="kyphotic"],["left_shoulder_elevated",p.left_shoulder==="elevated"],["right_shoulder_elevated",p.right_shoulder==="elevated"],["apt_bilateral",p.pelvic_tilt==="anterior_bilateral"],["apt_left_dominant",p.pelvic_tilt==="anterior_left"],["apt_right_dominant",p.pelvic_tilt==="anterior_right"],["left_pelvic_elevation",p.left_hip==="elevated"],["right_pelvic_elevation",p.right_hip==="elevated"],["knee_valgus_bilateral",p.knee_alignment==="valgus_bilateral"],["knee_valgus_left",p.knee_alignment==="valgus_left"],["knee_valgus_right",p.knee_alignment==="valgus_right"],["pronation_bilateral",p.foot_position==="pronated_bilateral"],["pronation_left",p.foot_position==="pronated_left"],["pronation_right",p.foot_position==="pronated_right"],["ankle_dorsiflexion_limited",p.ankle_dorsiflexion==="limited"]].forEach(([key,cond])=>{if(cond&&CM[key]){findings.push(CM[key]);CM[key].release.forEach(e=>R.add(e));CM[key].stretch.forEach(e=>S.add(e));CM[key].activate.forEach(e=>A.add(e));CM[key].integrate.forEach(e=>I.add(e));}});
  const oO=a.ohsa?.overactive||[],oU=a.ohsa?.underactive||[];
  const oMap={gastroc_soleus:["Outside Calf Release","Calf Stretch — Bent Knee"],hip_flexors:["Full Quad Release","Kneeling Hip Flexor Stretch"],adductors:["Adductor Release","Adductor Stretch — Side-Lying"],tfl:["TFL Release","Thomas Stretch"],piriformis:["Piriformis Release","Pigeon Stretch"],bicep_femoris:["Bicep Femoris Release","90/90 Hamstring Stretch"],ql:["QL Release","QL Stretch"],pec_minor:["Pec Minor Release — Lacrosse Ball","Doorway Pec Stretch"],lats:["Lat Release","Lat Stretch"],upper_trap:["Levator","Levator Scap Stretch"],levator_scap:["Levator","Levator Scap Stretch"],sternocleidomastoid:["Suboccipital Release","Lateral Neck Stretch"]};
  oO.forEach(k=>{if(oMap[k]){R.add(oMap[k][0]);S.add(oMap[k][1]);}});
  const uMap={glute_max:["Glute Bridge","Glute Max","Sit-to-Stand"],glute_med:["Clamshell","Mini Band Lateral Walk (High)"],tva_core:["TVA Draw-In — Supine","Dead Bug","Pallof Press — Band"],lower_trap:["Seated Scapular Retraction — Lower Trap","Prone Y Raise"],serratus_anterior:["Serratus Anterior — Wall Push-Up Plus"],deep_cervical_flexors:["Chin Tucks"],tibialis_anterior:["Tib Anterior Lifts","Arch Lift"],vmq_quads:["Single Leg Balance"],hamstrings:["Hamstring Bridge — Heel Drive","Medial Hamstring"]};
  oU.forEach(k=>{if(uMap[k]) uMap[k].forEach(e=>A.add(e));});
  const ml=a.muscleLength||{};
  const mlM={pec_minor:["Pec Minor Release — Lacrosse Ball","Doorway Pec Stretch"],lats:["Lat Release","Lat Stretch"],hip_flexors:["Full Quad Release","Kneeling Hip Flexor Stretch"],hamstrings:["Bicep Femoris Release","90/90 Hamstring Stretch"],gastroc_soleus:["Outside Calf Release","Calf Stretch — Bent Knee"],tfl_it_band:["TFL Release","Thomas Stretch"],adductors:["Adductor Release","Adductor Stretch — Side-Lying"],upper_trap:["Levator","Levator Scap Stretch"],levator_scap:["Levator","Levator Scap Stretch"],ql:["QL Release","QL Stretch"]};
  Object.entries(ml).forEach(([k,v])=>{if(v==="tight"&&mlM[k]){R.add(mlM[k][0]);S.add(mlM[k][1]);}});
  const st=a.strengthTests||{};
  const stM={glute_max:["Glute Bridge","Sit-to-Stand"],glute_med:["Clamshell","Side Lying Leg Ext"],lower_trap:["Seated Scapular Retraction — Lower Trap","Lower Trap Lv1"],serratus:["Serratus Anterior — Wall Push-Up Plus"],tva:["TVA Draw-In — Supine","Dead Bug"],deep_cervical:["Chin Tucks"],hip_abductors:["Clamshell","Mini Band Lateral Walk (High)"],hamstrings_strength:["Hamstring Bridge — Heel Drive"],tibialis_anterior:["Tib Anterior Lifts","Arch Lift"]};
  Object.entries(st).forEach(([k,v])=>{if((v==="weak"||v==="inhibited")&&stM[k]) stM[k].forEach(e=>A.add(e));});
  return{findings,release:[...R],stretch:[...S],activate:[...A],integrate:[...I]};
}

function buildProg(sugg){
  const toEx=(name,presc)=>({name,prescription:presc,cue:CUES[name]||""});
  const sections=[];
  if(sugg.release.length>0) sections.push({label:"STEP 1 — RELEASE",color:C.navy,exercises:sugg.release.slice(0,4).map(n=>toEx(n,"60–90 sec each side"))});
  if(sugg.stretch.length>0) sections.push({label:"STEP 2 — LENGTHEN",color:C.teal2,exercises:sugg.stretch.slice(0,5).map(n=>toEx(n,"3 x 45 sec each side"))});
  if(sugg.activate.length>0) sections.push({label:"STEP 3 — ACTIVATE",color:C.teal,exercises:sugg.activate.slice(0,5).map(n=>toEx(n,"3 x 12–15"))});
  if(sugg.integrate.length>0) sections.push({label:"STEP 4 — INTEGRATE",color:C.navy2,exercises:sugg.integrate.slice(0,3).map(n=>toEx(n,"3 x 10–12"))});
  return{title:"ASSESSMENT-BASED CORRECTIVE PROGRAM — Phase 1",type:"session",sections};
}

const exK=(cid,t,di,si,ei)=>`tbf_${t}_${cid}_${di}_${si}_${ei}`;

function ExCard({ex,cid,di,si,ei,isTrainer}){
  const [checked,setChecked]=useState(()=>LS.get(exK(cid,"chk",di,si,ei),false));
  const [curName,setCurName]=useState(()=>LS.get(exK(cid,"swap",di,si,ei),ex.name));
  const [curPresc,setCurPresc]=useState(()=>LS.get(exK(cid,"presc",di,si,ei),ex.prescription));
  const [panel,setPanel]=useState(null);
  const [search,setSearch]=useState("");
  const [prescEdit,setPrescEdit]=useState(curPresc);
  const [showCue,setShowCue]=useState(false);
  const progs=PROG[ex.name]||PROG[curName]||[];
  const results=search.length>1?ALL_EX.filter(e=>e.name.toLowerCase().includes(search.toLowerCase())).slice(0,10):[];
  const vid=VID[curName]||VID[ex.name];
  const cue=CUES[curName]||CUES[ex.name];
  const doCheck=()=>{const n=!checked;setChecked(n);LS.set(exK(cid,"chk",di,si,ei),n);if(n){const logs=LS.get(`tbf_comp_${cid}`,[]);logs.push({date:new Date().toISOString().slice(0,10),ex:curName});LS.set(`tbf_comp_${cid}`,logs);}};
  const tog=p=>setPanel(panel===p?null:p);
  return h("div",{style:{borderBottom:`1px solid ${C.grayBorder}`,padding:"11px 14px",background:checked?C.greenLight:C.white}},
    h("div",{style:{display:"flex",gap:10,alignItems:"flex-start"}},
      h(Chk,{checked,onClick:doCheck}),
      h("div",{style:{flex:1}},
        h("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}},
          h("span",{style:{fontWeight:"bold",fontSize:14,color:checked?C.green:C.navy,textDecoration:checked?"line-through":"none"}},curName),
          curName!==ex.name&&h(Pill,{label:"swapped",color:C.teal})
        ),
        h("div",{style:{fontSize:12,color:C.teal2,fontWeight:"bold",marginTop:2}},curPresc),
        cue&&h("div",{style:{fontSize:11,color:C.gray,marginTop:3,fontStyle:"italic",lineHeight:1.5}},
          showCue?cue:cue.slice(0,100)+(cue.length>100?"...":""),
          cue.length>100&&h("span",{style:{color:C.teal,cursor:"pointer",marginLeft:4,fontWeight:"bold",fontStyle:"normal"},onClick:()=>setShowCue(!showCue)},showCue?" less":" more")
        ),
        !cue&&ex.cue&&h("div",{style:{fontSize:11,color:C.gray,marginTop:3,fontStyle:"italic"}},ex.cue),
        h("div",{style:{display:"flex",gap:6,marginTop:8,flexWrap:"wrap",alignItems:"center"}},
          progs.length>0&&h(Btn,{onClick:()=>tog("prog"),color:C.teal,small:true},"↑ Progress"),
          h(Btn,{onClick:()=>tog("swap"),color:C.navy,small:true},"⇄ Swap"),
          vid&&h("a",{href:vid,target:"_blank",rel:"noopener noreferrer",style:{background:C.red,color:C.white,borderRadius:7,padding:"5px 12px",fontSize:11,fontWeight:"bold",textDecoration:"none"}},"▶ Video"),
          isTrainer&&h(Btn,{onClick:()=>{setPrescEdit(curPresc);tog("presc");},color:C.amber,small:true},"✎ Rx")
        )
      )
    ),
    panel==="prog"&&h("div",{style:{marginTop:8,background:C.tealLight,border:`1px solid ${C.teal}33`,borderRadius:8,padding:10}},
      h("div",{style:{fontSize:10,fontWeight:"bold",color:C.teal2,marginBottom:6}},"NEXT PROGRESSIONS"),
      progs.map((p,i)=>h("div",{key:i,onClick:()=>{setCurName(p);LS.set(exK(cid,"swap",di,si,ei),p);setPanel(null);},style:{padding:"7px 10px",borderRadius:5,cursor:"pointer",fontSize:13,color:C.navy,background:i%2===0?C.white:C.tealLight,marginBottom:2}},`${i+1}. ${p}`))
    ),
    panel==="swap"&&h("div",{style:{marginTop:8,background:C.grayLight,border:`1px solid ${C.grayBorder}`,borderRadius:8,padding:10}},
      h("div",{style:{fontSize:10,fontWeight:"bold",color:C.navy,marginBottom:6}},"SWAP — SEARCH LIBRARY"),
      h(Inp,{value:search,onChange:setSearch,placeholder:"Type to search 500+ exercises..."}),
      results.length>0&&h("div",{style:{maxHeight:200,overflowY:"auto",marginTop:6}},
        results.map((e,i)=>h("div",{key:i,onClick:()=>{setCurName(e.name);LS.set(exK(cid,"swap",di,si,ei),e.name);setSearch("");setPanel(null);},style:{padding:"6px 10px",cursor:"pointer",fontSize:12,color:C.navy,background:i%2===0?C.white:C.grayLight,display:"flex",justifyContent:"space-between",alignItems:"center"}},h("span",null,e.name),h(Tag,{label:e.cat,color:C.teal})))
      ),
      search.length<=1&&h("div",{style:{color:C.gray,fontSize:11,padding:"4px 0"}},"Type at least 2 characters")
    ),
    panel==="presc"&&isTrainer&&h("div",{style:{marginTop:8,background:C.amberLight,border:`1px solid ${C.amber}33`,borderRadius:8,padding:10}},
      h("div",{style:{fontSize:10,fontWeight:"bold",color:C.amber,marginBottom:6}},"EDIT PRESCRIPTION"),
      h(Inp,{value:prescEdit,onChange:setPrescEdit,placeholder:"Sets x reps..."}),
      h(Btn,{onClick:()=>{setCurPresc(prescEdit);LS.set(exK(cid,"presc",di,si,ei),prescEdit);setPanel(null);},color:C.amber,small:true,st:{marginTop:8}},"Save")
    )
  );
}

function DayView({client,di,isTrainer}){
  const day=client.days[di];
  if(!day) return null;
  return h("div",null,
    h("div",{style:{background:C.navy,color:C.white,padding:"12px 16px",borderRadius:"8px 8px 0 0",marginBottom:2}},h("div",{style:{fontSize:12,fontWeight:"bold"}},day.title)),
    day.sections.map((sec,si)=>h(Card,{key:si},h(CardH,{t:sec.label,color:sec.color}),sec.exercises.map((ex,ei)=>h(ExCard,{key:ei,ex,cid:client.id,di,si,ei,isTrainer}))))
  );
}

function AssessmentForm({client,isTrainer,existing,onSave}){
  const blank={date:new Date().toISOString().slice(0,10),intake:{dob:"",height:"",weight:"",occupation:"",primaryComplaint:"",painHistory:"",painScale:"",painLocation:"",aggravating:"",relieving:"",surgicalHistory:"",medicalHistory:"",medications:"",activityBackground:""},postural:{head_position:"neutral",shoulder_position:"neutral",left_shoulder:"neutral",right_shoulder:"neutral",thoracic_curve:"normal",lumbar_curve:"normal",pelvic_tilt:"neutral",left_hip:"neutral",right_hip:"neutral",knee_alignment:"neutral",foot_position:"neutral",ankle_dorsiflexion:"normal",notes:""},ohsa:{signs:[],overactive:[],underactive:[],notes:""},slsq:{leftKnee:"neutral",rightKnee:"neutral",leftHip:"neutral",rightHip:"neutral",trunkLean:"none",armFall:"none",notes:""},muscleLength:{},strengthTests:{},gait:{footTurnout:"neutral",pelvicDrop:"none",trunkLean:"none",armSwing:"normal",notes:""},trainerNotes:""};
  const [form,setForm]=useState(existing||blank);
  const [sec,setSec]=useState("intake");
  const [saved,setSaved]=useState(false);
  const sp=(path,val)=>{const keys=path.split(".");setForm(prev=>{const next=JSON.parse(JSON.stringify(prev));let obj=next;for(let i=0;i<keys.length-1;i++) obj=obj[keys[i]];obj[keys[keys.length-1]]=val;return next;});};
  const togO=(type,key)=>{setForm(prev=>{const next=JSON.parse(JSON.stringify(prev));const arr=next.ohsa[type];const idx=arr.indexOf(key);if(idx>-1) arr.splice(idx,1);else arr.push(key);return next;});};
  const handleSave=()=>{onSave(form);setSaved(true);setTimeout(()=>setSaved(false),2000);};

  if(!isTrainer){
    if(!existing) return h("div",{style:{padding:32,textAlign:"center",color:C.gray}},h("div",{style:{fontSize:40,marginBottom:12}},"📋"),h("div",{style:{fontStyle:"italic"}},"Your assessment hasn't been completed yet. Your trainer will fill this in at your first appointment."));
    const sugg=genSugg(existing);
    return h("div",{style:{paddingBottom:24}},
      h(Card,null,h(CardH,{t:"YOUR ASSESSMENT — WHAT WE FOUND"}),h(CardB,null,
        h("div",{style:{fontSize:12,color:C.gray,marginBottom:12,fontStyle:"italic"}},`Assessment date: ${existing.date}`),
        existing.intake?.primaryComplaint&&h("div",{style:{marginBottom:12}},h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:12,marginBottom:4}},"Your Goal"),h("div",{style:{fontSize:13,color:C.navy}},existing.intake.primaryComplaint)),
        sugg.findings.length>0&&h("div",null,h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:12,marginBottom:8}},"WHAT WE FOUND IN YOUR BODY"),sugg.findings.map((f,i)=>h("div",{key:i,style:{background:C.grayLight,borderRadius:8,padding:"10px 12px",marginBottom:8,borderLeft:`3px solid ${C.teal}`}},h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:13,marginBottom:4}},f.label),h("div",{style:{fontSize:12,color:C.gray,lineHeight:1.6}},f.explain))))
      )),
      h(Card,null,h(CardH,{t:"WHY EACH EXERCISE IS IN YOUR PROGRAM",color:C.teal}),h(CardB,null,
        [["🔴 RELEASE",sugg.release,C.red,"These muscles are overworking and need to calm down first."],["🟡 LENGTHEN",sugg.stretch,C.amber,"These muscles are tight. We lengthen them so the correct ones can activate."],["🟢 ACTIVATE",sugg.activate,C.green,"These muscles are inhibited — not firing when they should be."],["🔵 INTEGRATE",sugg.integrate,C.teal,"We put it all together using the newly activated muscles."]].map(([title,items,color,explain])=>items.length>0&&h("div",{key:title,style:{marginBottom:14}},h("div",{style:{fontWeight:"bold",color,fontSize:12,marginBottom:3}},title),h("div",{style:{fontSize:11,color:C.gray,fontStyle:"italic",marginBottom:6}},explain),h("div",{style:{display:"flex",flexWrap:"wrap"}},items.map((e,i)=>h(Pill,{key:i,label:e,color})))))
      )),
      existing.trainerNotes&&h(Card,null,h(CardH,{t:"TRAINER NOTES",color:C.purple}),h(CardB,null,h("div",{style:{fontSize:13,color:C.navy,lineHeight:1.7}},existing.trainerNotes)))
    );
  }

  const sugg=genSugg(form);
  const CI=({checked,onClick,label,color})=>h("div",{onClick,style:{display:"flex",alignItems:"center",gap:8,padding:"5px 8px",borderRadius:5,cursor:"pointer",background:checked?color+"18":C.white,marginBottom:4,border:`1px solid ${checked?color+"55":C.grayBorder}`}},h("div",{style:{width:14,height:14,borderRadius:3,border:`2px solid ${checked?color:C.grayBorder}`,background:checked?color:C.white,flexShrink:0}}),h("span",{style:{fontSize:12,color:C.navy}},label));
  const navTabs=[["intake","Intake"],["postural","Postural"],["ohsa","OHSA"],["slsq","SLSQ"],["muscle","Muscle"],["strength","Strength"],["gait","Gait"],["notes","Notes"]];

  return h("div",{style:{paddingBottom:24}},
    h("div",{className:"sc",style:{display:"flex",background:C.white,borderBottom:`1px solid ${C.grayBorder}`,borderRadius:8,boxShadow:"0 1px 4px rgba(0,0,0,0.06)",marginBottom:12}},
      navTabs.map(([id,label])=>h("button",{key:id,onClick:()=>setSec(id),style:{padding:"9px 13px",border:"none",borderBottom:sec===id?`3px solid ${C.teal}`:"3px solid transparent",background:C.white,fontSize:11,fontWeight:sec===id?"bold":"normal",color:sec===id?C.teal:C.gray,cursor:"pointer",flexShrink:0,whiteSpace:"nowrap"}},label))
    ),
    sec==="intake"&&h(Card,null,h(CardH,{t:"CLIENT INTAKE"}),h(CardB,null,
      h(G2,null,h(Fld,{label:"DATE OF BIRTH"},h(Inp,{value:form.intake.dob,onChange:v=>sp("intake.dob",v),placeholder:"MM/DD/YYYY"})),h(Fld,{label:"ASSESSMENT DATE"},h(Inp,{value:form.date,onChange:v=>sp("date",v),type:"date"}))),
      h(G2,null,h(Fld,{label:"HEIGHT"},h(Inp,{value:form.intake.height,onChange:v=>sp("intake.height",v),placeholder:'5\'8"'})),h(Fld,{label:"WEIGHT"},h(Inp,{value:form.intake.weight,onChange:v=>sp("intake.weight",v),placeholder:"165 lbs"}))),
      h(Fld,{label:"OCCUPATION"},h(Inp,{value:form.intake.occupation,onChange:v=>sp("intake.occupation",v),placeholder:"Nurse, Teacher, Construction..."})),
      h(Fld,{label:"PRIMARY COMPLAINT"},h(TA,{value:form.intake.primaryComplaint,onChange:v=>sp("intake.primaryComplaint",v),placeholder:"What brings them in? What do they want to achieve?",rows:3})),
      h(G2,null,h(Fld,{label:"PAIN LOCATION"},h(Inp,{value:form.intake.painLocation,onChange:v=>sp("intake.painLocation",v),placeholder:"e.g. Left lower back"})),h(Fld,{label:"PAIN SCALE (0–10)"},h(Inp,{value:form.intake.painScale,onChange:v=>sp("intake.painScale",v),placeholder:"0–10"}))),
      h(G2,null,h(Fld,{label:"AGGRAVATING"},h(Inp,{value:form.intake.aggravating,onChange:v=>sp("intake.aggravating",v),placeholder:"What makes it worse?"})),h(Fld,{label:"RELIEVING"},h(Inp,{value:form.intake.relieving,onChange:v=>sp("intake.relieving",v),placeholder:"What makes it better?"}))),
      h(Fld,{label:"PAIN HISTORY"},h(TA,{value:form.intake.painHistory,onChange:v=>sp("intake.painHistory",v),placeholder:"Onset, duration, previous treatment...",rows:2})),
      h(Fld,{label:"SURGICAL / INJURY HISTORY"},h(TA,{value:form.intake.surgicalHistory,onChange:v=>sp("intake.surgicalHistory",v),placeholder:"Surgeries, fractures, significant injuries...",rows:2})),
      h(Fld,{label:"MEDICAL HISTORY / CONDITIONS"},h(TA,{value:form.intake.medicalHistory,onChange:v=>sp("intake.medicalHistory",v),placeholder:"Diagnoses, chronic conditions...",rows:2})),
      h(Fld,{label:"MEDICATIONS"},h(Inp,{value:form.intake.medications,onChange:v=>sp("intake.medications",v),placeholder:"List relevant medications"})),
      h(Fld,{label:"ACTIVITY BACKGROUND",mb:0},h(TA,{value:form.intake.activityBackground,onChange:v=>sp("intake.activityBackground",v),placeholder:"Previous training, sports, deconditioning period...",rows:2}))
    )),
    sec==="postural"&&h(Card,null,h(CardH,{t:"POSTURAL SCREEN"}),h(CardB,null,
      h(G2,null,
        h(Fld,{label:"HEAD POSITION"},h(Sel,{value:form.postural.head_position,onChange:v=>sp("postural.head_position",v),options:[["neutral","Neutral"],["forward","Forward Head"],["retracted","Retracted"]]})),
        h(Fld,{label:"SHOULDER POSITION"},h(Sel,{value:form.postural.shoulder_position,onChange:v=>sp("postural.shoulder_position",v),options:[["neutral","Neutral"],["rounded","Rounded/Protracted"],["retracted","Retracted"]]})),
        h(Fld,{label:"LEFT SHOULDER HEIGHT"},h(Sel,{value:form.postural.left_shoulder,onChange:v=>sp("postural.left_shoulder",v),options:[["neutral","Normal"],["elevated","Elevated"],["depressed","Depressed"]]})),
        h(Fld,{label:"RIGHT SHOULDER HEIGHT"},h(Sel,{value:form.postural.right_shoulder,onChange:v=>sp("postural.right_shoulder",v),options:[["neutral","Normal"],["elevated","Elevated"],["depressed","Depressed"]]})),
        h(Fld,{label:"THORACIC CURVE"},h(Sel,{value:form.postural.thoracic_curve,onChange:v=>sp("postural.thoracic_curve",v),options:[["normal","Normal"],["kyphotic","Kyphotic (hunched)"],["flat","Flat"]]})),
        h(Fld,{label:"LUMBAR CURVE"},h(Sel,{value:form.postural.lumbar_curve,onChange:v=>sp("postural.lumbar_curve",v),options:[["normal","Normal"],["lordotic","Lordotic (arch)"],["flat","Flat/Flexed"]]})),
        h(Fld,{label:"PELVIC TILT"},h(Sel,{value:form.postural.pelvic_tilt,onChange:v=>sp("postural.pelvic_tilt",v),options:[["neutral","Neutral"],["anterior_bilateral","Anterior — Bilateral"],["anterior_left","Anterior — Left Dominant"],["anterior_right","Anterior — Right Dominant"],["posterior","Posterior"]]})),
        h(Fld,{label:"LEFT HIP HEIGHT"},h(Sel,{value:form.postural.left_hip,onChange:v=>sp("postural.left_hip",v),options:[["neutral","Normal"],["elevated","Elevated (hip hike)"],["depressed","Depressed"]]})),
        h(Fld,{label:"RIGHT HIP HEIGHT"},h(Sel,{value:form.postural.right_hip,onChange:v=>sp("postural.right_hip",v),options:[["neutral","Normal"],["elevated","Elevated (hip hike)"],["depressed","Depressed"]]})),
        h(Fld,{label:"KNEE ALIGNMENT"},h(Sel,{value:form.postural.knee_alignment,onChange:v=>sp("postural.knee_alignment",v),options:[["neutral","Neutral"],["valgus_bilateral","Valgus — Bilateral"],["valgus_left","Valgus — Left"],["valgus_right","Valgus — Right"],["varus","Varus"]]})),
        h(Fld,{label:"FOOT POSITION"},h(Sel,{value:form.postural.foot_position,onChange:v=>sp("postural.foot_position",v),options:[["neutral","Neutral"],["pronated_bilateral","Pronated — Bilateral"],["pronated_left","Pronated — Left"],["pronated_right","Pronated — Right"],["supinated","Supinated"],["turnout_bilateral","Turned Out — Bilateral"],["turnout_left","Turned Out — Left"],["turnout_right","Turned Out — Right"],["turnin_bilateral","Turned In — Bilateral"],["turnin_left","Turned In — Left"],["turnin_right","Turned In — Right"]]})),
        h(Fld,{label:"ANKLE DORSIFLEXION"},h(Sel,{value:form.postural.ankle_dorsiflexion,onChange:v=>sp("postural.ankle_dorsiflexion",v),options:[["normal","Normal"],["limited","Limited"],["hypermobile","Hypermobile"]]}))
      ),
      h(Fld,{label:"POSTURAL NOTES",mb:0},h(TA,{value:form.postural.notes,onChange:v=>sp("postural.notes",v),placeholder:"Scoliosis, asymmetries, significant observations...",rows:2}))
    )),
    sec==="ohsa"&&h(Card,null,h(CardH,{t:"OVERHEAD SQUAT — SIGNS OF DYSFUNCTION"}),h(CardB,{p:10},h("div",{style:{fontSize:11,color:C.gray,fontStyle:"italic",marginBottom:10}},"Step 1: Check signs observed. Step 2: Check overactive/underactive muscles."),OHSA_R.map((region,ri)=>h("div",{key:ri,style:{marginBottom:14,background:C.grayLight,borderRadius:8,padding:10}},h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:12,marginBottom:8}},region.region.toUpperCase()),region.signs&&region.signs.length>0&&h("div",{style:{marginBottom:8}},h("div",{style:{fontSize:10,fontWeight:"bold",color:C.purple,marginBottom:5}},"SIGNS OBSERVED"),h("div",{style:{display:"flex",flexWrap:"wrap",gap:5}},region.signs.map(([key,label])=>h("div",{key,onClick:()=>{setForm(prev=>{const next=JSON.parse(JSON.stringify(prev));const arr=next.ohsa.signs||[];const idx=arr.indexOf(key);if(idx>-1)arr.splice(idx,1);else arr.push(key);next.ohsa.signs=arr;return next;});},style:{padding:"4px 10px",borderRadius:12,cursor:"pointer",fontSize:11,border:"1px solid "+((form.ohsa.signs||[]).includes(key)?C.purple:C.grayBorder),background:(form.ohsa.signs||[]).includes(key)?C.purple+"22":C.white,color:(form.ohsa.signs||[]).includes(key)?C.purple:C.navy}},label)))),h(G2,null,h("div",null,h("div",{style:{fontSize:10,fontWeight:"bold",color:C.red,marginBottom:5}},"OVERACTIVE"),region.oa.map(([key,label])=>h(CI,{key,checked:form.ohsa.overactive.includes(key),onClick:()=>togO("overactive",key),label,color:C.red}))),h("div",null,h("div",{style:{fontSize:10,fontWeight:"bold",color:C.green,marginBottom:5}},"UNDERACTIVE"),region.ua.map(([key,label])=>h(CI,{key,checked:form.ohsa.underactive.includes(key),onClick:()=>togO("underactive",key),label,color:C.green})))))),h(Fld,{label:"OHSA NOTES",mb:0},h(TA,{value:form.ohsa.notes,onChange:v=>sp("ohsa.notes",v),placeholder:"Compensation patterns, squat depth...",rows:2})))),
    sec==="slsq"&&h(Card,null,h(CardH,{t:"SINGLE LEG SQUAT ASSESSMENT"}),h(CardB,null,
      h(G2,null,
        h(Fld,{label:"LEFT KNEE"},h(Sel,{value:form.slsq.leftKnee,onChange:v=>sp("slsq.leftKnee",v),options:[["neutral","Neutral"],["valgus","Valgus (in)"],["varus","Varus (out)"]]})),
        h(Fld,{label:"RIGHT KNEE"},h(Sel,{value:form.slsq.rightKnee,onChange:v=>sp("slsq.rightKnee",v),options:[["neutral","Neutral"],["valgus","Valgus (in)"],["varus","Varus (out)"]]})),
        h(Fld,{label:"LEFT HIP"},h(Sel,{value:form.slsq.leftHip,onChange:v=>sp("slsq.leftHip",v),options:[["neutral","Neutral"],["drops","Hip Drop"],["hikes","Hip Hike"]]})),
        h(Fld,{label:"RIGHT HIP"},h(Sel,{value:form.slsq.rightHip,onChange:v=>sp("slsq.rightHip",v),options:[["neutral","Neutral"],["drops","Hip Drop"],["hikes","Hip Hike"]]})),
        h(Fld,{label:"TRUNK LEAN"},h(Sel,{value:form.slsq.trunkLean,onChange:v=>sp("slsq.trunkLean",v),options:[["none","None"],["left","Left"],["right","Right"],["forward","Forward"]]})),
        h(Fld,{label:"ARM FALL"},h(Sel,{value:form.slsq.armFall,onChange:v=>sp("slsq.armFall",v),options:[["none","None/Stays Up"],["left","Falls Left"],["right","Falls Right"],["bilateral","Both Fall"]]}))
      ),
      h(Fld,{label:"SLSQ NOTES",mb:0},h(TA,{value:form.slsq.notes,onChange:v=>sp("slsq.notes",v),placeholder:"Balance, depth, compensations...",rows:2}))
    )),
    sec==="muscle"&&h(Card,null,h(CardH,{t:"MUSCLE LENGTH TESTS"}),h(CardB,{p:10},h("div",{style:{fontSize:11,color:C.gray,fontStyle:"italic",marginBottom:10}},"Tap result for each test. Bilateral tests record left and right separately."),ML_T.map(({k,l,bi})=>h("div",{key:k,style:{marginBottom:10,paddingBottom:10,borderBottom:"1px solid "+C.grayBorder}},h("div",{style:{fontSize:13,color:C.navy,fontWeight:"bold",marginBottom:6}},l),bi?h(G2,null,["L","R"].map(side=>h("div",{key:side},h("div",{style:{fontSize:10,color:C.gray,fontWeight:"bold",marginBottom:4}},side==="L"?"LEFT":"RIGHT"),h("div",{style:{display:"flex",gap:4,flexWrap:"wrap"}},[["normal","Normal",C.green],["limited","Limited",C.amber],["pain","Pain",C.red]].map(([v,lb,col])=>h("div",{key:v,onClick:()=>sp("muscleLength."+k+"_"+side.toLowerCase(),form.muscleLength[k+"_"+side.toLowerCase()]===v?"":v),style:{padding:"3px 9px",borderRadius:10,cursor:"pointer",fontSize:11,border:"1px solid "+(form.muscleLength[k+"_"+side.toLowerCase()]===v?col:C.grayBorder),background:form.muscleLength[k+"_"+side.toLowerCase()]===v?col+"22":C.white,color:form.muscleLength[k+"_"+side.toLowerCase()]===v?col:C.navy}},lb)))))):h("div",{style:{display:"flex",gap:4,flexWrap:"wrap"}},[["normal","Normal",C.green],["limited","Limited",C.amber],["pain","Pain",C.red]].map(([v,lb,col])=>h("div",{key:v,onClick:()=>sp("muscleLength."+k,form.muscleLength[k]===v?"":v),style:{padding:"3px 9px",borderRadius:10,cursor:"pointer",fontSize:11,border:"1px solid "+(form.muscleLength[k]===v?col:C.grayBorder),background:form.muscleLength[k]===v?col+"22":C.white,color:form.muscleLength[k]===v?col:C.navy}},lb))))))),
    sec==="strength"&&h(Card,null,h(CardH,{t:"MUSCLE STRENGTH TESTS"}),h(CardB,{p:10},h("div",{style:{fontSize:11,color:C.gray,fontStyle:"italic",marginBottom:10}},"Tap result for each muscle. Bilateral muscles record left and right separately."),ST_T.map(({k,l,bi})=>h("div",{key:k,style:{marginBottom:10,paddingBottom:10,borderBottom:"1px solid "+C.grayBorder}},h("div",{style:{fontSize:13,color:C.navy,fontWeight:"bold",marginBottom:6}},l),bi?h(G2,null,["L","R"].map(side=>h("div",{key:side},h("div",{style:{fontSize:10,color:C.gray,fontWeight:"bold",marginBottom:4}},side==="L"?"LEFT":"RIGHT"),h("div",{style:{display:"flex",gap:4,flexWrap:"wrap"}},[["normal","Normal",C.green],["weak","Weak",C.amber],["inhibited","Inhibited",C.red]].map(([v,lb,col])=>h("div",{key:v,onClick:()=>sp("strengthTests."+k+"_"+side.toLowerCase(),form.strengthTests[k+"_"+side.toLowerCase()]===v?"":v),style:{padding:"3px 9px",borderRadius:10,cursor:"pointer",fontSize:11,border:"1px solid "+(form.strengthTests[k+"_"+side.toLowerCase()]===v?col:C.grayBorder),background:form.strengthTests[k+"_"+side.toLowerCase()]===v?col+"22":C.white,color:form.strengthTests[k+"_"+side.toLowerCase()]===v?col:C.navy}},lb)))))):h("div",{style:{display:"flex",gap:4,flexWrap:"wrap"}},[["normal","Normal",C.green],["weak","Weak",C.amber],["inhibited","Inhibited",C.red]].map(([v,lb,col])=>h("div",{key:v,onClick:()=>sp("strengthTests."+k,form.strengthTests[k]===v?"":v),style:{padding:"3px 9px",borderRadius:10,cursor:"pointer",fontSize:11,border:"1px solid "+(form.strengthTests[k]===v?col:C.grayBorder),background:form.strengthTests[k]===v?col+"22":C.white,color:form.strengthTests[k]===v?col:C.navy}},lb))))))),
    sec==="gait"&&h(Card,null,h(CardH,{t:"GAIT SCREEN"}),h(CardB,null,
      h(G2,null,
        h(Fld,{label:"FOOT TURNOUT"},h(Sel,{value:form.gait.footTurnout,onChange:v=>sp("gait.footTurnout",v),options:[["neutral","Neutral"],["left_out","Left Foot Out"],["right_out","Right Foot Out"],["both_out","Both Feet Out"]]})),
        h(Fld,{label:"PELVIC DROP"},h(Sel,{value:form.gait.pelvicDrop,onChange:v=>sp("gait.pelvicDrop",v),options:[["none","None"],["left","Left Drop"],["right","Right Drop"]]})),
        h(Fld,{label:"TRUNK LEAN"},h(Sel,{value:form.gait.trunkLean,onChange:v=>sp("gait.trunkLean",v),options:[["none","None"],["left","Left"],["right","Right"],["forward","Forward"]]})),
        h(Fld,{label:"ARM SWING"},h(Sel,{value:form.gait.armSwing,onChange:v=>sp("gait.armSwing",v),options:[["normal","Normal"],["reduced","Reduced"],["asymmetrical","Asymmetrical"],["absent","Absent"]]}))
      ),
      h(Fld,{label:"GAIT NOTES",mb:0},h(TA,{value:form.gait.notes,onChange:v=>sp("gait.notes",v),placeholder:"Step length, cadence, heel strike, compensations...",rows:2}))
    )),
    sec==="notes"&&h(Card,null,h(CardH,{t:"TRAINER NOTES & CORRECTIVE PREVIEW"}),h(CardB,null,
      h(Fld,{label:"TRAINER NOTES (visible to client)"},h(TA,{value:form.trainerNotes,onChange:v=>sp("trainerNotes",v),placeholder:"Session observations, priorities, next steps...",rows:5})),
      h("div",{style:{marginTop:4,padding:12,background:C.tealLight,borderRadius:8}},
        h("div",{style:{fontWeight:"bold",color:C.teal2,fontSize:12,marginBottom:8}},"⚡ AUTO-CORRECTIVE PREVIEW"),
        sugg.findings.length===0?h("div",{style:{color:C.gray,fontSize:12,fontStyle:"italic"}},"Fill in postural screen and OHSA to see suggestions."):
        h("div",null,
          h("div",{style:{display:"flex",flexWrap:"wrap",marginBottom:8}},sugg.findings.map((f,i)=>h(Pill,{key:i,label:f.label,color:C.teal}))),
          h("div",{style:{fontSize:11,color:C.gray}},h("span",{style:{fontWeight:"bold",color:C.red}},"Release: "),sugg.release.slice(0,3).join(", ")+(sugg.release.length>3?` +${sugg.release.length-3} more`:"")),
          h("div",{style:{fontSize:11,color:C.gray,marginTop:2}},h("span",{style:{fontWeight:"bold",color:C.amber}},"Stretch: "),sugg.stretch.slice(0,3).join(", ")+(sugg.stretch.length>3?` +${sugg.stretch.length-3} more`:"")),
          h("div",{style:{fontSize:11,color:C.gray,marginTop:2}},h("span",{style:{fontWeight:"bold",color:C.green}},"Activate: "),sugg.activate.slice(0,3).join(", ")+(sugg.activate.length>3?` +${sugg.activate.length-3} more`:""))
        )
      )
    )),
    h(Btn,{onClick:handleSave,color:saved?C.green:C.teal,full:true,st:{marginTop:8}},saved?"✓ Saved!":"Save Assessment")
  );
}

function NutritionView({client}){
  const dM=client.nutrition?.macros||{protein:{pct:32,grams:160},carbs:{pct:43,grams:215},fat:{pct:25,grams:56}};
  const dC=client.nutrition?.calories||2000;
  const [calories,setCalories]=useState(()=>LS.get(`tbf_cals_${client.id}`,dC));
  const [macros,setMacros]=useState(()=>LS.get(`tbf_macros_${client.id}`,dM));
  const [mS,setMS]=useState({});const [mW,setMW]=useState({});
  const [showCalc,setShowCalc]=useState(false);
  const [showConv,setShowConv]=useState(false);
  const [conv,setConv]=useState({lbs:"",kg:"",feet:"",inches:"",cm:""});
  const [cf,setCf]=useState({weight:"",height:"",age:"",sex:"male",activity:"moderate",goal:"maintenance"});
  const [cr,setCr]=useState(null);

  const calcConv=(field,val)=>{
    const v=parseFloat(val)||0;
    if(field==="lbs") setConv(p=>({...p,lbs:val,kg:(v*0.453592).toFixed(1)}));
    else if(field==="kg") setConv(p=>({...p,kg:val,lbs:(v*2.20462).toFixed(1)}));
    else if(field==="feet"||field==="inches"){
      const f=field==="feet"?v:parseFloat(conv.feet)||0;
      const i=field==="inches"?v:parseFloat(conv.inches)||0;
      const totalCm=((f*12)+i)*2.54;
      setConv(p=>({...p,[field]:val,cm:totalCm.toFixed(1)}));
    } else if(field==="cm"){
      const totalIn=v/2.54;
      const ft=Math.floor(totalIn/12);
      const ins=(totalIn%12).toFixed(1);
      setConv(p=>({...p,cm:val,feet:ft,inches:ins}));
    }
  };

  const adj=(type,pct)=>{const oth=["protein","carbs","fat"].filter(t=>t!==type);const rem=100-pct;const total=oth.reduce((s,t)=>s+macros[t].pct,0);const newM={...macros,[type]:{pct,grams:Math.round(calories*(pct/100)/(type==="fat"?9:4))}};oth.forEach(t=>{const np=total===0?Math.round(rem/2):Math.round(macros[t].pct*(rem/total));newM[t]={pct:np,grams:Math.round(calories*(np/100)/(t==="fat"?9:4))};});setMacros(newM);LS.set(`tbf_macros_${client.id}`,newM);};

  const calc=()=>{
    const w=parseFloat(cf.weight),ht=parseFloat(cf.height),a=parseFloat(cf.age);
    if(!w||!ht||!a) return;
    const bmr=cf.sex==="male"?(10*w)+(6.25*ht)-(5*a)+5:(10*w)+(6.25*ht)-(5*a)-161;
    const actF={sedentary:1.2,light:1.375,moderate:1.55,active:1.725,very_active:1.9}[cf.activity]||1.55;
    const tdee=Math.round(bmr*actF);
    const goalCals=cf.goal==="loss"?tdee-500:cf.goal==="gain"?tdee+300:tdee;
    const protG=Math.round(w*2.2);
    const fatG=Math.round(goalCals*0.25/9);
    const carbG=Math.round((goalCals-(protG*4)-(fatG*9))/4);
    const protPct=Math.round((protG*4/goalCals)*100);
    const fatPct=Math.round((fatG*9/goalCals)*100);
    const carbPct=100-protPct-fatPct;
    setCr({calories:goalCals,protein:{pct:protPct,grams:protG},carbs:{pct:carbPct,grams:carbG},fat:{pct:fatPct,grams:fatG},tdee});
  };

  const applyCalc=()=>{if(!cr) return;setCalories(cr.calories);setMacros(cr);LS.set(`tbf_cals_${client.id}`,cr.calories);LS.set(`tbf_macros_${client.id}`,cr);};

  // Auto meal plan generator
  const genMealPlan=()=>{
    const protG=macros.protein.grams;
    const carbG=macros.carbs.grams;
    const fatG=macros.fat.grams;
    return [
      {label:"Meal 1 — Morning",foods:["Egg whites","Eggs","Spinach","Avocado"],note:`~${Math.round(protG*0.25)}g protein | ${Math.round(fatG*0.35)}g fat | Low carb morning window`},
      {label:"Meal 2 — Mid Morning",foods:["Greek yogurt","Blueberries","Walnuts"],note:`~${Math.round(protG*0.15)}g protein | Light snack`},
      {label:"Meal 3 — Pre-Workout",foods:["Chicken breast","Jasmine rice","Banana"],note:`~${Math.round(protG*0.25)}g protein | ${Math.round(carbG*0.35)}g carbs | Fuel session`},
      {label:"Meal 4 — Post-Workout",foods:["Salmon","Sweet potato","Broccoli"],note:`~${Math.round(protG*0.25)}g protein | ${Math.round(carbG*0.35)}g carbs | Recovery window`},
      {label:"Meal 5 — Evening",foods:["Lean ground beef","Mixed veggies","Olive oil"],note:`~${Math.round(protG*0.20)}g protein | ${Math.round(fatG*0.35)}g fat | Low carb evening`},
    ];
  };

  const MB=({label,pct,grams,color,type})=>h("div",{style:{marginBottom:16}},
    h("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4}},
      h("span",{style:{fontWeight:"bold",color,fontSize:13}},label),
      h("span",{style:{color:C.navy,fontWeight:"bold",fontSize:13}},`${pct}% — ${grams}g`)
    ),
    h("input",{type:"range",min:5,max:70,value:pct,onChange:e=>adj(type,parseInt(e.target.value)),style:{accentColor:color}})
  );

  const meals=mW[0]?Object.values(mW):genMealPlan();

  return h("div",{style:{paddingBottom:24}},
    // Converter
    h(Btn,{onClick:()=>setShowConv(!showConv),color:showConv?C.gray:C.navy,full:true,st:{marginBottom:8}},"⇄ Unit Converter (lbs ↔ kg | ft+in ↔ cm)"),
    showConv&&h(Card,null,h(CardH,{t:"UNIT CONVERTER"}),h(CardB,null,
      h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:12,marginBottom:8}},"Weight"),
      h(G2,null,
        h(Fld,{label:"POUNDS (lbs)"},h(Inp,{value:conv.lbs,onChange:v=>calcConv("lbs",v),placeholder:"e.g. 185"})),
        h(Fld,{label:"KILOGRAMS (kg)"},h(Inp,{value:conv.kg,onChange:v=>calcConv("kg",v),placeholder:"e.g. 84"}))
      ),
      h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:12,marginBottom:8,marginTop:4}},"Height"),
      h(G2,null,
        h("div",null,
          h(G2,null,
            h(Fld,{label:"FEET"},h(Inp,{value:conv.feet,onChange:v=>calcConv("feet",v),placeholder:"5"})),
            h(Fld,{label:"INCHES"},h(Inp,{value:conv.inches,onChange:v=>calcConv("inches",v),placeholder:"10"}))
          )
        ),
        h(Fld,{label:"CENTIMETERS (cm)"},h(Inp,{value:conv.cm,onChange:v=>calcConv("cm",v),placeholder:"e.g. 178"}))
      )
    )),
    // Calculator
    h(Btn,{onClick:()=>setShowCalc(!showCalc),color:showCalc?C.gray:C.teal,full:true,st:{marginBottom:8}},"📊 Calorie & Macro Calculator"),
    showCalc&&h(Card,null,h(CardH,{t:"CALORIE & MACRO CALCULATOR"}),h(CardB,null,
      h("div",{style:{fontSize:11,color:C.gray,fontStyle:"italic",marginBottom:10}},"Enter weight in kg, height in cm. Use converter above if needed."),
      h(G2,null,
        h(Fld,{label:"WEIGHT (kg)"},h(Inp,{value:cf.weight,onChange:v=>setCf(p=>({...p,weight:v})),placeholder:"e.g. 84"})),
        h(Fld,{label:"HEIGHT (cm)"},h(Inp,{value:cf.height,onChange:v=>setCf(p=>({...p,height:v})),placeholder:"e.g. 178"}))
      ),
      h(G2,null,
        h(Fld,{label:"AGE"},h(Inp,{value:cf.age,onChange:v=>setCf(p=>({...p,age:v})),placeholder:"e.g. 35"})),
        h(Fld,{label:"SEX"},h(Sel,{value:cf.sex,onChange:v=>setCf(p=>({...p,sex:v})),options:[["male","Male"],["female","Female"]]}))
      ),
      h(Fld,{label:"ACTIVITY LEVEL"},h(Sel,{value:cf.activity,onChange:v=>setCf(p=>({...p,activity:v})),options:[["sedentary","Sedentary (desk job, no exercise)"],["light","Light (1-3x/week)"],["moderate","Moderate (3-5x/week)"],["active","Active (6-7x/week)"],["very_active","Very Active (2x/day)"]]})),
      h(Fld,{label:"GOAL"},h("div",{style:{display:"flex",gap:8}},
        [["loss","Weight Loss",C.red],["maintenance","Maintenance",C.teal],["gain","Muscle Gain",C.green]].map(([v,lb,col])=>
          h("div",{key:v,onClick:()=>setCf(p=>({...p,goal:v})),style:{flex:1,textAlign:"center",padding:"8px 4px",borderRadius:8,cursor:"pointer",border:`2px solid ${cf.goal===v?col:C.grayBorder}`,background:cf.goal===v?col+"18":C.white}},
            h("div",{style:{fontWeight:"bold",color:cf.goal===v?col:C.gray,fontSize:11}},lb)
          )
        )
      )),
      h(Btn,{onClick:calc,color:C.teal,full:true},"Calculate Targets"),
      cr&&h("div",{style:{marginTop:14,padding:14,background:C.tealLight,borderRadius:8}},
        h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:15,marginBottom:4,textAlign:"center"}},`${cr.calories.toLocaleString()} Calories / day`),
        h("div",{style:{fontSize:12,color:C.gray,textAlign:"center",marginBottom:10}},`TDEE: ${cr.tdee.toLocaleString()} cal`),
        h("div",{style:{display:"flex",gap:8,marginBottom:12}},
          [["Protein",cr.protein.grams+"g",C.teal],["Carbs",cr.carbs.grams+"g",C.amber],["Fat",cr.fat.grams+"g",C.red]].map(([lb,v,col])=>
            h("div",{key:lb,style:{flex:1,textAlign:"center",background:col+"18",borderRadius:8,padding:"8px 4px"}},
              h("div",{style:{fontSize:18,fontWeight:"bold",color:col}},v),
              h("div",{style:{fontSize:10,color:C.gray}},lb)
            )
          )
        ),
        h(Btn,{onClick:applyCalc,color:C.navy,full:true},"Apply These Targets")
      )
    )),
    // Macro targets
    h(Card,null,h(CardH,{t:`DAILY TARGET — ${calories.toLocaleString()} CAL`}),h(CardB,null,
      h(MB,{label:"Protein",pct:macros.protein.pct,grams:macros.protein.grams,color:C.teal,type:"protein"}),
      h(MB,{label:"Carbohydrates",pct:macros.carbs.pct,grams:macros.carbs.grams,color:C.amber,type:"carbs"}),
      h(MB,{label:"Fat",pct:macros.fat.pct,grams:macros.fat.grams,color:C.red,type:"fat"}),
      h("div",{style:{fontSize:10,color:C.gray,textAlign:"center",fontStyle:"italic"}},"Drag sliders to adjust macro split")
    )),
    // Auto meal plan
    h(Card,null,h(CardH,{t:"MEAL PLAN",color:C.teal}),h(CardB,null,
      h("div",{style:{fontSize:11,color:C.gray,fontStyle:"italic",marginBottom:12}},"Auto-generated from your macro targets. Tap any food to swap it."),
      genMealPlan().map((meal,mi)=>{
        const foods=mW[mi]||meal.foods;
        const search=mS[mi]||"";
        const results=search.length>1?ALL_FOODS.filter(f=>f.name.toLowerCase().includes(search.toLowerCase())).slice(0,8):[];
        return h("div",{key:mi,style:{marginBottom:14,background:C.grayLight,borderRadius:8,padding:10}},
          h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:12,marginBottom:2}},meal.label),
          h("div",{style:{fontSize:11,color:C.teal2,marginBottom:8,fontStyle:"italic"}},meal.note),
          h("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:8}},
            foods.map((food,fi)=>h("div",{key:fi,style:{background:C.white,border:`1px solid ${C.grayBorder}`,borderRadius:6,padding:"3px 10px",fontSize:12,color:C.navy,cursor:"pointer"},
              onClick:()=>setMS(p=>({...p,[mi]:p[mi]===food?"":food}))},food))
          ),
          h(Inp,{value:search,onChange:v=>setMS(p=>({...p,[mi]:v})),placeholder:"Swap a food — type to search...",st:{fontSize:12}}),
          results.length>0&&h("div",{style:{background:C.white,border:`1px solid ${C.grayBorder}`,borderRadius:6,marginTop:4,maxHeight:140,overflowY:"auto"}},
            results.map((f,i)=>h("div",{key:i,onClick:()=>{const nf=[...foods];const idx=nf.indexOf(search);if(idx>-1)nf[idx]=f.name;else nf.push(f.name);setMW(p=>({...p,[mi]:nf}));setMS(p=>({...p,[mi]:""}));},style:{padding:"6px 10px",cursor:"pointer",fontSize:12,color:C.navy,display:"flex",justifyContent:"space-between",borderBottom:`1px solid ${C.grayBorder}`}},
              h("span",null,f.name),h(Tag,{label:f.cat,color:C.teal})
            ))
          )
        );
      })
    )),
    client.nutrition?.supplements&&h(Card,null,h(CardH,{t:"SUPPLEMENT TIMING",color:C.teal}),h(CardB,null,
      client.nutrition.supplements.map((s,i)=>h("div",{key:i,style:{marginBottom:i<client.nutrition.supplements.length-1?12:0}},
        h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:12,marginBottom:4}},s.timing),
        h("div",{style:{display:"flex",flexWrap:"wrap"}},s.items.map((item,j)=>h(Pill,{key:j,label:item})))
      ))
    ))
  );
}

function PainLog({client}){
  const [logs,setLogs]=useState(()=>LS.get(`tbf_pain_${client.id}`,[]));
  const [score,setScore]=useState(5);const [loc,setLoc]=useState("");const [notes,setNotes]=useState("");
  const submit=()=>{const e={date:new Date().toISOString().slice(0,10),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),score,location:loc,notes};const u=[e,...logs].slice(0,30);setLogs(u);LS.set(`tbf_pain_${client.id}`,u);setLoc("");setNotes("");setScore(5);};
  const sc=s=>s<=3?C.green:s<=6?C.amber:C.red;
  return h("div",{style:{paddingBottom:24}},
    h(Card,null,h(CardH,{t:"LOG TODAY'S FEEDBACK"}),h(CardB,null,
      h("div",{style:{marginBottom:14}},h(Lbl,{t:`PAIN / DISCOMFORT LEVEL: ${score}/10`}),h("input",{type:"range",min:0,max:10,value:score,onChange:e=>setScore(Number(e.target.value)),style:{width:"100%",accentColor:sc(score)}}),h("div",{style:{display:"flex",justifyContent:"space-between",fontSize:10,color:C.gray,marginTop:2}},h("span",null,"0 — None"),h("span",null,"5 — Moderate"),h("span",null,"10 — Severe"))),
      h(Fld,{label:"LOCATION (optional)"},h(Inp,{value:loc,onChange:setLoc,placeholder:"e.g. Left shoulder, lower back..."})),
      h(Fld,{label:"NOTES"},h(TA,{value:notes,onChange:setNotes,placeholder:"How did the session feel? Any concerns?",rows:3})),
      h(Btn,{onClick:submit,color:C.teal,full:true},"Submit Feedback")
    )),
    logs.length>0&&h(Card,null,h(CardH,{t:"FEEDBACK HISTORY",color:C.teal}),h(CardB,{p:10},
      logs.map((log,i)=>h("div",{key:i,style:{padding:"10px 4px",borderBottom:i<logs.length-1?`1px solid ${C.grayBorder}`:"none"}},
        h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:12}},`${log.date} · ${log.time}`),h(Pill,{label:`${log.score}/10`,color:sc(log.score)})),
        log.location&&h("div",{style:{fontSize:11,color:C.gray,marginTop:2}},`📍 ${log.location}`),
        log.notes&&h("div",{style:{fontSize:12,color:C.navy,marginTop:4,fontStyle:"italic"}},`"${log.notes}"`)
      ))
    ))
  );
}

function Compliance({client}){
  const logs=LS.get(`tbf_comp_${client.id}`,[]);
  const today=new Date();
  const weeks=Array.from({length:6},(_,wi)=>{const ws=new Date(today);ws.setDate(today.getDate()-today.getDay()-wi*7);const days=Array.from({length:7},(_,di)=>{const d=new Date(ws);d.setDate(ws.getDate()+di);const ds=d.toISOString().slice(0,10);return{date:ds,count:logs.filter(l=>l.date===ds).length,day:["Su","Mo","Tu","We","Th","Fr","Sa"][di]};});return{label:wi===0?"This week":`${wi}w ago`,days};});
  const tw=weeks[0].days.filter(d=>d.count>0).length;
  return h("div",{style:{paddingBottom:24}},
    h("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14}},[["This Week",`${tw}`,C.teal,"exercises logged"],["Total",`${logs.length}`,C.navy,"exercises logged"]].map(([label,val,color,sub])=>h("div",{key:label,style:{background:C.white,borderRadius:10,boxShadow:"0 1px 6px rgba(0,0,0,0.07)",padding:14,textAlign:"center"}},h("div",{style:{fontSize:28,fontWeight:"bold",color}},val),h("div",{style:{fontSize:10,color:C.gray}},sub),h("div",{style:{fontSize:11,color:C.gray,marginTop:2}},label)))),
    weeks.map((week,wi)=>h(Card,{key:wi},h(CardB,{p:12},h("div",{style:{fontSize:11,fontWeight:"bold",color:C.gray,marginBottom:8}},week.label.toUpperCase()),h("div",{style:{display:"flex",gap:5}},week.days.map((d,di)=>h("div",{key:di,style:{flex:1,textAlign:"center"}},h("div",{style:{width:"100%",paddingBottom:"100%",borderRadius:5,background:d.count>0?C.teal:C.grayLight,position:"relative"}},d.count>0&&h("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:C.white,fontSize:10,fontWeight:"bold"}},d.count)),h("div",{style:{fontSize:9,color:C.gray,marginTop:3}},d.day)))))))
  );
}

function SessionNotes({client,isTrainer}){
  const [notes,setNotes]=useState(()=>LS.get(`tbf_notes_${client.id}`,[]));
  const [newNote,setNewNote]=useState("");
  const addNote=()=>{if(!newNote.trim()) return;const e={date:new Date().toISOString().slice(0,10),text:newNote,from:"Anthony Anderson"};const u=[e,...notes];setNotes(u);LS.set(`tbf_notes_${client.id}`,u);setNewNote("");};
  return h("div",{style:{paddingBottom:24}},
    isTrainer&&h(Card,null,h(CardH,{t:"ADD SESSION NOTE"}),h(CardB,null,h(TA,{value:newNote,onChange:setNewNote,placeholder:"Session observations, corrections, next steps...",rows:4}),h(Btn,{onClick:addNote,color:C.teal,full:true,st:{marginTop:10}},"Add Note"))),
    notes.length===0&&h("div",{style:{textAlign:"center",color:C.gray,fontStyle:"italic",padding:32}},"No session notes yet."),
    notes.map((n,i)=>h("div",{key:i,style:{background:C.white,borderRadius:10,boxShadow:"0 1px 6px rgba(0,0,0,0.07)",padding:"12px 16px",marginBottom:8,borderLeft:`4px solid ${C.teal}`}},h("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6}},h("span",{style:{fontSize:11,fontWeight:"bold",color:C.teal}},`Coach ${n.from}`),h("span",{style:{fontSize:11,color:C.gray}},n.date)),h("div",{style:{fontSize:13,color:C.navy,lineHeight:1.7}},n.text)))
  );
}


function WorkoutBuilder({client,onUpdate,onClose}){
  const [days,setDays]=useState(()=>JSON.parse(JSON.stringify(client.days||[])));
  const [activeDay,setActiveDay]=useState(0);
  const [activeSec,setActiveSec]=useState(null);
  const [search,setSearch]=useState("");
  const [tmplKey,setTmplKey]=useState("");
  const [saved,setSaved]=useState(false);
  const results=search.length>1?ALL_EX.filter(e=>e.name.toLowerCase().includes(search.toLowerCase())).slice(0,12):[];
  const SECTION_COLORS=[C.navy,C.teal,C.teal2,C.navy2,C.purple,C.amber];

  const addDay=()=>{
    const newDay={title:"NEW DAY — "+["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][days.length%7],type:"session",sections:[]};
    setDays(p=>[...p,newDay]);setActiveDay(days.length);
  };
  const removeDay=di=>{const nd=days.filter((_,i)=>i!==di);setDays(nd);setActiveDay(Math.max(0,Math.min(activeDay,nd.length-1)));};
  const renameDay=(di,title)=>setDays(p=>p.map((d,i)=>i===di?{...d,title}:d));
  const addSection=di=>{
    const sec={label:"NEW BLOCK",color:SECTION_COLORS[days[di].sections.length%SECTION_COLORS.length],exercises:[]};
    setDays(p=>p.map((d,i)=>i===di?{...d,sections:[...d.sections,sec]}:d));
    setActiveSec(days[di].sections.length);
  };
  const removeSection=(di,si)=>setDays(p=>p.map((d,i)=>i===di?{...d,sections:d.sections.filter((_,j)=>j!==si)}:d));
  const renameSection=(di,si,label)=>setDays(p=>p.map((d,i)=>i===di?{...d,sections:d.sections.map((s,j)=>j===si?{...s,label:label.toUpperCase()}:s)}:d));
  const addExercise=(di,si,name)=>{
    const ex={name,prescription:"3 x 12",cue:CUES[name]||""};
    setDays(p=>p.map((d,i)=>i===di?{...d,sections:d.sections.map((s,j)=>j===si?{...s,exercises:[...s.exercises,ex]}:s)}:d));
    setSearch("");
  };
  const removeExercise=(di,si,ei)=>setDays(p=>p.map((d,i)=>i===di?{...d,sections:d.sections.map((s,j)=>j===si?{...s,exercises:s.exercises.filter((_,k)=>k!==ei)}:s)}:d));
  const updateRx=(di,si,ei,prescription)=>setDays(p=>p.map((d,i)=>i===di?{...d,sections:d.sections.map((s,j)=>j===si?{...s,exercises:s.exercises.map((e,k)=>k===ei?{...e,prescription}:e)}:s)}:d));
  const moveEx=(di,si,ei,dir)=>{
    setDays(p=>p.map((d,i)=>{
      if(i!==di) return d;
      return {...d,sections:d.sections.map((s,j)=>{
        if(j!==si) return s;
        const exs=[...s.exercises];
        const ni=ei+dir;
        if(ni<0||ni>=exs.length) return s;
        [exs[ei],exs[ni]]=[exs[ni],exs[ei]];
        return {...s,exercises:exs};
      })};
    }));
  };
  const applyTemplate=()=>{
    if(!tmplKey||!TEMPLATES[tmplKey]) return;
    setDays(JSON.parse(JSON.stringify(TEMPLATES[tmplKey].days)));
    setActiveDay(0);setActiveSec(null);setTmplKey("");
  };
  const handleSave=()=>{onUpdate({...client,days});setSaved(true);setTimeout(()=>setSaved(false),2000);};

  const curDay=days[activeDay];

  return h("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:999,display:"flex",flexDirection:"column"}},
    h("div",{style:{background:C.white,height:"100%",display:"flex",flexDirection:"column",maxWidth:700,margin:"0 auto",width:"100%",boxShadow:"0 0 40px rgba(0,0,0,0.4)"}},
      // Header
      h("div",{style:{background:C.navy,color:C.white,padding:"14px 16px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}},
        h("div",null,
          h("div",{style:{fontWeight:"bold",fontSize:16}},"Workout Builder"),
          h("div",{style:{fontSize:11,color:C.tealLight,marginTop:2}},client.name)
        ),
        h("div",{style:{display:"flex",gap:8}},
          h(Btn,{onClick:handleSave,color:saved?C.green:C.teal,small:true},saved?"✓ Saved":"Save Program"),
          h(Btn,{onClick:onClose,color:C.red,small:true},"Close")
        )
      ),
      // Template loader
      h("div",{style:{background:C.amberLight,padding:"10px 14px",borderBottom:"1px solid "+C.grayBorder,display:"flex",gap:8,alignItems:"center",flexShrink:0}},
        h("div",{style:{fontSize:12,color:C.navy,fontWeight:"bold",flexShrink:0}},"Load Template:"),
        h("select",{value:tmplKey,onChange:e=>setTmplKey(e.target.value),style:{...istyle,flex:1,fontSize:12,padding:"6px 10px"}},
          h("option",{value:""},"— choose template to load —"),
          Object.entries(TEMPLATES).map(([k,v])=>h("option",{key:k,value:k},v.label))
        ),
        h(Btn,{onClick:applyTemplate,color:C.amber,small:true},"Apply")
      ),
      // Day tabs
      h("div",{style:{display:"flex",gap:0,overflowX:"auto",borderBottom:"1px solid "+C.grayBorder,flexShrink:0,background:C.grayLight}},
        days.map((d,di)=>h("div",{key:di,style:{display:"flex",alignItems:"center",borderRight:"1px solid "+C.grayBorder}},
          h("button",{onClick:()=>setActiveDay(di),style:{padding:"8px 12px",border:"none",background:di===activeDay?C.white:C.grayLight,fontWeight:di===activeDay?"bold":"normal",color:di===activeDay?C.navy:C.gray,cursor:"pointer",fontSize:11,whiteSpace:"nowrap",borderBottom:di===activeDay?"2px solid "+C.teal:"2px solid transparent"}},
            "Day "+(di+1)
          ),
          days.length>1&&h("button",{onClick:()=>removeDay(di),style:{background:"none",border:"none",color:C.red,cursor:"pointer",padding:"0 6px",fontSize:14}},"×")
        )),
        h("button",{onClick:addDay,style:{padding:"8px 12px",border:"none",background:C.grayLight,color:C.teal,cursor:"pointer",fontSize:13,fontWeight:"bold",flexShrink:0}},"+Day")
      ),
      // Day editor
      h("div",{style:{flex:1,overflowY:"auto",padding:14}},
        curDay&&h("div",null,
          // Day title
          h(Fld,{label:"DAY TITLE"},h(Inp,{value:curDay.title,onChange:v=>renameDay(activeDay,v),placeholder:"e.g. MONDAY — PUSH + ZONE 2"})),
          h(Fld,{label:"TYPE"},h(Sel,{value:curDay.type,onChange:v=>setDays(p=>p.map((d,i)=>i===activeDay?{...d,type:v}:d)),options:[["session","Gym Session"],["home","Home Program"],["cardio","Cardio Only"],["rest","Rest Day"]]})),
          // Sections
          curDay.sections.map((sec,si)=>h("div",{key:si,style:{background:C.grayLight,borderRadius:10,padding:10,marginBottom:10,border:"1px solid "+C.grayBorder}},
            // Section header
            h("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:8}},
              h("div",{style:{width:14,height:14,borderRadius:3,background:sec.color,flexShrink:0}}),
              h("input",{value:sec.label,onChange:e=>renameSection(activeDay,si,e.target.value),style:{flex:1,border:"1px solid "+C.grayBorder,borderRadius:6,padding:"4px 8px",fontSize:12,fontWeight:"bold",fontFamily:"Georgia,serif",color:C.navy}}),
              h("select",{value:sec.color,onChange:e=>setDays(p=>p.map((d,i)=>i===activeDay?{...d,sections:d.sections.map((s,j)=>j===si?{...s,color:e.target.value}:s)}:d)),style:{border:"1px solid "+C.grayBorder,borderRadius:6,padding:"4px",fontSize:11,fontFamily:"Georgia,serif"}},
                [[C.navy,"Navy"],[C.teal,"Teal"],[C.teal2,"Dark Teal"],[C.navy2,"Navy 2"],[C.amber,"Amber"],[C.red,"Red"],[C.green,"Green"]].map(([v,l])=>h("option",{key:v,value:v},l))
              ),
              h("button",{onClick:()=>removeSection(activeDay,si),style:{background:"none",border:"none",color:C.red,cursor:"pointer",fontSize:16,padding:"0 4px"}},"×")
            ),
            // Exercises in section
            sec.exercises.map((ex,ei)=>h("div",{key:ei,style:{background:C.white,border:"1px solid "+C.grayBorder,borderRadius:7,padding:"8px 10px",marginBottom:6,display:"flex",gap:8,alignItems:"flex-start"}},
              h("div",{style:{flex:1}},
                h("div",{style:{fontWeight:"bold",fontSize:13,color:C.navy,marginBottom:4}},ex.name),
                h("input",{value:ex.prescription,onChange:e=>updateRx(activeDay,si,ei,e.target.value),style:{width:"100%",border:"1px solid "+C.grayBorder,borderRadius:5,padding:"3px 8px",fontSize:12,fontFamily:"Georgia,serif",color:C.teal2}})
              ),
              h("div",{style:{display:"flex",flexDirection:"column",gap:3}},
                h("button",{onClick:()=>moveEx(activeDay,si,ei,-1),disabled:ei===0,style:{background:C.grayLight,border:"none",borderRadius:4,cursor:"pointer",padding:"2px 6px",fontSize:10,opacity:ei===0?0.3:1}},"▲"),
                h("button",{onClick:()=>moveEx(activeDay,si,ei,1),disabled:ei===sec.exercises.length-1,style:{background:C.grayLight,border:"none",borderRadius:4,cursor:"pointer",padding:"2px 6px",fontSize:10,opacity:ei===sec.exercises.length-1?0.3:1}},"▼"),
                h("button",{onClick:()=>removeExercise(activeDay,si,ei),style:{background:"none",border:"none",color:C.red,cursor:"pointer",fontSize:14,padding:"2px 4px"}},"×")
              )
            )),
            // Add exercise to section
            si===activeSec&&h("div",{style:{marginTop:6}},
              h(Inp,{value:search,onChange:setSearch,placeholder:"Search 500+ exercises to add..."}),
              results.length>0&&h("div",{style:{background:C.white,border:"1px solid "+C.grayBorder,borderRadius:6,marginTop:4,maxHeight:160,overflowY:"auto"}},
                results.map((e,i)=>h("div",{key:i,onClick:()=>addExercise(activeDay,si,e.name),style:{padding:"7px 10px",cursor:"pointer",fontSize:12,color:C.navy,display:"flex",justifyContent:"space-between",borderBottom:"1px solid "+C.grayBorder}},
                  h("span",null,e.name),h(Tag,{label:e.cat,color:C.teal})
                ))
              )
            ),
            h("div",{style:{display:"flex",gap:6,marginTop:6}},
              h(Btn,{onClick:()=>setActiveSec(si===activeSec?null:si),color:activeSec===si?C.navy:C.tealLight,fg:activeSec===si?C.white:C.navy,small:true},activeSec===si?"✓ Done Adding":"+ Add Exercise")
            )
          )),
          h(Btn,{onClick:()=>addSection(activeDay),color:C.grayLight,fg:C.navy,full:true},"+ Add Block to This Day")
        )
      )
    )
  );
}


function CardioBuilder({client,onUpdate,onClose}){
  const [plan,setPlan]=useState(()=>{
    const saved=LS.get("tbf_cardio_"+client.id,null);
    return saved||{weeklyGoal:"3",primaryType:"zone2",sessions:[]};
  });
  const [saved,setSaved]=useState(false);

  const CARDIO_TYPES=[
    {id:"zone2",label:"Zone 2",desc:"Aerobic base building",rx:"HR 120-140 | Conversational pace",color:C.teal,equipment:["Incline Treadmill","Stationary Bike","Outdoor Walk","Elliptical","Row Machine"]},
    {id:"hiit",label:"HIIT",desc:"High intensity intervals",rx:"Max effort intervals | 1x/week only",color:C.red,equipment:["Treadmill Sprints","Bike Sprints","Jump Rope","Battle Ropes","Sled Push"]},
    {id:"liss",label:"LISS",desc:"Low intensity steady state",rx:"HR 100-120 | Easy effort",color:C.green,equipment:["Walking","Swimming","Cycling","Light Bike","Elliptical"]},
    {id:"active_recovery",label:"Active Recovery",desc:"Blood flow & recovery",rx:"Very light movement | No fatigue",color:C.navy2,equipment:["Easy Walk","Gentle Bike","Light Yoga","Foam Rolling","Swimming"]},
    {id:"sport",label:"Sport Specific",desc:"In-season training",rx:"Per sport demands",color:C.purple,equipment:["Agility Ladder","Cone Drills","Sport Drills","Jump Training","Speed Work"]},
  ];

  const addSession=()=>{
    const s={day:"Monday",type:"zone2",duration:"30",intensity:"moderate",equipment:"Stationary Bike",notes:""};
    setPlan(p=>({...p,sessions:[...p.sessions,s]}));
  };
  const updateSession=(i,field,val)=>setPlan(p=>({...p,sessions:p.sessions.map((s,j)=>j===i?{...s,[field]:val}:s)}));
  const removeSession=i=>setPlan(p=>({...p,sessions:p.sessions.filter((_,j)=>j!==i)}));
  const handleSave=()=>{LS.set("tbf_cardio_"+client.id,plan);onUpdate({...client,cardioPlan:plan});setSaved(true);setTimeout(()=>setSaved(false),2000);};

  const weekTotal=plan.sessions.length;
  const zone2Count=plan.sessions.filter(s=>s.type==="zone2").length;
  const hiitCount=plan.sessions.filter(s=>s.type==="hiit").length;

  return h("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:999,display:"flex",flexDirection:"column"}},
    h("div",{style:{background:C.white,height:"100%",display:"flex",flexDirection:"column",maxWidth:700,margin:"0 auto",width:"100%",boxShadow:"0 0 40px rgba(0,0,0,0.4)"}},
      // Header
      h("div",{style:{background:C.navy,color:C.white,padding:"14px 16px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}},
        h("div",null,
          h("div",{style:{fontWeight:"bold",fontSize:16}},"Cardio Builder"),
          h("div",{style:{fontSize:11,color:C.tealLight,marginTop:2}},client.name)
        ),
        h("div",{style:{display:"flex",gap:8}},
          h(Btn,{onClick:handleSave,color:saved?C.green:C.teal,small:true},saved?"✓ Saved":"Save Plan"),
          h(Btn,{onClick:onClose,color:C.red,small:true},"Close")
        )
      ),
      h("div",{style:{flex:1,overflowY:"auto",padding:14}},
        // Summary
        h(Card,null,h(CardH,{t:"WEEKLY CARDIO SUMMARY",color:C.teal}),h(CardB,null,
          h(G2,null,
            h(Fld,{label:"WEEKLY CARDIO GOAL (sessions)"},
              h(Sel,{value:plan.weeklyGoal,onChange:v=>setPlan(p=>({...p,weeklyGoal:v})),options:[["1","1x/week"],["2","2x/week"],["3","3x/week"],["4","4x/week"],["5","5x/week"],["6","6x/week"],["7","Daily"]]})
            ),
            h(Fld,{label:"PRIMARY FOCUS"},
              h(Sel,{value:plan.primaryType,onChange:v=>setPlan(p=>({...p,primaryType:v})),options:CARDIO_TYPES.map(t=>[t.id,t.label+" — "+t.desc])})
            )
          ),
          h("div",{style:{display:"flex",gap:8,marginTop:4}},
            [["Total Sessions",weekTotal,C.navy],["Zone 2",zone2Count,C.teal],["HIIT",hiitCount,C.red]].map(([lb,val,col])=>
              h("div",{key:lb,style:{flex:1,textAlign:"center",background:col+"11",border:"1px solid "+col+"33",borderRadius:8,padding:"8px 4px"}},
                h("div",{style:{fontSize:22,fontWeight:"bold",color:col}},val),
                h("div",{style:{fontSize:10,color:C.gray}},lb)
              )
            )
          ),
          hiitCount>1&&h("div",{style:{background:C.amberLight,border:"1px solid "+C.amber+"44",borderRadius:8,padding:"8px 12px",marginTop:10,fontSize:12,color:C.amber,fontWeight:"bold"}},"⚠️ HIIT Warning: More than 1 HIIT session per week increases injury and overtraining risk. Consider replacing with Zone 2 or Active Recovery.")
        )),
        // Cardio type reference
        h(Card,null,h(CardH,{t:"CARDIO TYPE REFERENCE"}),h(CardB,{p:10},
          CARDIO_TYPES.map(t=>h("div",{key:t.id,style:{display:"flex",gap:10,alignItems:"flex-start",marginBottom:10,paddingBottom:10,borderBottom:"1px solid "+C.grayBorder}},
            h("div",{style:{background:t.color,borderRadius:6,padding:"4px 8px",fontSize:10,fontWeight:"bold",color:C.white,flexShrink:0,minWidth:80,textAlign:"center"}},t.label),
            h("div",{style:{flex:1}},
              h("div",{style:{fontSize:12,color:C.navy,fontWeight:"bold"}},t.rx),
              h("div",{style:{fontSize:11,color:C.gray}},t.desc)
            )
          ))
        )),
        // Sessions
        h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}},
          h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:14}},"Weekly Sessions"),
          h(Btn,{onClick:addSession,color:C.teal,small:true},"+ Add Session")
        ),
        plan.sessions.length===0&&h("div",{style:{textAlign:"center",padding:24,color:C.gray,fontStyle:"italic",background:C.grayLight,borderRadius:8,marginBottom:12}},"No cardio sessions yet. Tap + Add Session to build the weekly plan."),
        plan.sessions.map((s,i)=>{
          const typeInfo=CARDIO_TYPES.find(t=>t.id===s.type)||CARDIO_TYPES[0];
          return h(Card,{key:i},
            h("div",{style:{background:typeInfo.color,color:C.white,padding:"8px 12px",display:"flex",justifyContent:"space-between",alignItems:"center"}},
              h("span",{style:{fontWeight:"bold",fontSize:12}},s.day+" — "+typeInfo.label),
              h("button",{onClick:()=>removeSession(i),style:{background:"none",border:"none",color:C.white,cursor:"pointer",fontSize:16}},"×")
            ),
            h(CardB,null,
              h(G2,null,
                h(Fld,{label:"DAY"},h(Sel,{value:s.day,onChange:v=>updateSession(i,"day",v),options:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(d=>[d,d])})),
                h(Fld,{label:"TYPE"},h(Sel,{value:s.type,onChange:v=>updateSession(i,"type",v),options:CARDIO_TYPES.map(t=>[t.id,t.label])}))
              ),
              h(G2,null,
                h(Fld,{label:"DURATION (min)"},h(Sel,{value:s.duration,onChange:v=>updateSession(i,"duration",v),options:[["15","15 min"],["20","20 min"],["25","25 min"],["30","30 min"],["35","35 min"],["40","40 min"],["45","45 min"],["50","50 min"],["60","60 min"]]})),
                h(Fld,{label:"INTENSITY"},h(Sel,{value:s.intensity,onChange:v=>updateSession(i,"intensity",v),options:[["light","Light — Easy effort"],["moderate","Moderate — Zone 2"],["hard","Hard — HIIT"],["max","Max — All out"]]}))
              ),
              h(Fld,{label:"EQUIPMENT / MODALITY"},h(Sel,{value:s.equipment,onChange:v=>updateSession(i,"equipment",v),options:typeInfo.equipment.map(e=>[e,e])})),
              h(Fld,{label:"TRAINER NOTES",mb:0},h(TA,{value:s.notes,onChange:v=>updateSession(i,"notes",v),placeholder:"HR target, intensity cues, specific instructions...",rows:2}))
            )
          );
        }),
        plan.sessions.length>0&&h("div",{style:{background:C.tealLight,border:"1px solid "+C.teal+"44",borderRadius:10,padding:12,marginTop:4}},
          h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:13,marginBottom:8}},"Weekly Cardio Summary for Client"),
          plan.sessions.map((s,i)=>{
            const t=CARDIO_TYPES.find(ct=>ct.id===s.type)||CARDIO_TYPES[0];
            return h("div",{key:i,style:{display:"flex",gap:8,alignItems:"center",marginBottom:6}},
              h("div",{style:{background:t.color,color:C.white,borderRadius:4,padding:"2px 8px",fontSize:10,fontWeight:"bold",minWidth:80,textAlign:"center"}},s.day),
              h("div",{style:{fontSize:12,color:C.navy}},t.label+" | "+s.duration+" min | "+s.equipment),
              s.notes&&h("div",{style:{fontSize:11,color:C.gray,fontStyle:"italic"}}," — "+s.notes)
            );
          })
        )
      )
    )
  );
}

function ClientView({client,isTrainer,onClientUpdate}){
  const [tab,setTab]=useState("plan");
  const [showBuilder,setShowBuilder]=useState(false);
  const [showCardio,setShowCardio]=useState(false);
  const [di,setDi]=useState(0);
  const [assessment,setAssessment]=useState(()=>LS.get(`tbf_assess_${client.id}`,null));
  const [pendingProg,setPendingProg]=useState(null);
  const compLogs=LS.get(`tbf_comp_${client.id}`,[]);
  const recentCount=compLogs.filter(l=>(new Date()-new Date(l.date))/(1000*60*60*24)<7).length;
  const hasProgram=client.days&&client.days.length>0;
  const handleSaveAssessment=data=>{LS.set(`tbf_assess_${client.id}`,data);setAssessment(data);if(isTrainer){const sugg=genSugg(data);if(!hasProgram){const prog=buildProg(sugg);onClientUpdate({...client,days:[prog]});}else if(sugg.findings.length>0) setPendingProg(buildProg(sugg));}};
  const TABS=[{id:"plan",label:"Training"},{id:"assess",label:"Assessment"},{id:"nutrition",label:"Nutrition"},{id:"notes",label:"Notes"},{id:"pain",label:"Feedback"},{id:"comp",label:"Progress"}];
  return h("div",null,
    h("div",{style:{background:C.navy2,padding:"14px 16px",borderBottom:`3px solid ${C.teal}`}},
      h("div",{style:{color:C.white,fontWeight:"bold",fontSize:17}},client.name),
      h("div",{style:{color:C.tealLight,fontSize:11,marginTop:2}},client.focus),
      h("div",{style:{marginTop:8,display:"flex",flexWrap:"wrap",gap:4}},
        h(Pill,{label:`Phase ${client.phase}`,color:C.teal}),
        recentCount>=20&&h(Pill,{label:"⬆ Ready to Advance",color:C.amber}),
        assessment&&h(Pill,{label:"✓ Assessment on file",color:C.green}),
        !assessment&&isTrainer&&h(Pill,{label:"⚠ No assessment yet",color:C.amber})
      )
    ),
    h("a",{href:"sms:2282296865",style:{display:"block",background:C.green,color:C.white,textAlign:"center",padding:"10px 0",fontSize:13,fontWeight:"bold",textDecoration:"none"}},"💬 Message Anthony — 228-229-6865"),
    h("div",{className:"sc",style:{display:"flex",background:C.white,borderBottom:`1px solid ${C.grayBorder}`,position:"sticky",top:56,zIndex:90}},
      TABS.map(t=>h("button",{key:t.id,onClick:()=>setTab(t.id),style:{flexShrink:0,padding:"10px 12px",border:"none",borderBottom:tab===t.id?`3px solid ${C.teal}`:"3px solid transparent",background:C.white,fontSize:11,fontWeight:tab===t.id?"bold":"normal",color:tab===t.id?C.teal:C.gray,cursor:"pointer",whiteSpace:"nowrap"}},t.label+(t.id==="assess"&&!assessment&&isTrainer?" ●":"")))
    ),
    h("div",{style:{padding:12}},
      tab==="plan"&&h("div",null,
        isTrainer&&pendingProg&&h("div",{style:{background:C.amberLight,border:`2px solid ${C.amber}`,borderRadius:12,padding:16,marginBottom:14}},
          h("div",{style:{fontWeight:"bold",color:C.amber,fontSize:14,marginBottom:4}},"⚡ Suggested Program Ready"),
          h("div",{style:{fontSize:12,color:C.navy,marginBottom:10}},"Based on assessment findings. Approve to add to this client's Training tab."),
          h("div",{style:{background:C.white,borderRadius:8,padding:10,marginBottom:10,maxHeight:180,overflowY:"auto"}},pendingProg.sections.map((sec,i)=>h("div",{key:i,style:{marginBottom:6}},h("div",{style:{fontSize:10,fontWeight:"bold",color:C.navy,marginBottom:3}},sec.label),sec.exercises.map((ex,j)=>h("div",{key:j,style:{fontSize:11,color:C.gray}},`• ${ex.name} — ${ex.prescription}`))))),
          h("div",{style:{display:"flex",gap:10}},h(Btn,{onClick:()=>{onClientUpdate({...client,days:[...client.days,pendingProg]});setPendingProg(null);},color:C.green,full:true},"✓ Approve & Push to Training"),h(Btn,{onClick:()=>setPendingProg(null),color:C.gray,full:true},"Dismiss"))
        ),
        !hasProgram&&!isTrainer&&h("div",{style:{padding:32,textAlign:"center",color:C.gray,fontStyle:"italic"}},h("div",{style:{fontSize:40,marginBottom:12}},"🏋️"),h("div",null,"Your program is being prepared. Check back after your first appointment.")),
        !hasProgram&&isTrainer&&h("div",{style:{padding:24,textAlign:"center"}},
          h("div",{style:{fontSize:36,marginBottom:12}},"⚙️"),
          h("div",{style:{fontWeight:"bold",color:C.navy,marginBottom:8}},"No program assigned yet"),
          h("div",{style:{fontSize:13,color:C.gray,marginBottom:16}},"Use the Workout Builder to create this client's program from scratch or load a template."),
          h(Btn,{onClick:()=>setShowBuilder(true),color:C.teal,full:true},"⚙ Open Workout Builder")
        ),
        hasProgram&&h("div",null,
          isTrainer&&h("div",{style:{display:"flex",gap:8,marginBottom:10}},
            h(Btn,{onClick:()=>setShowBuilder(true),color:C.navy,full:true,st:{fontSize:12}},"⚙ Workout Builder — Change Template or Edit Days"),
            h(Btn,{onClick:()=>setShowCardio(true),color:C.teal,full:true,st:{fontSize:12}},"🏃 Cardio Builder — Build Weekly Cardio Plan")
          ),
          h("div",{style:{background:C.tealLight,border:"1px solid "+C.teal+"44",borderRadius:8,padding:"10px 12px",marginBottom:10,fontSize:12,color:C.teal2,lineHeight:1.6}},
            h("div",{style:{fontWeight:"bold",color:C.navy,marginBottom:4}},"📅 How Workout Days Work"),
            "Days shown here are based on the template assigned to this client. As the trainer, you can add, remove, or reorder days using the workout builder. Frequency is determined by the program template — e.g. 3x/week means 3 session days will appear. You can customize each day's exercises using the Swap and Progress buttons on each exercise card."
          ),
          h("div",{className:"sc",style:{display:"flex",gap:8,paddingBottom:8,marginBottom:10}},client.days.map((d,i)=>h("button",{key:i,onClick:()=>setDi(i),style:{background:i===di?C.teal:C.grayLight,color:i===di?C.white:C.navy,border:"none",borderRadius:7,padding:"6px 12px",fontSize:11,fontWeight:"bold",cursor:"pointer",flexShrink:0,whiteSpace:"nowrap"}},d.title.split("—")[0].replace("SESSION","Session").replace("MONDAY","Mon").replace("TUESDAY","Tue").replace("EVERY OTHER DAY","E/O Day").replace("DAILY","Daily").replace("HOME","Home").replace("ASSESSMENT-BASED CORRECTIVE PROGRAM","Corrective").trim()))),
          h(DayView,{client,di,isTrainer}),
          isTrainer&&h("div",{style:{marginTop:12}},
            h("div",{style:{background:C.navy,color:C.white,padding:"9px 14px",fontSize:11,fontWeight:"bold",letterSpacing:1,borderRadius:"8px 8px 0 0"}},"CARDIO RECOMMENDATIONS"),
            h("div",{style:{background:C.white,border:"1px solid "+C.grayBorder,borderRadius:"0 0 8px 8px",padding:12}},
              h("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}},
                [["Zone 2 (Fat Burn)","3-4x/week | 25-45 min | HR 120-140 | Incline Walk or Bike","Builds aerobic base, burns fat, supports recovery",C.teal],
                 ["HIIT","1x/week max | 15-20 min | High intensity intervals","For advanced clients only — after 8+ weeks base training",C.amber],
                 ["Active Recovery","Daily option | 20-30 min | Easy walk or light bike","Promotes circulation and recovery on off days",C.green],
                 ["Sport Specific","As needed | Client sport-specific drills","For athletic performance clients in season",C.navy]].map(([title,rx,note,col])=>
                  h("div",{key:title,style:{background:col+"11",border:"1px solid "+col+"33",borderRadius:8,padding:10}},
                    h("div",{style:{fontWeight:"bold",color:col,fontSize:12,marginBottom:2}},title),
                    h("div",{style:{fontSize:11,color:C.navy,fontWeight:"bold",marginBottom:3}},rx),
                    h("div",{style:{fontSize:10,color:C.gray}},note)
                  )
                )
              )
            )
          )
        )
      ),
      
tab==="assess"&&h(AssessmentForm,{client,isTrainer,existing:assessment,onSave:handleSaveAssessment}),
      tab==="nutrition"&&h(NutritionView,{client}),
      tab==="notes"&&h(SessionNotes,{client,isTrainer}),
      tab==="pain"&&h(PainLog,{client}),
      tab==="comp"&&h(Compliance,{client})
    ),
    showBuilder&&h(WorkoutBuilder,{client,onUpdate:c=>{onClientUpdate(c);setShowBuilder(false);},onClose:()=>setShowBuilder(false)}),
    showCardio&&h(CardioBuilder,{client,onUpdate:c=>{onClientUpdate(c);setShowCardio(false);},onClose:()=>setShowCardio(false)})
  );
}

function AddClientForm({onAdd,onClose}){
  const [form,setForm]=useState({name:"",email:"",goal:"posture",phase:"1",focus:"",restrictions:""});
  const [sent,setSent]=useState(false);
  const f=(k,v)=>setForm(p=>({...p,[k]:v}));
  const handleAdd=()=>{
    if(!form.name||!form.email) return;
    const tmpl=TEMPLATES[form.goal];
    const nc={id:form.email.toLowerCase().replace(/[^a-z0-9]/g,"_"),name:form.name,email:form.email,password:"",role:"client",phase:parseInt(form.phase)||1,focus:form.focus||tmpl.focus,restrictions:form.restrictions?form.restrictions.split(",").map(r=>r.trim()).filter(Boolean):[],days:tmpl.days||[],schedule:[],nutrition:null,invited:true,invitedAt:new Date().toISOString()};
    onAdd(nc);setSent(true);
  };
  const inviteText="Hi "+form.name+", welcome to True Balance Fitness! Subscribe at: [YOUR STRIPE LINK] | Open the app: [YOUR APP URL] | On iPhone tap Share then Add to Home Screen | Sign up with: "+form.email+" | Create your own password | See you soon! — Anthony Anderson CPT";
  return h("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",zIndex:999,display:"flex",alignItems:"center",justifyContent:"center",padding:16}},
    h("div",{style:{background:C.white,borderRadius:14,width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 20px 60px rgba(0,0,0,0.3)"}},
      h("div",{style:{background:C.navy,color:C.white,padding:"16px 20px",borderRadius:"14px 14px 0 0",display:"flex",justifyContent:"space-between",alignItems:"center"}},
        h("div",{style:{fontWeight:"bold",fontSize:15}},"Add New Client"),
        h("button",{onClick:onClose,style:{background:"none",border:"none",color:C.white,fontSize:20,cursor:"pointer"}},"×")
      ),
      sent
        ? h("div",{style:{padding:28,textAlign:"center"}},
            h("div",{style:{fontSize:36,marginBottom:12}},"✉️"),
            h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:16,marginBottom:8}},form.name+" added!"),
            h("div",{style:{fontSize:13,color:C.gray,lineHeight:1.7,marginBottom:16}},"Client created. Send them the invitation below to subscribe and set up their account."),
            h("div",{style:{background:C.tealLight,border:"1px solid "+C.teal+"44",borderRadius:8,padding:12,marginBottom:16,fontSize:12,color:C.navy,textAlign:"left",lineHeight:1.9}},
              h("div",{style:{fontWeight:"bold",marginBottom:6}},"📧 Invitation to send:"),
              h("div",null,"1. Subscribe: [YOUR STRIPE LINK]"),
              h("div",null,"2. Open the app: [YOUR APP URL]"),
              h("div",null,"3. iPhone: tap Share → Add to Home Screen"),
              h("div",null,"4. Sign up with: "+form.email),
              h("div",null,"5. Create your own password"),
              h("div",{style:{marginTop:6,color:C.teal2,fontStyle:"italic"}},"— Anthony Anderson, CPT | True Balance Fitness")
            ),
            h("div",{style:{display:"flex",gap:10}},
              h(Btn,{onClick:()=>navigator.clipboard.writeText(inviteText),color:C.teal,full:true},"Copy Invitation"),
              h(Btn,{onClick:onClose,color:C.navy,full:true},"Done")
            )
          )
        : h("div",{style:{padding:20}},
            h(Fld,{label:"FULL NAME"},h(Inp,{value:form.name,onChange:v=>f("name",v),placeholder:"Client full name"})),
            h(Fld,{label:"EMAIL"},h(Inp,{value:form.email,onChange:v=>f("email",v),placeholder:"client@email.com",type:"email"})),
            h(Fld,{label:"PRIMARY GOAL TEMPLATE"},h(Sel,{value:form.goal,onChange:v=>f("goal",v),options:Object.entries(TEMPLATES).map(([k,v])=>[k,v.label])})),
            h("div",{style:{background:C.tealLight,border:"1px solid "+C.teal+"33",borderRadius:8,padding:10,marginBottom:12,fontSize:12,color:C.teal2,lineHeight:1.7}},"Program auto-loads from template. Client sets own password on signup. No temp password needed."),
            h(Fld,{label:"STARTING PHASE"},h(Sel,{value:form.phase,onChange:v=>f("phase",v),options:[["1","Phase 1 — Foundation"],["2","Phase 2 — Strength"],["3","Phase 3 — Power"]]})),
            h(Fld,{label:"FOCUS / NOTES (optional)"},h(Inp,{value:form.focus,onChange:v=>f("focus",v),placeholder:"e.g. Right knee pain, postpartum..."})),
            h(Fld,{label:"RESTRICTIONS (comma separated)"},h(Inp,{value:form.restrictions,onChange:v=>f("restrictions",v),placeholder:"e.g. No overhead, spinal rods..."})),
            h("div",{style:{display:"flex",gap:10,marginTop:16}},
              h(Btn,{onClick:onClose,color:C.grayLight,fg:C.navy},"Cancel"),
              h(Btn,{onClick:handleAdd,color:C.teal},"Add Client + Generate Invitation")
            )
          )
    )
  );
}

function TrainerRoster({clients,onSelect,onAddClient}){
  return h("div",{style:{padding:16}},
    h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}},h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:16}},"Client Roster"),h(Btn,{onClick:onAddClient,color:C.teal,small:true},"+ Add Client")),
    clients.length===0&&h("div",{style:{textAlign:"center",color:C.gray,padding:40,fontStyle:"italic"}},"No clients yet. Add your first client above."),
    clients.map(c=>{const hasA=LS.get(`tbf_assess_${c.id}`,null)!==null;return h("div",{key:c.id,onClick:()=>onSelect(c),style:{background:C.white,borderRadius:10,boxShadow:"0 1px 6px rgba(0,0,0,0.07)",padding:"14px 16px",marginBottom:10,cursor:"pointer",borderLeft:`4px solid ${C.teal}`,display:"flex",justifyContent:"space-between",alignItems:"center"}},h("div",null,h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:15}},c.name),h("div",{style:{fontSize:11,color:C.gray,marginTop:2}},c.focus),h("div",{style:{marginTop:6,display:"flex",flexWrap:"wrap",gap:4}},h(Pill,{label:`Phase ${c.phase}`,color:C.teal}),hasA?h(Pill,{label:"✓ Assessment",color:C.green}):h(Pill,{label:"No Assessment",color:C.amber}),c.restrictions?.slice(0,1).map((r,i)=>h(Pill,{key:i,label:r,color:C.red})))),h("span",{style:{color:C.teal,fontSize:24}},"›"));})
  );
}

function Register({onRegister,onBack}){
  const [form,setForm]=useState({name:"",email:"",password:"",confirm:"",goal:"posture"});
  const [err,setErr]=useState("");
  const f=(k,v)=>setForm(p=>({...p,[k]:v}));
  const handleReg=()=>{if(!form.name||!form.email||!form.password){setErr("Please fill in all fields.");return;}if(form.password!==form.confirm){setErr("Passwords do not match.");return;}if(form.password.length<6){setErr("Password must be at least 6 characters.");return;}const tmpl=TEMPLATES[form.goal];const nc={id:form.email.toLowerCase().replace(/[^a-z0-9]/g,"_"),name:form.name,email:form.email,password:form.password,role:"client",phase:1,focus:tmpl.focus,restrictions:[],days:[],schedule:[],nutrition:null};const ex=LS.get("tbf_clients",[]);LS.set("tbf_clients",[...ex,nc]);onRegister(nc);};
  return h("div",{style:{minHeight:"100vh",background:C.navy,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:20}},
    h("div",{style:{color:C.white,fontWeight:"bold",fontSize:26,letterSpacing:1}},"True Balance"),h("div",{style:{color:C.tealLight,fontSize:12,letterSpacing:3,marginBottom:32}},"FITNESS"),
    h("div",{style:{background:C.white,borderRadius:14,padding:28,width:"100%",maxWidth:380,boxShadow:"0 8px 32px rgba(0,0,0,0.35)"}},
      h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:16,marginBottom:20,textAlign:"center"}},"Create Your Account"),
      ...[["name","FULL NAME","Jane Smith","text"],["email","EMAIL","jane@email.com","email"],["password","PASSWORD","Min. 6 characters","password"],["confirm","CONFIRM PASSWORD","Re-enter password","password"]].map(([k,label,ph,type])=>h(Fld,{key:k,label},h(Inp,{value:form[k],onChange:v=>f(k,v),placeholder:ph,type}))),
      h(Fld,{label:"MY PRIMARY GOAL"},h(Sel,{value:form.goal,onChange:v=>f("goal",v),options:Object.entries(TEMPLATES).map(([k,v])=>[k,v.label])})),
      err&&h("div",{style:{color:C.red,fontSize:12,marginBottom:12,textAlign:"center"}},err),
      h(Btn,{onClick:handleReg,color:C.teal,full:true,st:{marginBottom:10}},"Create Account"),
      h("button",{onClick:onBack,style:{background:"none",border:"none",color:C.gray,fontSize:12,cursor:"pointer",width:"100%",fontFamily:"Georgia,serif"}},"← Back to Sign In")
    )
  );
}

const TRAINER_U={id:"trainer",name:"Anthony Anderson",password:"TBF228!",role:"trainer"};
const INIT=[
  {id:"kimberly_smith",name:"Kimberly Smith",email:"kimberly@email.com",password:"tbf2024",role:"client",phase:1,focus:"Shoulder Rehab | Posture Correction | Deconditioning Recovery",restrictions:["No lumbar flexion under load","No overhead loading","Hashimoto's"],schedule:[{day:"Tue/Thu",type:"Session",label:"Upper Body Corrective"},{day:"Mon/Fri",type:"StretchZone",label:"Assisted Stretch"}],
    days:[{title:"SESSION — UPPER BODY CORRECTIVE",type:"session",sections:[
      {label:"WARM-UP / RELEASE",color:C.navy,exercises:[{name:"Pec Minor Release — Lacrosse Ball",prescription:"60 sec each side",cue:""},{name:"Lat Release",prescription:"60 sec each side",cue:""},{name:"Left QL Release",prescription:"60 sec L only",cue:""},{name:"Chin Tucks",prescription:"2 x 10 x 2s hold",cue:""},{name:"Thoracic Extension — Foam Roller",prescription:"60 sec",cue:""}]},
      {label:"CORRECTIVE BLOCK",color:C.teal,exercises:[{name:"Wall Angels",prescription:"3 x 10 slow",cue:""},{name:"Prone Y Raise",prescription:"3 x 12 | BW",cue:""},{name:"Sidelying External Rotation — Bilateral",prescription:"3 x 12 each | Light",cue:""},{name:"Face Pull — Cable or Band",prescription:"3 x 15 | Light",cue:""},{name:"Serratus Anterior — Wall Push-Up Plus",prescription:"3 x 12",cue:""}]},
      {label:"SUPERSET A",color:C.navy2,exercises:[{name:"Lateral Raise — Both Arms",prescription:"3 x 10 | 2 lbs",cue:""},{name:"Lat Pulldown",prescription:"3 x 10 | 3-1-2",cue:""}]},
      {label:"SUPERSET B",color:C.navy2,exercises:[{name:"Seated Cable Row — Neutral Grip",prescription:"3 x 12 | 3-1-2",cue:""},{name:"Rear Delt Fly Machine",prescription:"3 x 12 | Light",cue:""}]},
      {label:"CORE + GLUTE",color:C.navy2,exercises:[{name:"Glute Bridge",prescription:"3 x 15 | 2s hold",cue:""},{name:"Dead Bug",prescription:"3 x 8 each",cue:""},{name:"Pallof Press — Band",prescription:"3 x 10 each | 2s hold",cue:""}]}
    ]},{title:"HOME — DAILY + EVERY OTHER DAY",type:"home",sections:[
      {label:"DAILY POSTURE RESET",color:C.teal,exercises:[{name:"Chin Tucks",prescription:"3 x 10 x 2s hold",cue:""},{name:"Wall Angels",prescription:"2 x 10 slow",cue:""}]},
      {label:"EVERY OTHER DAY",color:C.navy,exercises:[{name:"Lateral Raise — Both Arms",prescription:"3 x 10 | 2 lbs",cue:""},{name:"Doorway Pec Stretch",prescription:"3 x 45 sec",cue:""}]}
    ]}],nutrition:null},
  {id:"jennifer_bird",name:"Jennifer Bird",email:"jennifer@email.com",password:"tbf2024",role:"client",phase:1,focus:"Postpartum Recovery | Glute Activation | Core Stability",restrictions:["Spinal rods — NO lumbar flexion under load","TVA compression only","Postpartum C-section — cleared","Breastfeeding"],schedule:[{day:"Every Other Day",type:"Home",label:"Corrective Protocol"},{day:"Daily",type:"Home",label:"Posture Reset"}],
    days:[{title:"EVERY OTHER DAY — HOME CORRECTIVE",type:"home",sections:[
      {label:"STEP 1 — STRETCH",color:C.teal,exercises:[{name:"Kneeling Hip Flexor Stretch",prescription:"3 x 45s L / 30s R | LEFT PRIORITY",cue:""},{name:"QL Stretch",prescription:"3 x 45 sec each",cue:""},{name:"Doorway Pec Stretch",prescription:"3 x 45 sec",cue:""},{name:"Levator Scap Stretch",prescription:"3 x 45s L / 30s R",cue:""},{name:"Calf Stretch — Bent Knee",prescription:"45s each position",cue:""},{name:"Adductor Stretch — Side-Lying",prescription:"3 x 45 sec each",cue:""}]},
      {label:"STEP 2 — ACTIVATE",color:C.navy,exercises:[{name:"TVA Draw-In — Supine",prescription:"3 x 10 x 5s hold | DAILY",cue:""},{name:"Glute Bridge",prescription:"3 sets | ~6–8 reps",cue:""},{name:"Clamshell",prescription:"3 x 12 each | BW first",cue:""},{name:"Hamstring Bridge — Heel Drive",prescription:"3 sets | Build from 4 reps",cue:""},{name:"Seated Scapular Retraction — Lower Trap",prescription:"3 x 15 | 2s hold",cue:""},{name:"Sit-to-Stand",prescription:"5–8 reps | Barstool height",cue:""},{name:"Standing Glute Squeeze",prescription:"5 x 10s hold",cue:""}]}
    ]},{title:"DAILY — POSTURE RESET",type:"home",sections:[{label:"DAILY HABIT",color:C.teal,exercises:[{name:"TVA Draw-In — Supine",prescription:"3 x 10 x 5s hold",cue:""},{name:"Kneeling Hip Flexor Stretch",prescription:"1 x 45 sec L only",cue:""},{name:"Standing Glute Squeeze",prescription:"3 x 10s hold",cue:""}]}]}],nutrition:null},
  {id:"anthony_client",name:"Anthony Anderson",email:"anthony@truebalance.com",password:"TBF228!",role:"client",phase:2,focus:"Performance + Fat Loss + Labs Correction",restrictions:["TRT — monitor estrogen","HIIT max 1x/week"],schedule:[{day:"Mon–Fri",type:"Session",label:"See training tabs"},{day:"Sat",type:"Home",label:"Zone 2 Walk"},{day:"Sun",type:"Rest",label:"Full Rest"}],
    days:[{title:"MONDAY — PUSH + ZONE 2",type:"session",sections:[{label:"STRENGTH",color:C.navy,exercises:[{name:"Dumbbell Bench Press",prescription:"4 x 8–10",cue:""},{name:"Dumbbell Shoulder Press",prescription:"3 x 10–12",cue:""},{name:"Push-Up",prescription:"3 x 12–15",cue:""},{name:"Cable Lateral Raise",prescription:"3 x 12 each",cue:""},{name:"Seated Calf Raise Machine",prescription:"4 x 20–25",cue:""}]},{label:"ZONE 2",color:C.teal,exercises:[{name:"Zone 2 — Incline Walk / Bike",prescription:"25–35 min | HR 120–140",cue:""}]}]},{title:"TUESDAY — PULL + ZONE 2",type:"session",sections:[{label:"STRENGTH",color:C.navy,exercises:[{name:"Lat Pulldown",prescription:"4 x 8–10",cue:""},{name:"Seated Cable Row — Neutral Grip",prescription:"4 x 10",cue:""},{name:"Dumbbell Single Arm Bent Over Row",prescription:"3 x 10 each",cue:""},{name:"Face Pull — Cable or Band",prescription:"3 x 15",cue:""},{name:"Rear Delt Fly Machine",prescription:"3 x 12",cue:""}]},{label:"ZONE 2",color:C.teal,exercises:[{name:"Zone 2 — Incline Walk / Bike",prescription:"25–35 min | HR 120–140",cue:""}]}]}],
    nutrition:{calories:3279,macros:{protein:{pct:34,grams:279},carbs:{pct:45,grams:369},fat:{pct:21,grams:77}},meals:[{label:"Morning (Protein + Fats)",foods:["Eggs","Egg whites","Spinach","Mushrooms","Avocado"],note:"No carbs in morning window."},{label:"Pre-Workout (60–90 min out)",foods:["Kodiak pancake mix","Honey","Greek yogurt","Banana"],note:"40–60g carbs + 30–40g protein."},{label:"Post-Workout",foods:["Chicken breast","Jasmine rice","Pineapple"],note:"60–80g carbs + 40–50g protein."},{label:"Dinner (Protein + Fats)",foods:["Salmon","Asparagus","Olive oil","Walnuts"],note:"No carbs in evening."},{label:"Intra-Workout",foods:["Banana","Electrolytes"],note:"Only if session >60 min."}],supplements:[{timing:"Morning",items:["NMN","Vitamin D + K2","Omega-3","Turmeric","Probiotic"]},{timing:"Pre-Workout",items:["Creatine","Nitric Oxide"]},{timing:"During",items:["Electrolytes"]},{timing:"Night",items:["Magnesium"]}]}}
];

function Login({onLogin,onRegister}){
  const [name,setName]=useState("");const [pass,setPass]=useState("");const [err,setErr]=useState("");
  const handleLogin=()=>{if(name.toLowerCase().replace(/\s/g,"")==="anthonyanderson"&&pass==="TBF228!"){LS.set("tbf_session",{id:"trainer",role:"trainer"});onLogin(TRAINER_U);return;}const clients=LS.get("tbf_clients",INIT);const found=clients.find(c=>(c.name.toLowerCase().replace(/\s/g,"")=== name.toLowerCase().replace(/\s/g,"")||c.email?.toLowerCase()===name.toLowerCase())&&c.password===pass);if(found){LS.set("tbf_session",{id:found.id,role:"client"});onLogin(found);}else setErr("Name/email or password incorrect.");};
  return h("div",{style:{minHeight:"100vh",background:C.navy,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:20}},
    h("div",{style:{color:C.white,fontWeight:"bold",fontSize:28,letterSpacing:1}},"True Balance"),h("div",{style:{color:C.tealLight,fontSize:12,letterSpacing:3,marginBottom:36}},"FITNESS"),
    h("div",{style:{background:C.white,borderRadius:14,padding:28,width:"100%",maxWidth:360,boxShadow:"0 8px 32px rgba(0,0,0,0.35)"}},
      h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:16,marginBottom:22,textAlign:"center"}},"Sign In to Your Plan"),
      h(Fld,{label:"NAME OR EMAIL"},h(Inp,{value:name,onChange:setName,placeholder:"Full name or email address"})),
      h(Fld,{label:"PASSWORD"},h(Inp,{value:pass,onChange:setPass,placeholder:"Your password",type:"password"})),
      err&&h("div",{style:{color:C.red,fontSize:12,marginBottom:12,textAlign:"center"}},err),
      h(Btn,{onClick:handleLogin,color:C.teal,full:true,st:{marginBottom:12}},"Sign In"),
      h("button",{onClick:onRegister,style:{background:"none",border:`1.5px solid ${C.grayBorder}`,borderRadius:7,color:C.navy,fontSize:13,cursor:"pointer",width:"100%",padding:"10px 0",fontWeight:"bold",fontFamily:"Georgia,serif"}},"Create Account"),
      h("div",{style:{marginTop:16,fontSize:11,color:C.gray,textAlign:"center"}},"True Balance Fitness · 228-229-6865")
    )
  );
}

function App(){
  const [user,setUser]=useState(()=>{const s=LS.get("tbf_session");if(!s) return null;if(s.role==="trainer") return TRAINER_U;const clients=LS.get("tbf_clients",INIT);return clients.find(c=>c.id===s.id)||null;});
  const [screen,setScreen]=useState(()=>LS.get("tbf_session")?"app":"login");
  const [viewing,setViewing]=useState(null);
  const [showAdd,setShowAdd]=useState(false);
  const [clients,setClients]=useState(()=>LS.get("tbf_clients",INIT));
  const handleLogin=u=>{setUser(u);setScreen("app");};
  const handleLogout=()=>{setUser(null);setViewing(null);LS.del("tbf_session");setScreen("login");if(window.__tbf_signout)window.__tbf_signout();};
  const handleAddClient=c=>{const u=[...clients,c];setClients(u);LS.set("tbf_clients",u);setShowAdd(false);};
  const handleClientUpdate=updated=>{const list=clients.map(c=>c.id===updated.id?updated:c);setClients(list);LS.set("tbf_clients",list);if(viewing?.id===updated.id) setViewing(updated);};
  const isTrainer=user?.role==="trainer";
  if(screen==="register") return h(Register,{onRegister:handleLogin,onBack:()=>setScreen("login")});
  if(screen==="login"||!user) return h(Login,{onLogin:handleLogin,onRegister:()=>setScreen("register")});
  const activeClient=isTrainer?viewing:clients.find(c=>c.id===user.id)||user;
  return h("div",{style:{minHeight:"100vh",background:C.cream}},
    h("div",{style:{background:C.navy,padding:"14px 18px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 12px rgba(0,0,0,0.25)"}},
      h("div",null,h("div",{style:{color:C.white,fontWeight:"bold",fontSize:17}},isTrainer&&viewing?viewing.name:"True Balance Fitness"),h("div",{style:{color:C.tealLight,fontSize:11,marginTop:1}},isTrainer&&!viewing?"Trainer Dashboard":isTrainer?"Client View":user.focus?.split("|")[0]?.trim())),
      h("div",{style:{display:"flex",gap:8}},isTrainer&&viewing&&h(Btn,{onClick:()=>setViewing(null),color:C.navy2,small:true},"← Roster"),h(Btn,{onClick:handleLogout,color:C.red,small:true},"Sign Out"))
    ),
    showAdd&&h(AddClientForm,{onAdd:handleAddClient,onClose:()=>setShowAdd(false)}),
    isTrainer&&!viewing&&h(TrainerRoster,{clients:clients.filter(c=>c.role==="client"),onSelect:c=>setViewing(c),onAddClient:()=>setShowAdd(true)}),
    isTrainer&&viewing&&h(ClientView,{client:viewing,isTrainer:true,onClientUpdate:handleClientUpdate}),
    !isTrainer&&activeClient&&h(ClientView,{client:activeClient,isTrainer:false,onClientUpdate:handleClientUpdate})
  );
}


// ── Subscription gate ──────────────────────────────────────────────────────
function SubscribeScreen() {
  return h("div", {style:{minHeight:"100vh",background:C.navy,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24}},
    h("div", {style:{color:C.white,fontWeight:"bold",fontSize:28,letterSpacing:1}}, "True Balance"),
    h("div", {style:{color:C.tealLight,fontSize:12,letterSpacing:3,marginBottom:36}}, "FITNESS"),
    h("div", {style:{background:C.white,borderRadius:14,padding:28,width:"100%",maxWidth:360,boxShadow:"0 8px 32px rgba(0,0,0,0.35)"}},
      h("div", {style:{fontWeight:"bold",color:C.navy,fontSize:16,marginBottom:8,textAlign:"center"}}, "Choose Your Plan"),
      h("div", {style:{fontSize:13,color:C.gray,textAlign:"center",marginBottom:20,lineHeight:1.6}}, "Get full access to your corrective exercise programs, assessment tools, and nutrition plans."),
      h("div", {style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:16}},
        h("a", {href:"STRIPE_MONTHLY_LINK",target:"_blank",rel:"noreferrer",style:{textDecoration:"none",display:"block",background:C.tealLight,border:`1.5px solid ${C.teal}`,borderRadius:12,padding:"16px 12px",textAlign:"center"}},
          h("div", {style:{fontWeight:"bold",color:C.navy,fontSize:13,marginBottom:2}}, "Monthly"),
          h("div", {style:{fontSize:22,fontWeight:"bold",color:C.teal,marginBottom:2}}, "$XX"),
          h("div", {style:{fontSize:10,color:C.gray,marginBottom:10}}, "per month"),
          h("div", {style:{background:C.teal,color:C.white,borderRadius:6,padding:"6px",fontSize:11,fontWeight:"bold"}}, "Subscribe →")
        ),
        h("a", {href:"STRIPE_ANNUAL_LINK",target:"_blank",rel:"noreferrer",style:{textDecoration:"none",display:"block",background:C.tealLight,border:`1.5px solid ${C.teal}`,borderRadius:12,padding:"16px 12px",textAlign:"center",position:"relative"}},
          h("div", {style:{position:"absolute",top:-10,left:"50%",transform:"translateX(-50%)",background:C.teal,color:C.white,fontSize:9,padding:"2px 10px",borderRadius:20,fontWeight:"bold",whiteSpace:"nowrap"}}, "BEST VALUE"),
          h("div", {style:{fontWeight:"bold",color:C.navy,fontSize:13,marginBottom:2}}, "Annual"),
          h("div", {style:{fontSize:22,fontWeight:"bold",color:C.teal,marginBottom:2}}, "$XX"),
          h("div", {style:{fontSize:10,color:C.gray,marginBottom:10}}, "per year"),
          h("div", {style:{background:C.teal,color:C.white,borderRadius:6,padding:"6px",fontSize:11,fontWeight:"bold"}}, "Subscribe →")
        )
      ),
      h("div", {style:{fontSize:11,color:C.gray,textAlign:"center"}}, "True Balance Fitness · 228-229-6865")
    )
  );
}

// ── Supabase Auth Wrapper ──────────────────────────────────────────────────
function AuthGate() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authMode, setAuthMode] = useState("login");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!supabase) { setLoading(false); return; }
    supabase.auth.getSession().then(( {data: {session} }) => {
      setSession(session);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, s) => {
      setSession(s);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session || !supabase) return;
    supabase.from("profiles").select("*").eq("user_id", session.user.id).single()
      .then(( {data}) => { if (data) setProfile(data); });
  }, [session]);

  if (loading) return h("div", {style:{minHeight:"100vh",background:C.navy,display:"flex",alignItems:"center",justifyContent:"center"}},
    h("div", {style:{color:C.tealLight,fontFamily:"Georgia,serif",fontSize:14,letterSpacing:2}}, "LOADING...")
  );

  // If no Supabase configured, run the app directly (dev mode)
  if (!supabase) return h(App, null);

  if (!session) {
    return h("div", {style:{minHeight:"100vh",background:C.navy,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24}},
      h("div", {style:{color:C.white,fontWeight:"bold",fontSize:28,letterSpacing:1}}, "True Balance"),
      h("div", {style:{color:C.tealLight,fontSize:12,letterSpacing:3,marginBottom:36}}, "FITNESS"),
      h("div", {style:{background:C.white,borderRadius:14,padding:28,width:"100%",maxWidth:360,boxShadow:"0 8px 32px rgba(0,0,0,0.35)"}},
        h("div", {style:{fontWeight:"bold",color:C.navy,fontSize:16,marginBottom:20,textAlign:"center"}},
          authMode === "login" ? "Sign In to Your Plan" : "Create Account"
        ),
        h("input", {value:email, onChange:e=>setEmail(e.target.value), placeholder:"Email address", type:"email",
          style:{...istyle, marginBottom:12}}),
        h("input", {value:pw, onChange:e=>setPw(e.target.value), placeholder:"Password", type:"password",
          style:{...istyle, marginBottom:authMode==="signup"?12:16}}),
        authMode === "signup" && h("input", {value:code, onChange:e=>setCode(e.target.value), placeholder:"Access Code",
          style:{...istyle, marginBottom:16}}),
        err && h("div", {style:{color:C.red,fontSize:12,marginBottom:12,textAlign:"center"}}, err),
        h("button", {
          onClick: async () => {
            setErr("");
            if (authMode === "login") {
              const { error } = await supabase.auth.signInWithPassword({email, password:pw});
              if (error) setErr(error.message);
            } else {
              const { data:codeData } = await supabase.from("access_codes").select("*")
                .eq("code", code.trim().toUpperCase()).eq("used", false).single();
              if (!codeData) { setErr("Invalid or already used access code"); return; }
              const { error } = await supabase.auth.signUp({email, password:pw});
              if (error) { setErr(error.message); return; }
              await supabase.from("access_codes").update({used:true, used_by:email}).eq("code", code.trim().toUpperCase());
            }
          },
          style:{background:C.teal,color:C.white,border:"none",borderRadius:7,padding:"12px",fontFamily:"Georgia,serif",fontSize:13,fontWeight:"bold",cursor:"pointer",width:"100%",marginBottom:12}
        }, authMode === "login" ? "Sign In" : "Create Account"),
        h("button", {
          onClick: () => { setAuthMode(authMode==="login"?"signup":"login"); setErr(""); },
          style:{background:"none",border:`1.5px solid ${C.grayBorder}`,borderRadius:7,color:C.navy,fontSize:13,cursor:"pointer",width:"100%",padding:"10px 0",fontWeight:"bold",fontFamily:"Georgia,serif"}
        }, authMode === "login" ? "Sign Up with Access Code" : "← Back to Sign In"),
        h("div", {style:{marginTop:16,fontSize:11,color:C.gray,textAlign:"center"}}, "True Balance Fitness · 228-229-6865"),
        authMode === "login" && h("div", {style:{marginTop:20,borderTop:`1px solid ${C.grayBorder}`,paddingTop:16}},
          h("div", {style:{fontWeight:"bold",color:C.navy,fontSize:12,marginBottom:10,textAlign:"center"}}, "New Client? Choose Your Plan"),
          h("div", {style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}},
            h("a", {href:"STRIPE_MONTHLY_LINK",target:"_blank",rel:"noreferrer",style:{textDecoration:"none",display:"block",background:C.tealLight,border:`1px solid ${C.teal}44`,borderRadius:10,padding:"12px",textAlign:"center"}},
              h("div", {style:{fontSize:11,fontWeight:"bold",color:C.navy}}, "Monthly"),
              h("div", {style:{fontSize:18,fontWeight:"bold",color:C.teal,margin:"2px 0"}}, "$XX"),
              h("div", {style:{fontSize:10,color:C.gray,marginBottom:8}}, "per month"),
              h("div", {style:{background:C.teal,color:C.white,borderRadius:5,padding:"5px",fontSize:10,fontWeight:"bold"}}, "Subscribe →")
            ),
            h("a", {href:"STRIPE_ANNUAL_LINK",target:"_blank",rel:"noreferrer",style:{textDecoration:"none",display:"block",background:C.tealLight,border:`1px solid ${C.teal}44`,borderRadius:10,padding:"12px",textAlign:"center"}},
              h("div", {style:{fontSize:11,fontWeight:"bold",color:C.navy}}, "Annual"),
              h("div", {style:{fontSize:18,fontWeight:"bold",color:C.teal,margin:"2px 0"}}, "$XX"),
              h("div", {style:{fontSize:10,color:C.gray,marginBottom:8}}, "per year"),
              h("div", {style:{background:C.teal,color:C.white,borderRadius:5,padding:"5px",fontSize:10,fontWeight:"bold"}}, "Subscribe →")
            )
          )
        )
      )
    );
  }

  // Signed in — check subscription status
  if (profile && profile.subscription_status === "canceled") {
    return h(SubscribeScreen, null);
  }

  // All good — render the full app
  // Pass supabase signout to the app via a global
  window.__tbf_signout = () => supabase.auth.signOut();
  window.__tbf_user = session.user;
  return h(App, null);
}

export default AuthGate;
