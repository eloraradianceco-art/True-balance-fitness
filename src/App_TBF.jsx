import React, { createElement as h, useState, useEffect } from "react";
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

const VID={
  // Lower Body
  "Glute Bridge":"https://www.youtube.com/results?search_query=glute+bridge+form+tutorial",
  "Clamshell":"https://www.youtube.com/results?search_query=clamshell+exercise+form",
  "Hip Thrust":"https://www.youtube.com/results?search_query=barbell+hip+thrust+form",
  "Dumbbell Hip Thrust":"https://www.youtube.com/results?search_query=dumbbell+hip+thrust+form",
  "Bodyweight Squat":"https://www.youtube.com/results?search_query=bodyweight+squat+perfect+form",
  "Goblet Squat":"https://www.youtube.com/results?search_query=goblet+squat+form+tutorial",
  "Barbell Squat":"https://www.youtube.com/results?search_query=barbell+back+squat+form",
  "Bulgarian Split Squat":"https://www.youtube.com/results?search_query=bulgarian+split+squat+form",
  "Romanian Deadlift":"https://www.youtube.com/results?search_query=romanian+deadlift+form+tutorial",
  "Dumbbell Romanian Deadlift":"https://www.youtube.com/results?search_query=dumbbell+romanian+deadlift+form",
  "Barbell Romanian Deadlift":"https://www.youtube.com/results?search_query=barbell+romanian+deadlift+form",
  "Barbell Deadlift":"https://www.youtube.com/results?search_query=conventional+deadlift+form+tutorial",
  "Trap Bar Deadlift":"https://www.youtube.com/results?search_query=trap+bar+deadlift+form",
  "Single Leg Romanian Deadlift":"https://www.youtube.com/results?search_query=single+leg+RDL+form",
  "Leg Press":"https://www.youtube.com/results?search_query=leg+press+form+foot+placement",
  "Walking Lunge":"https://www.youtube.com/results?search_query=walking+lunge+form",
  "Reverse Lunge":"https://www.youtube.com/results?search_query=reverse+lunge+form+tutorial",
  "Lateral Lunge":"https://www.youtube.com/results?search_query=lateral+lunge+form",
  "Step Up":"https://www.youtube.com/results?search_query=step+up+exercise+form",
  "Hack Squat Machine":"https://www.youtube.com/results?search_query=hack+squat+machine+form",
  "Seated Hamstring Curl Machine":"https://www.youtube.com/results?search_query=seated+leg+curl+form",
  "Leg Extension Machine":"https://www.youtube.com/results?search_query=leg+extension+machine+form",
  "Standing Calf Raise":"https://www.youtube.com/results?search_query=standing+calf+raise+form",
  "Seated Calf Raise":"https://www.youtube.com/results?search_query=seated+calf+raise+form",
  "Good Morning":"https://www.youtube.com/results?search_query=good+morning+exercise+form",
  "Kettlebell Swing":"https://www.youtube.com/results?search_query=kettlebell+swing+form+tutorial",
  "Sumo Deadlift":"https://www.youtube.com/results?search_query=sumo+deadlift+form+tutorial",
  "Box Squat":"https://www.youtube.com/results?search_query=box+squat+form+tutorial",
  "Pause Squat":"https://www.youtube.com/results?search_query=pause+squat+form",
  // Upper Pull
  "Pull-Up":"https://www.youtube.com/results?search_query=pull+up+form+tutorial",
  "Chin-Up":"https://www.youtube.com/results?search_query=chin+up+form+tutorial",
  "Lat Pulldown":"https://www.youtube.com/results?search_query=lat+pulldown+form+tutorial",
  "Neutral Grip Lat Pulldown":"https://www.youtube.com/results?search_query=neutral+grip+lat+pulldown+form",
  "Barbell Row":"https://www.youtube.com/results?search_query=barbell+row+form+tutorial",
  "Dumbbell Row":"https://www.youtube.com/results?search_query=dumbbell+row+form",
  "Seated Cable Row":"https://www.youtube.com/results?search_query=seated+cable+row+form",
  "Cable Row":"https://www.youtube.com/results?search_query=cable+row+form+tutorial",
  "T-Bar Row":"https://www.youtube.com/results?search_query=T+bar+row+form",
  "Face Pull":"https://www.youtube.com/results?search_query=face+pull+exercise+form",
  "Band Pull Apart":"https://www.youtube.com/results?search_query=band+pull+apart+form",
  "Inverted Row":"https://www.youtube.com/results?search_query=inverted+row+form",
  "Straight Arm Pulldown":"https://www.youtube.com/results?search_query=straight+arm+pulldown+form",
  "Barbell Curl":"https://www.youtube.com/results?search_query=barbell+curl+form",
  "Dumbbell Curl":"https://www.youtube.com/results?search_query=dumbbell+curl+form",
  "Hammer Curl":"https://www.youtube.com/results?search_query=hammer+curl+form",
  "Preacher Curl":"https://www.youtube.com/results?search_query=preacher+curl+form",
  "Cable Curl":"https://www.youtube.com/results?search_query=cable+curl+form",
  "Incline Dumbbell Curl":"https://www.youtube.com/results?search_query=incline+dumbbell+curl+form",
  // Upper Push
  "Push-Up":"https://www.youtube.com/results?search_query=perfect+push+up+form",
  "Bench Press":"https://www.youtube.com/results?search_query=barbell+bench+press+form",
  "Dumbbell Bench Press":"https://www.youtube.com/results?search_query=dumbbell+bench+press+form",
  "Incline Bench Press":"https://www.youtube.com/results?search_query=incline+bench+press+form",
  "Incline Dumbbell Press":"https://www.youtube.com/results?search_query=incline+dumbbell+press+form",
  "Overhead Press":"https://www.youtube.com/results?search_query=overhead+press+form+tutorial",
  "Dumbbell Shoulder Press":"https://www.youtube.com/results?search_query=dumbbell+shoulder+press+form",
  "Lateral Raise":"https://www.youtube.com/results?search_query=lateral+raise+form+tutorial",
  "Lateral Raise — Both Arms":"https://www.youtube.com/results?search_query=lateral+raise+form+tutorial",
  "Front Raise":"https://www.youtube.com/results?search_query=front+raise+exercise+form",
  "Rear Delt Fly":"https://www.youtube.com/results?search_query=rear+delt+fly+form",
  "Cable Fly":"https://www.youtube.com/results?search_query=cable+fly+form",
  "Dumbbell Fly":"https://www.youtube.com/results?search_query=dumbbell+fly+form",
  "Chest Dip":"https://www.youtube.com/results?search_query=chest+dip+form",
  "Tricep Dip":"https://www.youtube.com/results?search_query=tricep+dip+form",
  "Skull Crusher":"https://www.youtube.com/results?search_query=skull+crusher+form",
  "Tricep Pushdown":"https://www.youtube.com/results?search_query=tricep+pushdown+form",
  "Overhead Tricep Extension":"https://www.youtube.com/results?search_query=overhead+tricep+extension+form",
  "Tricep Kickback":"https://www.youtube.com/results?search_query=tricep+kickback+form",
  "Close Grip Bench Press":"https://www.youtube.com/results?search_query=close+grip+bench+press+form",
  "Landmine Press":"https://www.youtube.com/results?search_query=landmine+press+form",
  // Core
  "Plank":"https://www.youtube.com/results?search_query=plank+form+tutorial",
  "Side Plank":"https://www.youtube.com/results?search_query=side+plank+form",
  "Dead Bug":"https://www.youtube.com/results?search_query=dead+bug+exercise+form",
  "Bird Dog":"https://www.youtube.com/results?search_query=bird+dog+exercise+form",
  "Pallof Press":"https://www.youtube.com/results?search_query=pallof+press+form",
  "Suitcase Carry":"https://www.youtube.com/results?search_query=suitcase+carry+exercise+form",
  "Farmers Carry":"https://www.youtube.com/results?search_query=farmers+carry+form",
  "Ab Wheel Rollout":"https://www.youtube.com/results?search_query=ab+wheel+rollout+form",
  "Hollow Body Hold":"https://www.youtube.com/results?search_query=hollow+body+hold+form",
  "Hanging Leg Raise":"https://www.youtube.com/results?search_query=hanging+leg+raise+form",
  "Cable Crunch":"https://www.youtube.com/results?search_query=cable+crunch+form",
  "Russian Twist":"https://www.youtube.com/results?search_query=russian+twist+form",
  "McGill Curl Up":"https://www.youtube.com/results?search_query=mcgill+curl+up+form",
  // Corrective / Activation
  "Wall Angels":"https://www.youtube.com/results?search_query=wall+angels+exercise+form",
  "Chin Tucks":"https://www.youtube.com/results?search_query=chin+tuck+exercise+form",
  "Thoracic Extension":"https://www.youtube.com/results?search_query=thoracic+extension+foam+roller",
  "Hip 90/90 Stretch":"https://www.youtube.com/results?search_query=90+90+hip+stretch+form",
  "World's Greatest Stretch":"https://www.youtube.com/results?search_query=worlds+greatest+stretch+form",
  "Kneeling Hip Flexor Stretch":"https://www.youtube.com/results?search_query=kneeling+hip+flexor+stretch",
  "TVA Draw-In":"https://www.youtube.com/results?search_query=TVA+draw+in+exercise",
  "TVA Draw-In — Supine":"https://www.youtube.com/results?search_query=TVA+draw+in+supine",
  "90/90 Breathing":"https://www.youtube.com/results?search_query=90+90+breathing+exercise",
  "Diaphragmatic Breathing":"https://www.youtube.com/results?search_query=diaphragmatic+breathing+exercise",
  "Turkish Get-Up":"https://www.youtube.com/results?search_query=turkish+get+up+form+tutorial",
  "Cross-Crawl":"https://www.youtube.com/results?search_query=cross+crawl+exercise+neurological",
  "Foam Roll Upper Back":"https://www.youtube.com/results?search_query=foam+roll+upper+back+thoracic",
  "Foam Roll IT Band":"https://www.youtube.com/results?search_query=foam+roll+IT+band",
  "Foam Roll Quads":"https://www.youtube.com/results?search_query=foam+roll+quads+form",
  "Pec Minor Release — Lacrosse Ball":"https://www.youtube.com/results?search_query=pec+minor+release+lacrosse+ball",
};

const CUES={"Glute Bridge":"Lie on your back, knees bent, feet flat. Before lifting ANYTHING — squeeze your butt cheeks together first like cracking a walnut. THEN push your hips up. Hold 2 seconds. Feel this in your butt, not your lower back. Think: SQUEEZE then LIFT.","Clamshell":"Lie on your side, knees bent at 45 degrees, feet touching. Keep feet together the whole time. Open your top knee toward the ceiling — HIPS STAY STILL. Don't rock backward. Feel the burn on the outside of your hip.","Dead Bug":"Lie on your back. Press your lower back FLAT to the floor. Arms up, knees up, shins parallel to floor. Slowly lower your right arm and left leg at the SAME TIME. Back must stay flat. Bring them back. Switch sides. Exhale as you lower.","Chin Tucks":"Sit tall. Slide your head straight BACK — not down, not up — making a double chin. Feel a gentle stretch at the base of your skull. Hold 2 seconds. Think turtle pulling its head into its shell — straight back.","Wall Angels":"Stand with your back against a wall. Head, shoulder blades, and lower back ALL touch the wall. Arms up like a goalpost, backs of hands on wall. Slowly slide arms up like a snow angel, keeping everything touching the wall.","Prone Y Raise":"Lie face down. Arms in a Y shape, thumbs up. Squeeze shoulder blades DOWN your back first — like putting them in your back pockets. THEN lift your arms. Feel this under your shoulder blades, not in your neck.","Face Pull — Cable or Band":"Pull toward your EARS — not your nose — while spreading elbows wide and high. At the end, elbows are higher than wrists. Hold 1 second. Feel the squeeze between your shoulder blades.","Sidelying External Rotation — Bilateral":"Lie on your side. Pin top elbow against your ribs — it does NOT leave your side. Bend elbow to 90 degrees. Rotate forearm UP like opening a gate. Feel this in the back of your shoulder.","Serratus Anterior — Wall Push-Up Plus":"Hands on wall at shoulder height. Push toward wall — at the very END, push extra and let shoulder blades spread apart and wrap around your rib cage. That extra push is the plus. Hold 1 second.","TVA Draw-In — Supine":"Without holding your breath, gently draw your belly button toward your spine about 20% — like bracing for a light poke. Breathe NORMALLY while holding. Not a crunch. A deep quiet squeeze.","Kneeling Hip Flexor Stretch":"Kneel on one knee. Tuck your pelvis under — like you have a tail between your legs. Feel the stretch at the very front top of your hip. Don't lean forward — stand tall and tuck under.","Doorway Pec Stretch":"Stand in a doorway. Arm at 90 degrees, forearm on frame. Step same-side foot forward and let your chest rotate away. Feel the stretch across your chest. Hold at least 45 seconds.","Thoracic Extension — Foam Roller":"Place roller across your MID-back between shoulder blades — NOT lower back. Support your head. Gently arch over the roller and breathe in. Work slowly up and down between shoulder blades and base of neck only.","Hamstring Bridge — Heel Drive":"Lie on back. Slide feet FURTHER away than normal bridge. Toes slightly inward. Drive heels into floor like dragging them toward your body. This fires hamstrings. THEN lift hips.","Sit-to-Stand":"Sit on edge of chair. Feet flat, hip-width apart. Lean your chest FORWARD over your knees first. Squeeze glutes and push through heels to stand. No rocking. No momentum.","Pallof Press — Band":"Anchor band at belly button height. Stand sideways. Hold with both hands at chest. Push hands straight out and HOLD 2 seconds. The band wants to twist you — resist that rotation completely.","Lateral Raise — Both Arms":"Lead with your ELBOWS — like pushing wings out to the sides. Lift to shoulder height. Pinky slightly higher than thumb at top. Lower SLOWLY — 3 full seconds down.","Seated Scapular Retraction — Lower Trap":"Sit upright, lean slightly forward. Pull shoulder blades DOWN and BACK — like sliding them into your back pockets. Not just back — DOWN and back. Hold 2 seconds.","Lat Pulldown":"Before pulling — push chest up slightly and let shoulder blades DROP. Pull bar toward upper chest, leading with ELBOWS. Control the return slowly — 3 full seconds. Feel this along the sides of your back.","Seated Cable Row — Neutral Grip":"Extend arms fully forward — feel shoulder blades spread apart. Pull elbows straight back. At the end, shoulder blades squeeze TOGETHER and DOWN. Torso stays upright. Return slowly.","Bird Dog":"On all fours, hands under shoulders, knees under hips. Extend right arm forward and left leg back SIMULTANEOUSLY. Reach long. Hips stay SQUARE to the floor. Hold 2 seconds.","Forearm Plank":"Forearms on floor, elbows under shoulders. Body in a straight line from heels to head. Squeeze quads, squeeze glutes, draw belly button gently in. One rigid plank of wood.","Standing Glute Squeeze":"Stand tall. Squeeze BOTH glutes as hard as you can — like holding a quarter between your cheeks. Hold 10 full seconds. Do this every single time you stand from a chair throughout your day.","Zone 2 — Incline Walk / Bike":"Zone 2 means talking is slightly uncomfortable but totally possible. If you can chat effortlessly — go harder. If you can't finish a sentence — slow down. Target: 120–140 heartbeats per minute. Steady the entire time.","Dumbbell Bench Press":"Lower slowly until upper arms just below parallel — elbows at 45 degrees from body. Feel stretch across chest. Push up and slightly toward each other at the top. Breathe out as you push.","Push-Up":"Hands slightly wider than shoulders, body in a straight line. Lower slowly 2–3 seconds, elbows at 45 degrees. Chest nearly touches floor. Push the floor AWAY from you back to start."};

const PROG={"Glute Bridge":["Single Leg Glute Bridge","Band Glute Bridge","Dumbbell Hip Thrust","Barbell Glute Bridge","Barbell Hip Thrust"],"Clamshell":["Clamshell with Band","Mini Band Isometric Clamshell","Side Lying Leg Ext"],"Lateral Raise — Both Arms":["Lateral Raise — 5 lb DB","Dumbbell Lateral Raise","Cable Lateral Raise","Lateral Raise Machine"],"Wall Angels":["Single Arm Wall Angel","Wall Angels with Band"],"Prone Y Raise":["Prone Y Raise — Light DB","Lower Trap Lv2","Lower Trap Lv3","TRX Y Deltoid Fly"],"Sidelying External Rotation — Bilateral":["Cable Standing External Shoulder Rotation","Band Standing External Shoulder Rotation"],"Face Pull — Cable or Band":["Cable Face Pull","Cable Kneeling Face Pull","Band Face Pull to Y"],"Serratus Anterior — Wall Push-Up Plus":["Serratus Plank Level Two","Cable Seated Scapular Protraction"],"Seated Cable Row — Neutral Grip":["Dumbbell Single Arm Bent Over Row","Barbell Bent Over Row","Scapular Retraction Inverted Row"],"Lat Pulldown":["Neutral Grip Lat Pulldown","Machine Assisted Pull Up","Chin Up"],"Dead Bug":["Deadbug Lv1","Deadbug Lv2","Deadbug Lv3"],"TVA Draw-In — Supine":["TVA Draw-In — Seated","TVA Draw-In — Standing","Pallof Press — Band"],"Chin Tucks":["Cervical Neck Retractions Lv2","Neck Retractions with Swiss Ball"],"Seated Scapular Retraction — Lower Trap":["Lower Trap Lv1","Lower Trap Lv2","Lower Trap Lv3","Prone Y Raise"],"Kneeling Hip Flexor Stretch":["Thomas Stretch","90/90 Hip External Rotation Stretch","Couch Stretch"],"Hamstring Bridge — Heel Drive":["Exercise Ball Hamstring Curl","Prone Lying Hamstring Curl Machine"],"Sit-to-Stand":["Sit-to-Stand — One Hand","Sit-to-Stand — No Hands","Body Weight Squat"],"Pallof Press — Band":["Cable Half Kneeling Pallof Press","Cable Split Stance Pallof Press"],"Forearm Plank":["High Plank","Plank with Leg Lift","Copenhagen Plank"],"Bird Dog":["Bird-Dog Off Bench","Dead Bug"],"Dumbbell Bench Press":["Barbell Bench Press","Dumbbell Incline Bench Press"],"Push-Up":["Push-Up to Side Plank","Close Grip Push Up","Decline Push Up"]};


const EX_EXTENDED2 = [
  // LOWER - More variations
  ...["Hack Squat Machine","V-Squat Machine","Leg Press — 45 Degree","Leg Press — Horizontal","Leg Press — Single Leg","Leg Extension — Unilateral","Leg Curl — Prone","Leg Curl — Seated","Leg Curl — Standing","Nordic Curl Eccentric","Glute Ham Developer","Reverse Hyper Machine","Hip Abduction Machine — Lying","Hip Extension Machine","Adductor Machine","Abductor Machine","Cable Hip Flexion","Cable Hip Extension","Cable Hip Abduction","Cable Hip Adduction","Banded Clamshell","Banded Donkey Kick","Banded Fire Hydrant","Banded Squat","Banded Romanian Deadlift","Mini Band Walk — Forward","Mini Band Walk — Backward","Lateral Band Walk — Low","Lateral Band Walk — High","X-Band Walk","Monster Walk — Diagonal","Resistance Band Glute Bridge","Resistance Band Hip Thrust","Resistance Band Kickback","Resistance Band Side Step","Resistance Band Squat to Row"].map(n=>({name:n,cat:"Lower"})),
  ...["Bulgarian Split Squat — Front Foot Elevated","Bulgarian Split Squat — Deficit","Dumbbell Step Up — High Box","Dumbbell Step Up — Lateral","Barbell Step Up","Barbell Lateral Lunge","Barbell Reverse Lunge","Barbell Curtsy Lunge","Barbell Walking Lunge","Smith Machine Lunge","Smith Machine Split Squat","Smith Machine Bulgarian Split Squat","Goblet Squat — Pulse","Goblet Squat — Pause","Goblet Squat — 1.5 Rep","Box Squat — Pause","Tempo Romanian Deadlift","Paused Romanian Deadlift","3-Second Eccentric Squat","3-Second Eccentric RDL","1.5 Rep Romanian Deadlift","Single Leg Press","Leg Press — Narrow Stance","Leg Press — Wide Stance","Leg Press — High Foot","Leg Press — Low Foot","Leg Press — Single Leg Staggered","Reverse Nordic Curl","Tibialis Raise — Loaded","Calf Raise — Single Leg Eccentric"].map(n=>({name:n,cat:"Lower"})),

  // UPPER PULL - More
  ...["Chest Supported T-Bar Row","Smith Machine Bent Over Row","Cable Face Pull — Rope High","Cable Face Pull — Rope Mid","Cable Rear Delt Row","Cable Reverse Fly","Cable External Rotation — Low","Cable External Rotation — High","Cable Internal Rotation","Cable Shoulder ER — 90/90","Band Pull Apart — Overhand","Band Pull Apart — Underhand","Band Pull Apart — Overhead","Band No Money Drill","Band W Raise","Band T Raise","Band Y Raise","Band I Raise","TRX Row — Supinated","TRX Row — Pronated","TRX Row — Neutral","TRX Y","TRX T","TRX W","TRX Bicep Curl","TRX Tricep Extension","Ring Row — Supinated","Ring Row — Pronated","Gymnastics Ring Pull-Up","Gymnastics Ring Chin-Up","Rope Climb — Legless","Rope Climb — With Legs","Towel Row","Fat Grip Row","Axle Bar Row"].map(n=>({name:n,cat:"Upper Pull"})),
  ...["Incline Curl — Unilateral","Prone Incline Curl — Bilateral","High Cable Curl — Bilateral","High Cable Curl — Unilateral","Low Cable Curl — Single Arm","Crossbody Cable Curl","Cable Drag Curl","Banded Curl — Supinating","Banded Hammer Curl","Machine Bicep Curl — Bilateral","Machine Bicep Curl — Unilateral","Reverse Barbell Curl","Reverse EZ Bar Curl","Reverse Cable Curl — Bilateral","Reverse Dumbbell Curl","Wrist Roller","Plate Curl","Towel Curl","Finger Curl","Barbell Hold — Timed","Pinch Grip — Plate","Hub Lift","Thick Bar Deadlift","Hex Dumbbell Hold","Bottle Pinch Grip"].map(n=>({name:n,cat:"Upper Pull"})),

  // UPPER PUSH - More  
  ...["Incline Barbell Press — Narrow","Incline Barbell Press — Wide","Incline Dumbbell Press — Neutral Grip","Incline Cable Fly — Low","Incline Cable Fly — Mid","Decline Dumbbell Fly","Decline Cable Fly","Decline Smith Machine Press","Dumbbell Pullover — Across Bench","Cable Pullover — Single Arm","Pec Dec — Narrow","Pec Dec — Wide","Machine Press — Unilateral","Machine Fly — Unilateral","Smith Machine Incline Press","Smith Machine Decline Press","Floor Fly — Dumbbell","Squeeze Press — Incline","Hip Thrust Press","Landmine Chest Press — Kneeling","Half-Kneeling Landmine Press","Bottoms Up Kettlebell Press — Bilateral","Kettlebell Press — Single Arm","Kettlebell Press — Alternating","Z Press — Dumbbell","Z Press — Kettlebell"].map(n=>({name:n,cat:"Upper Push"})),
  ...["Lateral Raise — Bent Arm","Lateral Raise — Cable — Behind","Front Raise — Alternating","Front Raise — Supinating","Front Raise — Pronating","Dumbbell Scarecrow","Cable Scarecrow","Dumbbell Rear Delt — Seated","Dumbbell Rear Delt — Prone","Cable Rear Delt — Bilateral","Chest Press to Fly — Cable","Low-to-High Fly — Cable","High-to-Low Fly — Cable","Single Arm Overhead Press — Seated","Single Arm Overhead Press — Standing","Single Arm Overhead Press — Half-Kneeling","Dumbbell Arnold Press — Seated","Dumbbell Arnold Press — Standing","Dumbbell Military Press","Barbell Strict Press","Barbell Push Press","Dumbbell Push Press","Kettlebell Push Press","Handstand Push-Up — Wall","Handstand Push-Up — Freestanding"].map(n=>({name:n,cat:"Upper Push"})),
  ...["Overhead Tricep Extension — Single Arm Cable","Overhead Tricep Extension — Double Rope","Overhead Tricep Extension — Band","Cable Pushdown — Straight Bar","Cable Pushdown — Neutral Bar","Cable Pushdown — D-Handle","Skull Crusher — Incline","Skull Crusher — Decline","Skull Crusher — Smith Machine","JM Press — Dumbbell","Tricep Dip — Rings Weighted","Tricep Kickback — Incline","Tricep Kickback — Cable — Both Arms","Tricep Extension — Single Arm Machine","Close Grip Push-Up — Elevated Feet","Diamond Push-Up — Elevated Feet","Bench Dip — Weighted","Tricep Destroyer Set","21s Tricep","Tate Press — Incline","Rolling DB Extension","Band Overhead Tricep","Band Pressdown","Rope Pushdown Supinated","Underhand Pushdown"].map(n=>({name:n,cat:"Upper Push"})),

  // CORE - More
  ...["Weighted Hollow Hold","Weighted L-Sit","Tuck Planche Hold","Straddle Planche Hold","Front Lever Hold","Back Lever Hold","Human Flag Hold","Dragon Flag — Negative","Ab Wheel — Single Arm","Ab Wheel — Feet Elevated","GHD Sit-Up — Weighted","Decline Sit-Up — Weighted","Decline Sit-Up — Twist","Roman Chair Sit-Up","Roman Chair Side Bend","Hanging Leg Raise — Straight","Hanging Leg Raise — Bent","Hanging Knee Raise","Hanging Pike","Toes to Bar","Knees to Elbows","Windshield Wiper — Lying","V-Up — Weighted","Hollow Rock — Weighted","Superman — Weighted","Back Extension — GHD","Back Extension — Hyperextension","Reverse Hyperextension — Hanging","45-Degree Back Extension","Seated Good Morning","Band Pull-Through — Squat","McGill Big 3 — Bird Dog","McGill Big 3 — Curl-Up","McGill Big 3 — Side Plank"].map(n=>({name:n,cat:"Core"})),
  ...["Anti-Rotation Press — Band","Kneeling Anti-Rotation Press","Half-Kneeling Anti-Rotation Press","Tall Kneeling Cable Chop","Tall Kneeling Cable Lift","Cable Rotation — Low","Cable Rotation — Mid","Cable Rotation — High","Medicine Ball Chest Pass","Medicine Ball Overhead Throw","Medicine Ball Scoop Toss","Medicine Ball Soccer Throw","Medicine Ball Hip Toss","Rotational Medicine Ball Slam","Medicine Ball Wall Ball — Rotational","Landmine Twist — Bilateral","Landmine Twist — Unilateral","Landmine Rainbow","Sandbag Rotation","Sandbag Slam","Slam Ball Rotational Slam","Banded Pallof Press — Overhead","Banded Pallof Press — Row","Half-Kneeling Pallof Press — Overhead","Cable Pallof Press — Kneeling Rotation"].map(n=>({name:n,cat:"Core"})),

  // ACTIVATION - More
  ...["Supine Dead Bug — Arm Only","Supine Dead Bug — Leg Only","Supine Dead Bug — Contralateral","Supine Dead Bug — Band","Quadruped Bird Dog — Band","Quadruped Bird Dog — Weight","Side Lying Clam — Band Light","Side Lying Clam — Band Heavy","Side Lying Clam — 3-Second Hold","Side Lying Hip Abduction — Band","Side Lying Hip ER — Band","Side Lying Hip IR — Band","Prone Hip ER — Band","Prone Hip Abduction — Band","Prone Cobra","Prone Cobra — Hands Behind Head","Prone Y — Light Dumbbell","Prone T — Light Dumbbell","Prone W — Light Dumbbell","Prone I — Light Dumbbell","Prone IYT — Band","Supine Hip Flexor Activation","90/90 Hip Switch","90/90 Internal Rotation","90/90 External Rotation","Hip CARs — Supine","Shoulder CARs — Wall Supported","Thoracic Rotation — Quadruped","Cat-Cow — Segmental","Pelvic Tilt — Supine","Pelvic Tilt — Quadruped","Rib Flare Correction","Diaphragmatic Breathing","Crocodile Breathing","Box Breathing"].map(n=>({name:n,cat:"Activation"})),
  ...["Arch Lift — Foot Intrinsics","Toe Spread — Foot Intrinsics","Towel Scrunch","Short Foot Exercise","Single Leg Balance — Eyes Closed","Single Leg Balance — Unstable Surface","Tandem Stance Balance","BOSU Balance — Bilateral","BOSU Balance — Single Leg","Balance Board — Bilateral","Balance Board — Single Leg","Rocker Board Balance","Stability Disc Balance","Proprioceptive Taping Drill","Y-Balance Test — Anterior","Y-Balance Test — Posterolateral","Y-Balance Test — Posteromedial","Star Excursion — Anterior","Star Excursion — Medial","Star Excursion — Posterior","Gait Training — Slow","Gait Training — Side Step","Gait Training — Cross Step","Stork Stand","Clock Balance Drill"].map(n=>({name:n,cat:"Activation"})),

  // MOBILITY - More
  ...["PNF Hamstring Stretch — Contract-Relax","PNF Hip Flexor Stretch","PNF Pec Stretch","PNF Shoulder IR","PNF Hip ER","FRC Hip CARs","FRC Shoulder CARs","FRC Thoracic CARs","FRC Ankle CARs","FRC Wrist CARs","FRC Neck CARs","Loaded Progressive Stretching — Hamstring","Loaded Progressive Stretching — Hip Flexor","Loaded Progressive Stretching — Adductor","Loaded Progressive Stretching — Shoulder","Loaded Progressive Stretching — Thoracic","Isometric Neck Flexion Hold","Isometric Neck Extension Hold","Isometric Neck Lateral Flexion Hold","Isometric Hip Flexor Hold","Isometric Hamstring Hold","Isometric Pec Hold","Isometric Glute Hold","Isometric Adductor Hold","Isometric Abductor Hold"].map(n=>({name:n,cat:"Mobility"})),
  ...["Doorway Stretch — High","Doorway Stretch — Low","Corner Chest Stretch","Wall Slide — Thoracic","Wall Slide — Shoulder","Sleeper Stretch — Mild","Sleeper Stretch — Aggressive","Cross Body Stretch — Standing","Cross Body Stretch — Supine","Supine Thoracic Extension over Roller","Supine Thoracic Rotation","Seated Thoracic Rotation","Standing Thoracic Rotation","Cat-Cow — Slow","Cat-Cow — Rhythmic","Child's Pose — Arms Extended","Child's Pose — Arms to Side","Child's Pose — Thread the Needle","Prayer Stretch","Prayer Stretch — Bilateral","Puppy Pose","Lizard Pose","Lizard Pose with Rotation","Half Split","Full Split Attempt","Standing Half Split"].map(n=>({name:n,cat:"Mobility"})),

  // INTEGRATION - More
  ...["Hang Clean and Jerk","Barbell Complex — 5 Movement","Barbell Complex — 6 Movement","Dumbbell Complex — Romanian Style","Dumbbell Complex — Squat Focus","Kettlebell Complex — Swing Based","Kettlebell Complex — Press Based","Sandbag Complex","Sandbag Carry to Squat","Atlas Stone to Platform","Log Clean and Press","Axle Bar Complex","Medicine Ball Complex — Ground Based","Medicine Ball Complex — Wall Based","Resistance Band Complex","Bodyweight Flow — Lower Focus","Bodyweight Flow — Upper Focus","Bodyweight Flow — Full Body","Animal Flow — Crab Reach","Animal Flow — Ape","Animal Flow — Beast","Animal Flow — Scorpion Reach","Animal Flow — Traveling Beast","Parkour — Precision Jump","Parkour — Rail Balance"].map(n=>({name:n,cat:"Integration"})),
  ...["Loaded Carry — Bilateral Farmer","Loaded Carry — Offset Farmer","Loaded Carry — Overhead Bilateral","Loaded Carry — Overhead Unilateral","Loaded Carry — Waiter Bilateral","Loaded Carry — Waiter Unilateral","Loaded Carry — Zercher","Loaded Carry — Goblet","Loaded Carry — Cross Body","Loaded Carry — Sandbag Bear Hug","Loaded Carry — Suitcase Bilateral","Loaded Carry — Yoke","Loaded Carry — Belt Squat Walk","Sled Pull — Overhead Bilateral","Sled Pull — Overhead Unilateral","Sled Row — Standing","Sled Row — Seated","Sled Push — Athletic Stance","Sled Push — Sprint Stance","Prowler Push — High Handles","Prowler Push — Low Handles","Prowler Sprint","Assault Bike Sprint","Ski Erg Sprint","Row Erg Sprint"].map(n=>({name:n,cat:"Integration"})),

  // CARDIO - More
  ...["Sprint — Flat Ground","Sprint — Hill","Sprint — Resisted Band","Sprint — Weighted Vest","Sprint — Parachute","Interval Run — 400m","Interval Run — 800m","Interval Run — Mile Repeats","Tempo Run","Long Slow Distance Run","Fartlek Run","Hill Run — Uphill","Hill Run — Downhill","Trail Run","Sand Run","Stadium Stairs","Bleacher Run","Cone Sprint — 5 Cones","Cone Sprint — Star Pattern","Ladder Run — Forward","Ladder Run — Backward","Ladder Run — Lateral Shuffle","Reactive Sprint — Visual Cue","Reactive Sprint — Auditory Cue","Reactive Agility Drill"].map(n=>({name:n,cat:"Cardio"})),
  ...["HIIT Circuit — Upper Lower","HIIT Circuit — Push Pull","HIIT Circuit — Full Body","AMRAP Circuit — 5 Movements","AMRAP Circuit — 8 Movements","Tabata — Squat","Tabata — Push-Up","Tabata — Burpee","Tabata — Row","Tabata — Air Bike","EMOM — Squat Focus","EMOM — Pull Focus","EMOM — Push Focus","EMOM — Mixed","For Time — Benchmark","Bear Crawl — Forward","Bear Crawl — Backward","Bear Crawl — Lateral","Crab Walk — Forward","Crab Walk — Lateral","Inchworm — Forward","Inchworm — with Push-Up","Lunge Walk — Overhead Reach","Duck Walk","Broad Jump — Continuous","Frog Jump","Lateral Bound — Continuous","Single Leg Hop — Continuous","Box Step — Continuous","Step Touch — Cardio","Jumping Jack — Weighted Vest","Jumping Jack — Alternating","Star Jump","Tuck Jump — Continuous","Split Jump — Continuous"].map(n=>({name:n,cat:"Cardio"})),
];

// EXERCISE_DB — full structured exercise database with cues, video, progressions
const EXERCISE_DB=[
  // ── LOWER BODY ─────────────────────────────────────────────────────────
  {name:"Bodyweight Squat",cat:"Lower",region:"Legs",pattern:"Squat",muscles:["Quads","Glutes"],secondary:["Core"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=bodyweight+squat+form",
   setup:"Stand with feet shoulder-width apart, toes slightly out.",
   action:"Push hips back and sit down like a chair is behind you. Keep your chest up. Push through your whole foot to stand.",
   feel:"Quads and glutes. Chest stays proud.",
   breath:"Breathe in going down. Blow out coming up.",
   mistakes:["Knees caving in","Chest falling forward","Heels lifting"],
   regression:["Chair Squat","Assisted Squat"],progression:["Goblet Squat","Tempo Squat"]},
  {name:"Goblet Squat",cat:"Lower",region:"Legs",pattern:"Squat",muscles:["Quads","Glutes"],secondary:["Core","Adductors"],equip:["Dumbbell","Kettlebell"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=goblet+squat+form",
   setup:"Hold weight at your chest like a big cup. Feet shoulder-width, toes out slightly.",
   action:"Sit back and down — slow and controlled. Drive through your heels to stand tall.",
   feel:"Legs, glutes, and core staying tight.",
   breath:"Breathe in down. Blow out up.",
   mistakes:["Weight drifting away from chest","Chest dropping","Heels coming up"],
   regression:["Bodyweight Squat"],progression:["Dumbbell Goblet Split Squat","Front Squat"]},
  {name:"Barbell Squat",cat:"Lower",region:"Legs",pattern:"Squat",muscles:["Quads","Glutes"],secondary:["Hamstrings","Core"],equip:["Barbell"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=barbell+back+squat+form",
   setup:"Bar across upper traps. Feet shoulder-width, toes out. Brace your core.",
   action:"Break at hips and knees simultaneously. Descend until thighs are parallel. Drive through the floor.",
   feel:"Full leg — quads, glutes, hamstrings all working.",
   breath:"Deep breath and brace before descent. Exhale at the top.",
   mistakes:["Knees caving","Good morning squat (chest forward)","Rising on toes"],
   regression:["Goblet Squat"],progression:["Tempo Squat","Pause Squat","Box Squat"]},
  {name:"Dumbbell Goblet Split Squat",cat:"Lower",region:"Legs",pattern:"Lunge",muscles:["Quads","Glutes"],secondary:["Core"],equip:["Dumbbell"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=split+squat+dumbbell+form",
   setup:"Stand in a split stance — feet like two train tracks, not a tightrope. Weight at chest or sides.",
   action:"Drop your back knee straight down toward the floor. Drive through your front heel to come back up.",
   feel:"Front leg working — mostly quads and glute.",
   breath:"Breathe in going down. Breathe out coming up.",
   mistakes:["Leaning too far forward","Feet too close together","Knee caving in"],
   regression:["Bodyweight Split Squat"],progression:["Rear Foot Elevated Split Squat","Walking Lunge"]},
  {name:"Dumbbell Romanian Deadlift",cat:"Lower",region:"Posterior Chain",pattern:"Hip Hinge",muscles:["Hamstrings","Glutes"],secondary:["Back","Core"],equip:["Dumbbell"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=dumbbell+romanian+deadlift+form",
   setup:"Stand tall with dumbbells in front of thighs. Soft bend in knees. Flat back.",
   action:"Push hips back like closing a car door with your butt. Weights stay close to your legs. Go until you feel a strong hamstring stretch. Stand by squeezing your glutes.",
   feel:"Deep stretch in hamstrings. Glutes working at the top.",
   breath:"Breathe in on the way down. Breathe out as you stand.",
   mistakes:["Rounding the back","Bending knees too much","Weights drifting forward"],
   regression:["Dowel Hip Hinge","Hip Hinge to Wall"],progression:["Barbell RDL","Single Leg RDL"]},
  {name:"Barbell Romanian Deadlift",cat:"Lower",region:"Posterior Chain",pattern:"Hip Hinge",muscles:["Hamstrings","Glutes"],secondary:["Back","Core"],equip:["Barbell"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=barbell+romanian+deadlift",
   setup:"Bar at hip height. Overhand grip slightly wider than hips. Stand tall, small knee bend.",
   action:"Hinge at the hip — push them back. Bar drags down your legs. Feel the stretch. Squeeze glutes to return.",
   feel:"Massive hamstring stretch. Strong glute contraction at the top.",
   breath:"Big breath and brace. Exhale at the top.",
   mistakes:["Rounding upper back","Letting bar drift away","Locking knees out too early"],
   regression:["Dumbbell Romanian Deadlift"],progression:["Single Leg RDL","Deficit RDL"]},
  {name:"Glute Bridge",cat:"Lower",region:"Glutes",pattern:"Hip Extension",muscles:["Glutes","Hamstrings"],secondary:["Core"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=glute+bridge+form+cue",
   setup:"Lie on your back, knees bent, feet flat. Feet hip-width.",
   action:"Squeeze glutes FIRST — like cracking a walnut — THEN push hips up. Hold 2 seconds at top. Lower slowly.",
   feel:"Glutes doing the work — NOT your lower back.",
   breath:"Exhale as you lift. Inhale as you lower.",
   mistakes:["Pushing through toes","Arching low back","Not squeezing glutes first"],
   regression:["Short Range Bridge"],progression:["Single-Leg Glute Bridge","Hip Thrust","Band Glute Bridge"]},
  {name:"Dumbbell Hip Thrust",cat:"Lower",region:"Glutes",pattern:"Hip Extension",muscles:["Glutes"],secondary:["Hamstrings","Core"],equip:["Bench","Dumbbell"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=dumbbell+hip+thrust+form",
   setup:"Upper back on bench. Dumbbell on hips. Feet flat, hip-width. Chin slightly tucked.",
   action:"Drop hips toward floor. Drive through heels and squeeze glutes hard at the top. Do NOT let the low back arch.",
   feel:"Glutes maximally contracted at the top.",
   breath:"Breathe in at the bottom. Blast out at the top.",
   mistakes:["Arching lower back","Pushing through toes","Feet too far away"],
   regression:["Glute Bridge"],progression:["Barbell Hip Thrust","Single-Leg Hip Thrust"]},
  {name:"Leg Press",cat:"Lower",region:"Legs",pattern:"Squat",muscles:["Quads","Glutes"],secondary:["Hamstrings"],equip:["Machine"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=leg+press+form",
   setup:"Feet shoulder-width on platform. Back flat against pad. Do not lock out knees at top.",
   action:"Lower platform until knees are at 90 degrees. Drive through heels to push back up.",
   feel:"Quads and glutes working throughout.",
   breath:"Breathe in lowering. Breathe out pushing.",
   mistakes:["Knees caving","Low back rounding off pad","Locking out knees"],
   regression:["Bodyweight Squat"],progression:["Single Leg Press","Pause Leg Press"]},
  {name:"Seated Hamstring Curl Machine",cat:"Lower",region:"Hamstrings",pattern:"Knee Flexion",muscles:["Hamstrings"],secondary:[],equip:["Machine"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=seated+hamstring+curl+machine",
   setup:"Adjust so pad sits just above ankles. Sit tall with back against pad.",
   action:"Pull heel toward your seat. Control the return — 3 full seconds back.",
   feel:"Hamstrings fully contracting.",
   breath:"Exhale as you curl. Inhale on return.",
   mistakes:["Using momentum","Lifting hips off seat","Not controlling the eccentric"],
   regression:["Glute Bridge"],progression:["Nordic Hamstring Curl","Single Leg Hamstring Curl"]},
  {name:"Seated Calf Raise Machine",cat:"Lower",region:"Calves",pattern:"Plantarflexion",muscles:["Soleus"],secondary:["Gastroc"],equip:["Machine"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=seated+calf+raise",
   setup:"Pad just above knees. Balls of feet on platform edge. Full range of motion.",
   action:"Lower heel fully. Rise all the way up. Pause at the top. 3-second descent.",
   feel:"Deep calf pump on every rep.",
   breath:"Natural breathing.",
   mistakes:["Bouncing at the bottom","Partial range of motion","Too fast"],
   regression:["Bodyweight Calf Raise"],progression:["Single Leg Calf Raise","Standing Calf Raise"]},
  // ── UPPER PULL ─────────────────────────────────────────────────────────
  {name:"Lat Pulldown",cat:"Upper Pull",region:"Back",pattern:"Vertical Pull",muscles:["Lats"],secondary:["Biceps","Upper Back"],equip:["Cable"],diff:"Beginner",
   video:"https://exrx.net/WeightExercises/LatissimusDorsi/CBUnderhndPulldown",
   setup:"Sit tall. Push chest up slightly before pulling. Grip just outside shoulder-width.",
   action:"Drive elbows down toward your pockets. Bring bar to upper chest. Control the return — 3 full seconds.",
   feel:"Sides of your back (lats) doing all the work.",
   breath:"Exhale pulling down. Inhale returning.",
   mistakes:["Pulling behind neck","Leaning too far back","Shrugging shoulders"],
   regression:["Band Pulldown"],progression:["Machine Assisted Pull-Up","Chin-Up","Pull-Up"]},
  {name:"Seated Cable Row",cat:"Upper Pull",region:"Back",pattern:"Horizontal Pull",muscles:["Upper Back","Lats"],secondary:["Biceps","Rear Delts"],equip:["Cable"],diff:"Beginner",
   video:"https://exrx.net/WeightExercises/BackGeneral/CBSeatedRow",
   setup:"Sit tall. Reach forward to feel shoulder blades spread. Chest proud.",
   action:"Pull handle to belly button. Squeeze shoulder blades together and DOWN at the end. Return slowly — feel the stretch.",
   feel:"Upper back squeezing. Shoulder blades moving.",
   breath:"Exhale as you pull. Inhale as you reach forward.",
   mistakes:["Leaning way back","Using momentum","Not fully stretching forward"],
   regression:["Band Row"],progression:["Single Arm Cable Row","Chest Supported Row"]},
  {name:"Dumbbell Single Arm Bent Over Row",cat:"Upper Pull",region:"Back",pattern:"Horizontal Pull",muscles:["Lats","Upper Back"],secondary:["Biceps","Core"],equip:["Dumbbell","Bench"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=dumbbell+single+arm+row",
   setup:"Knee and hand on bench. Back flat — like a table. Dumbbell hanging straight down.",
   action:"Pull elbow straight back and up — like starting a lawnmower. Shoulder blade draws back and down. Lower with control.",
   feel:"Lat and upper back on the working side.",
   breath:"Exhale pulling up. Inhale lowering.",
   mistakes:["Rotating torso","Pulling with bicep only","Rounding back"],
   regression:["Seated Cable Row"],progression:["Pendlay Row","Meadows Row"]},
  {name:"Face Pull — Cable or Band",cat:"Upper Pull",region:"Rear Delts / Rotator Cuff",pattern:"Horizontal Pull",muscles:["Rear Delts","Rotator Cuff"],secondary:["Upper Traps","Rhomboids"],equip:["Cable","Band"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=face+pull+form",
   setup:"Cable at face height. Rope attachment. Grab both ends with thumbs up.",
   action:"Pull toward your EARS — not your nose. Elbows go high and wide. Hold 1 second. Feel the squeeze between shoulder blades.",
   feel:"Rear shoulders and between the shoulder blades.",
   breath:"Exhale pulling. Inhale returning.",
   mistakes:["Pulling too low toward chin","Elbows dropping","Not holding the contraction"],
   regression:["Band Pull Apart"],progression:["Cable Kneeling Face Pull","Heavy Face Pull"]},
  {name:"Prone Y Raise",cat:"Upper Pull",region:"Lower Traps",pattern:"Scapular Elevation",muscles:["Lower Trap","Rear Delts"],secondary:["Rhomboids"],equip:["Bodyweight","Dumbbell"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=prone+Y+raise+lower+trap",
   setup:"Lie face down. Arms in Y shape above head. Thumbs up.",
   action:"Squeeze shoulder blades DOWN your back first — like putting them in your back pockets. THEN lift arms. Small movement. Quality over height.",
   feel:"Under the shoulder blades — lower traps working.",
   breath:"Exhale as you lift. Inhale lowering.",
   mistakes:["Shrugging shoulders UP","Lifting too high","Using momentum"],
   regression:["Scapular Retraction Prone"],progression:["Light Dumbbell Y Raise","TRX Y"]},
  {name:"Barbell Bent Over Row",cat:"Upper Pull",region:"Back",pattern:"Horizontal Pull",muscles:["Upper Back","Lats"],secondary:["Biceps","Core"],equip:["Barbell"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=barbell+bent+over+row",
   setup:"Hip hinge to 45 degrees. Bar hanging. Overhand grip just outside hips. Core braced.",
   action:"Pull bar to lower chest / upper abdomen. Drive elbows back. Squeeze shoulder blades. Lower controlled.",
   feel:"Full upper back contraction.",
   breath:"Brace before each rep. Exhale at top.",
   mistakes:["Using too much leg drive","Rounding back","Bar swinging"],
   regression:["Dumbbell Single Arm Row"],progression:["Pendlay Row","Yates Row"]},
  {name:"Rear Delt Fly Machine",cat:"Upper Pull",region:"Rear Delts",pattern:"Horizontal Pull",muscles:["Rear Delts"],secondary:["Rhomboids"],equip:["Machine"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=rear+delt+fly+machine",
   setup:"Chest against pad. Arms straight. Grip handles in neutral.",
   action:"Drive arms straight back and wide. Hold a second at full range. Return controlled.",
   feel:"Rear shoulders and upper back burning.",
   breath:"Exhale flying back. Inhale returning.",
   mistakes:["Bending elbows too much","Using momentum","Not going through full range"],
   regression:["Face Pull"],progression:["Cable Rear Delt Fly"]},
  // ── UPPER PUSH ─────────────────────────────────────────────────────────
  {name:"Push-Up",cat:"Upper Push",region:"Chest",pattern:"Horizontal Push",muscles:["Chest","Triceps"],secondary:["Shoulders","Core"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://exrx.net/WeightExercises/PectoralSternal/WtPushup",
   setup:"Hands under shoulders. Body in a straight plank line. Core tight.",
   action:"Lower chest toward floor — 2-3 seconds down. Elbows at 45 degrees from body. Push the floor away back to start.",
   feel:"Chest, arms, and core all working.",
   breath:"Breathe in lowering. Blow out pushing.",
   mistakes:["Hips sagging","Head dropping","Elbows flaring wide"],
   regression:["Incline Push-Up","Wall Push-Up"],progression:["Tempo Push-Up","Deficit Push-Up","Archer Push-Up"]},
  {name:"Dumbbell Bench Press",cat:"Upper Push",region:"Chest",pattern:"Horizontal Push",muscles:["Chest","Triceps"],secondary:["Shoulders"],equip:["Bench","Dumbbell"],diff:"Beginner",
   video:"https://exrx.net/WeightExercises/PectoralSternal/DBBenchPress",
   setup:"Lie on bench, feet planted. Dumbbells over chest, elbows at 45 degrees.",
   action:"Lower weights under control until upper arms are slightly below parallel. Press back up and slightly together at the top.",
   feel:"Chest stretch at the bottom. Full chest contraction at the top.",
   breath:"Breathe in lowering. Blow out pressing.",
   mistakes:["Shoulders shrugging up","Wrists bending back","Weights dropping too fast"],
   regression:["Dumbbell Floor Press"],progression:["Barbell Bench Press","Tempo Dumbbell Press"]},
  {name:"Barbell Bench Press",cat:"Upper Push",region:"Chest",pattern:"Horizontal Push",muscles:["Chest","Triceps"],secondary:["Shoulders"],equip:["Barbell","Bench"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=barbell+bench+press+form",
   setup:"Eyes under bar. Arch slightly. Feet planted. Grip just outside shoulder-width.",
   action:"Lower bar to lower chest with control. Drive up explosively. Keep shoulder blades retracted and depressed throughout.",
   feel:"Full chest engagement. Triceps assisting at lockout.",
   breath:"Breathe in lowering. Exhale pressing.",
   mistakes:["Bar too high on chest","Flared elbows","Bouncing off chest"],
   regression:["Dumbbell Bench Press"],progression:["Close Grip Bench","Paused Bench Press"]},
  {name:"Dumbbell Shoulder Press",cat:"Upper Push",region:"Shoulders",pattern:"Vertical Push",muscles:["Anterior Delt","Lateral Delt"],secondary:["Triceps","Core"],equip:["Dumbbell"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=dumbbell+shoulder+press+seated",
   setup:"Sit tall. Weights at shoulder height, elbows at 90 degrees. Ribs down.",
   action:"Press weights up over your head until arms are extended — not locked. Return slow.",
   feel:"Shoulders and triceps working. Core staying still.",
   breath:"Blow out pressing up. Breathe in lowering.",
   mistakes:["Leaning back","Ribs flaring","Uneven pressing"],
   regression:["Single Arm Press","Landmine Press"],progression:["Arnold Press","Standing Press"]},
  {name:"Cable Lateral Raise",cat:"Upper Push",region:"Shoulders",pattern:"Shoulder Abduction",muscles:["Lateral Delt"],secondary:[],equip:["Cable"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=cable+lateral+raise+form",
   setup:"Cable at lowest setting. Stand sideways. Grab with far hand. Slight lean away.",
   action:"Lead with your elbow — lift to shoulder height. Pinky slightly higher than thumb. Lower SLOWLY — 3 full seconds.",
   feel:"Side of shoulder burning. No shrugging.",
   breath:"Exhale lifting. Inhale lowering.",
   mistakes:["Shrugging shoulder","Swinging body","Going above shoulder height"],
   regression:["Light Dumbbell Lateral Raise"],progression:["Lateral Raise Machine","Cable Y Raise"]},
  {name:"Close Grip Push Up",cat:"Upper Push",region:"Triceps",pattern:"Horizontal Push",muscles:["Triceps","Chest"],secondary:["Shoulders"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=close+grip+push+up+tricep",
   setup:"Hands under your chest — closer than normal. Body straight as a board.",
   action:"Lower chest toward hands. Keep elbows tight to your body. Press back up.",
   feel:"Triceps doing most of the work.",
   breath:"Breathe in down. Blow out up.",
   mistakes:["Elbows flaring out","Hips dropping","Hands too close"],
   regression:["Push-Up"],progression:["Diamond Push-Up","Tricep Dip"]},
  // ── CORE ─────────────────────────────────────────────────────────────
  {name:"Dead Bug",cat:"Core",region:"Core",pattern:"Anti-Extension",muscles:["TVA","Rectus Abdominis"],secondary:["Hip Flexors","Shoulders"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=dead+bug+exercise+core",
   setup:"Lie on back. Press lower back FLAT to the floor — no gap. Arms up. Knees up, shins parallel to floor.",
   action:"Slowly lower one arm and the OPPOSITE leg. Back stays flat. Come back. Switch sides.",
   feel:"Tummy working hard to keep your back from lifting.",
   breath:"Blow air out as you reach. Breathe in returning.",
   mistakes:["Lower back lifting off floor","Moving too fast","Not engaging tummy"],
   regression:["Arm-Only Dead Bug","Leg Tap Dead Bug"],progression:["Band Dead Bug","Weighted Dead Bug"]},
  {name:"Bird Dog",cat:"Core",region:"Core",pattern:"Anti-Rotation",muscles:["Core","Glutes"],secondary:["Shoulders","Lats"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=bird+dog+exercise",
   setup:"On hands and knees — like a table. Hands under shoulders. Knees under hips.",
   action:"Reach one arm forward and the opposite leg back simultaneously. Stay super still. No rocking. Hold 2 seconds. Return and switch.",
   feel:"Tummy and glute holding you steady.",
   breath:"Blow out while reaching. Breathe in returning.",
   mistakes:["Rocking side to side","Lifting leg too high","Looking up"],
   regression:["Leg-Only Bird Dog","Arm-Only Bird Dog"],progression:["Band-Resisted Bird Dog","Off-Bench Bird Dog"]},
  {name:"Forearm Plank",cat:"Core",region:"Core",pattern:"Anti-Extension",muscles:["Core","Glutes"],secondary:["Shoulders"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=forearm+plank+form",
   setup:"Forearms on floor, elbows under shoulders. Toes on floor. Body in a straight line from heels to head.",
   action:"Squeeze quads. Squeeze glutes. Draw belly button gently in. Hold. One rigid plank of wood.",
   feel:"Everything working — especially your core.",
   breath:"Breathe normally. Do not hold breath.",
   mistakes:["Hips too high","Hips sagging","Head dropping"],
   regression:["Kneeling Plank"],progression:["High Plank","Plank with Leg Lift","RKC Plank"]},
  {name:"Pallof Press — Band",cat:"Core",region:"Core",pattern:"Anti-Rotation",muscles:["Core","Obliques"],secondary:[],equip:["Band","Cable"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=pallof+press",
   setup:"Anchor band at belly button height. Stand sideways. Hold with both hands at chest. Feet shoulder-width.",
   action:"Press hands straight out. HOLD 2 seconds. The band wants to twist you — resist completely. Return to chest.",
   feel:"Side of your core fighting the rotation.",
   breath:"Exhale pressing out. Breathe in returning.",
   mistakes:["Twisting toward the anchor","Stepping too close","Rushing the hold"],
   regression:["Pallof Press Kneeling"],progression:["Pallof Press with Rotation","Half-Kneeling Pallof Press"]},
  {name:"Copenhagen Plank",cat:"Core",region:"Core",pattern:"Anti-Lateral Flexion",muscles:["Adductors","Obliques","Core"],secondary:["Glutes"],equip:["Bench"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=copenhagen+plank",
   setup:"Side of body facing bench. Top foot on bench. Bottom leg can float or be on ground.",
   action:"Lift hips off the floor. Body in a straight line. Hold. Like a side plank but harder.",
   feel:"Inner thigh and entire side of core.",
   breath:"Breathe normally. Do not hold.",
   mistakes:["Hips sagging","Rotating forward","Holding breath"],
   regression:["Side Plank"],progression:["Adduction Copenhagen Plank","Band Copenhagen Plank"]},
  // ── ACTIVATION / CORRECTIVE ────────────────────────────────────────────
  {name:"Clamshell",cat:"Activation",region:"Hip",pattern:"Hip Abduction",muscles:["Glute Med"],secondary:["Hip External Rotators"],equip:["Bodyweight","Band"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=clamshell+exercise",
   setup:"Lie on side. Knees bent at 45 degrees. Feet touching. Hips stacked.",
   action:"Open top knee toward the ceiling — HIPS STAY STILL. Don't rock backward. Feel the burn on the outside of your hip. Close slowly.",
   feel:"Outside of your hip (glute med).",
   breath:"Exhale opening. Inhale closing.",
   mistakes:["Rolling hips back","Using momentum","Not feeling the hip"],
   regression:["Isometric Clamshell"],progression:["Band Clamshell","Side Lying Leg Raise"]},
  {name:"Glute Bridge",cat:"Activation",region:"Glutes",pattern:"Hip Extension",muscles:["Glutes"],secondary:["Hamstrings","Core"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=glute+bridge+activation",
   setup:"On back, knees bent, feet flat, hip-width.",
   action:"Squeeze glutes FIRST. Then push hips up. Hold 2s at top. Lower slowly.",
   feel:"Glutes — not lower back.",
   breath:"Exhale lifting. Inhale lowering.",
   mistakes:["Back arching","Not squeezing first","Pushing through toes"],
   regression:["Short Range Bridge"],progression:["Single Leg Bridge","Hip Thrust"]},
  {name:"TVA Draw-In — Supine",cat:"Activation",region:"Core",pattern:"Core Activation",muscles:["TVA"],secondary:[],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=TVA+draw+in+activation",
   setup:"On back, knees bent, feet flat. Breathe normally.",
   action:"Gently draw belly button toward spine — about 20% effort. Like bracing for a light poke. Breathe NORMALLY while holding. Not a crunch.",
   feel:"Deep quiet squeeze in your lower abdomen.",
   breath:"Keep breathing normally while holding the contraction.",
   mistakes:["Holding breath","Crunching","Contracting too hard"],
   regression:["Seated TVA Draw-In"],progression:["TVA with Bird Dog","Standing TVA"]},
  {name:"Chin Tucks",cat:"Activation",region:"Neck / Cervical",pattern:"Cervical Retraction",muscles:["Deep Cervical Flexors"],secondary:["Upper Back"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=chin+tuck+neck+retraction",
   setup:"Sitting or standing tall. Eyes level.",
   action:"Slide head STRAIGHT BACK — not down, not up — making a double chin. Feel a gentle stretch at the base of skull. Hold 2 seconds.",
   feel:"Gentle stretch at the base of your skull. Deep neck muscles activating.",
   breath:"Breathe normally.",
   mistakes:["Nodding down","Tilting chin up","Moving too fast"],
   regression:["Supine Chin Tuck"],progression:["Chin Tuck with Resistance","Cervical Retraction with Extension"]},
  {name:"Wall Angels",cat:"Activation",region:"Upper Back / Shoulders",pattern:"Scapular Mobilization",muscles:["Lower Trap","Serratus","Rotator Cuff"],secondary:["Rhomboids"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=wall+angels+posture",
   setup:"Back against wall. Head, shoulder blades, and lower back ALL touching the wall. Arms in goalpost position, backs of hands on wall.",
   action:"Slowly slide arms up like a snow angel — keeping everything touching the wall. If something lifts off, stop there.",
   feel:"Upper back working. Shoulders staying down.",
   breath:"Breathe normally throughout.",
   mistakes:["Low back peeling off wall","Arms losing contact","Rushing"],
   regression:["Floor Angels"],progression:["Band Wall Angels","Single Arm Wall Angel"]},
  {name:"Sidelying External Rotation — Bilateral",cat:"Activation",region:"Rotator Cuff",pattern:"External Rotation",muscles:["Infraspinatus","Teres Minor"],secondary:[],equip:["Bodyweight","Band"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=sidelying+external+rotation",
   setup:"Lie on side. Pin top elbow against your ribs — it does NOT leave your side. Forearm pointing forward.",
   action:"Rotate forearm UP like opening a gate. Feel the back of your shoulder working. Lower with control.",
   feel:"Back of the shoulder (posterior cuff).",
   breath:"Exhale rotating up. Inhale lowering.",
   mistakes:["Elbow leaving the ribs","Using momentum","Going too fast"],
   regression:["Isometric External Rotation"],progression:["Cable External Rotation","Band External Rotation"]},
  {name:"Serratus Anterior — Wall Push-Up Plus",cat:"Activation",region:"Scapular Stabilizers",pattern:"Scapular Protraction",muscles:["Serratus Anterior"],secondary:["Lower Trap"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=serratus+anterior+push+up+plus",
   setup:"Hands on wall at shoulder height. Normal push-up position against wall.",
   action:"Do a small push-up. At the very end, push EXTRA — let shoulder blades spread apart and wrap around your rib cage. That extra push is the PLUS. Hold 1 second.",
   feel:"Sides of your rib cage under your armpit.",
   breath:"Exhale on the plus push.",
   mistakes:["Not adding the extra push","Shrugging shoulders","Losing the hold"],
   regression:["Supine Protraction"],progression:["Push-Up Plus","Serratus Punches"]},
  {name:"Seated Scapular Retraction — Lower Trap",cat:"Activation",region:"Lower Traps",pattern:"Scapular Retraction/Depression",muscles:["Lower Trap"],secondary:["Rhomboids"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=seated+scapular+retraction",
   setup:"Sit upright. Slight forward lean.",
   action:"Pull shoulder blades DOWN and BACK — like sliding them into your back pockets. Not just back — DOWN and back. Hold 2 seconds.",
   feel:"Between and below the shoulder blades.",
   breath:"Exhale as you retract. Hold the contraction.",
   mistakes:["Only pulling back — not down","Shrugging up first","Losing the contraction"],
   regression:["Standing Scapular Retraction"],progression:["Band Pull Apart","Prone Y Raise"]},
  {name:"Single Leg Balance",cat:"Activation",region:"Ankle / Hip",pattern:"Balance",muscles:["Glute Med","Tibialis Anterior","Peroneals"],secondary:["Core"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=single+leg+balance+exercise",
   setup:"Stand on one foot. Slight bend in standing knee. Eyes can be open or closed.",
   action:"Hold steady for 20-30 seconds. Soft ankle — not rigid. If you wobble, that is the POINT.",
   feel:"Outside of hip (glute med) and ankle stabilizers working.",
   breath:"Breathe normally.",
   mistakes:["Locking knee","Sinking hip on lifted side","Gripping floor with toes"],
   regression:["Supported Single Leg Stand"],progression:["Eyes Closed Balance","Single Leg Reach","Bosu Balance"]},
  // ── MOBILITY / RELEASE ─────────────────────────────────────────────────
  {name:"Kneeling Hip Flexor Stretch",cat:"Mobility",region:"Hip Flexors",pattern:"Stretch",muscles:["Hip Flexors","Psoas","Rectus Femoris"],secondary:[],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=kneeling+hip+flexor+stretch",
   setup:"Kneel on one knee. Other foot forward. Upright posture.",
   action:"Tuck your pelvis under — like you have a tail between your legs. Do NOT lean forward. Stand tall and TUCK. Feel the stretch at the very front of your back hip.",
   feel:"Front of the hip — deep stretch in the hip flexor.",
   breath:"Breathe out into the stretch. Hold 45+ seconds.",
   mistakes:["Leaning forward instead of tucking","Not tucking pelvis","Too short a hold"],
   regression:["Supine Hip Flexor Stretch"],progression:["Half-Kneeling Psoas Stretch","RNT Split Squat"]},
  {name:"Doorway Pec Stretch",cat:"Mobility",region:"Chest / Shoulders",pattern:"Stretch",muscles:["Pec Minor","Pec Major","Anterior Delt"],secondary:[],equip:["Doorway"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=doorway+pec+stretch",
   setup:"Stand in doorway. Arm at 90 degrees, forearm on frame at shoulder height.",
   action:"Step same-side foot forward. Let your chest rotate away from the wall. Feel the stretch across your chest. Hold 45+ seconds.",
   feel:"Across your chest and front of shoulder.",
   breath:"Breathe out into the stretch. Hold.",
   mistakes:["Arm too high","Not rotating chest away","Too short a hold"],
   regression:["Corner Chest Stretch"],progression:["Active Pec Stretch with Rotation"]},
  {name:"Thoracic Extension — Foam Roller",cat:"Mobility",region:"Thoracic Spine",pattern:"Mobilization",muscles:["Thoracic Erectors"],secondary:["Lats"],equip:["Foam Roller"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=thoracic+extension+foam+roller",
   setup:"Place roller across your MID-back between shoulder blades — NOT lower back. Support your head with hands.",
   action:"Gently arch over the roller. Breathe in and let gravity pull you. Work slowly up and down between shoulder blades and base of neck only.",
   feel:"A gentle opening in your upper and mid back.",
   breath:"Breathe in to increase the stretch.",
   mistakes:["Rolling on lower back","Forcing the extension","Moving too fast"],
   regression:["Chair Thoracic Extension"],progression:["Active Thoracic Extension","Cat-Cow"]},
  {name:"QL Release",cat:"Release",region:"Lumbar",pattern:"SMR",muscles:["QL"],secondary:[],equip:["Foam Roller","Lacrosse Ball"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=QL+foam+roll",
   setup:"Lie on your side. Roller between hip and lower rib. Support on forearm.",
   action:"Find tender spot. Hold 60-90 seconds. Breathe into it. Do NOT aggressively roll.",
   feel:"Deep ache in the side of your lower back.",breath:"Deep breathing to help release.",
   mistakes:["Rolling too fast","Skipping this step","Pressing too hard"],
   regression:["Light pressure hold"],progression:["Lacrosse Ball QL Release"]},
  {name:"TFL Release",cat:"Release",region:"Hip",pattern:"SMR",muscles:["TFL"],secondary:[],equip:["Foam Roller"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=TFL+foam+roll",
   setup:"Lie on side. Roller just below the top of your hip (greater trochanter area).",
   action:"Find tension. Hold 60 seconds. Breathe. Slow small movements if needed.",
   feel:"Front-outer hip.",breath:"Breathe through it.",
   mistakes:["Rolling too fast","Rolling on the hip bone itself"],
   regression:["Light pressure"],progression:["Lacrosse Ball TFL"]},
  {name:"Piriformis Release",cat:"Release",region:"Glutes",pattern:"SMR",muscles:["Piriformis"],secondary:[],equip:["Foam Roller","Lacrosse Ball"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=piriformis+foam+roll",
   setup:"Sit on roller. Cross one ankle over the opposite knee. Shift weight to that glute.",
   action:"Find the tender spot in the middle of your glute. Hold 60-90 seconds. Breathe.",
   feel:"Deep in the glute — not sciatic pain.",breath:"Breathe through the pressure.",
   mistakes:["Rolling on sciatic nerve (sharp shooting pain — stop)","Moving too fast"],
   regression:["Figure Four Stretch"],progression:["Lacrosse Ball Piriformis"]},
  {name:"Pec Minor Release — Lacrosse Ball",cat:"Release",region:"Chest",pattern:"SMR",muscles:["Pec Minor"],secondary:[],equip:["Lacrosse Ball","Wall"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=pec+minor+lacrosse+ball",
   setup:"Ball against wall. Stand and press the upper chest area (below collar bone, inner chest) into the ball.",
   action:"Hold 60 seconds. Breathe. Tilt or rotate arm slightly to feel deeper.",
   feel:"Under the collarbone — deep pec minor.",breath:"Breathe out into it.",
   mistakes:["Pressing on the collarbone itself","Moving too fast","Not enough pressure"],
   regression:["Foam Roll Chest"],progression:["Pec Minor Stretch After"]},
  {name:"Lat Release",cat:"Release",region:"Back",pattern:"SMR",muscles:["Lats"],secondary:[],equip:["Foam Roller"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=lat+foam+roll",
   setup:"Lie on side. Roller under armpit area — side of back.",
   action:"Hold tender spot 60 seconds. Breathe. Slow small rolls.",
   feel:"Side of your back from armpit to hip.",breath:"Breathe through it.",
   mistakes:["Rolling too fast","Missing the lat entirely"],
   regression:["Light pressure hold"],progression:["Lacrosse Ball Lat"]},
  // ── CARDIO ─────────────────────────────────────────────────────────────
  {name:"Zone 2 — Incline Walk / Bike",cat:"Cardio",region:"Full Body",pattern:"Aerobic",muscles:["Heart","Legs"],secondary:[],equip:["Treadmill","Bike"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=zone+2+cardio",
   setup:"Treadmill at 10-15% incline or stationary bike. HR monitor preferred.",
   action:"Maintain conversational pace — talking is slightly uncomfortable but totally possible. Target HR 120-140.",
   feel:"Steady aerobic effort. Breathing elevated but controlled.",
   breath:"Nasal breathing preferred for Zone 2.",
   mistakes:["Going too hard","Going too easy","No HR awareness"],
   regression:["Flat Walk"],progression:["Longer Duration Zone 2","Outdoor Hiking"]},
  {name:"Sit-to-Stand",cat:"Cardio",region:"Lower Body",pattern:"Functional",muscles:["Quads","Glutes"],secondary:["Core","Hip Flexors"],equip:["Chair"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=sit+to+stand+rehab",
   setup:"Sit on edge of chair. Feet flat, hip-width. Lean chest FORWARD over knees first.",
   action:"Squeeze glutes and push through heels to stand. No rocking, no momentum. Sit back down with control.",
   feel:"Quads and glutes working. Controlled movement.",
   breath:"Exhale standing. Inhale sitting.",
   mistakes:["Rocking to generate momentum","Using hands to push off","Not going all the way up"],
   regression:["Supported Sit-to-Stand","Higher Chair"],progression:["Slow Tempo Sit-to-Stand","Goblet Squat"]}
];


const ALL_EX=[...["Adductor Release","Lat Release","Levator","Outside Calf Release","Pec Minor Release","Peroneal Release","Piriformis Release","QL Release","Rhomboids SMR","TFL Release","Full Quad Release","Bicep Femoris Release","Suboccipital Release","Calcaneus SMR","Pec Minor Release — Lacrosse Ball","Left QL Release"].map(n=>({name:n,cat:"Release"})),...["Doorway Pec Stretch","Kneeling Hip Flexor Stretch","Lat Stretch","Levator Scap Stretch","QL Stretch","Thomas Stretch","Standing Gastrocnemius Calf Stretch","Swiss Ball Lat Stretch","Childs Pose","Pigeon Stretch","Thoracic Extension — Foam Roller","90/90 Hip External Rotation Stretch","90/90 Hamstring Stretch","Adductor Stretch — Side-Lying","Calf Stretch — Bent Knee","Active Thoracic Extension","Cat Cow","Inchworm","Lying Figure Four Stretch","Lateral Neck Stretch"].map(n=>({name:n,cat:"Mobility"})),...["Clamshell","Dead Bug","Bird Dog","TVA Draw-In — Supine","Chin Tucks","Wall Angels","Prone Y Raise","Sidelying External Rotation — Bilateral","Serratus Anterior — Wall Push-Up Plus","Seated Scapular Retraction — Lower Trap","Standing Glute Squeeze","Glute Bridge","Hamstring Bridge — Heel Drive","Sit-to-Stand","Mini Band Lateral Walk (High)","Band X Walks","Tib Anterior Lifts","Arch Lift","Inner Calf Raises","Side Plank Lv1","Single Leg Balance","Glute Max","Medial Hamstring"].map(n=>({name:n,cat:"Activation"})),...["Forearm Plank","Pallof Press — Band","Copenhagen Plank","Flutter Kicks","Bear Crawl Shoulder Tap","Reverse Crunch","Mountain Climbers","Bicycle Crunch","Active Hollow Hold","Lateral Plank Walk"].map(n=>({name:n,cat:"Core"})),...["Lat Pulldown","Neutral Grip Lat Pulldown","Seated Cable Row — Neutral Grip","Dumbbell Single Arm Bent Over Row","Face Pull — Cable or Band","Rear Delt Fly Machine","Barbell Bent Over Row","TRX Y Deltoid Fly","Chest Supported Lower Trap","Lower Trap Lv1","Lower Trap Lv2","Lower Trap Lv3","Dumbbell Rear Delt Row","Cable Lateral Raise","Dumbbell Lateral Raise","Lateral Raise Machine","Cable Face Pull","Band Pull Apart","Machine Assisted Pull Up","Chin Up","Lateral Raise — Both Arms"].map(n=>({name:n,cat:"Upper Pull"})),...["Push-Up","Dumbbell Bench Press","Barbell Bench Press","Dumbbell Incline Bench Press","Barbell Overhead Press","Dumbbell Shoulder Press","Seated Shoulder Press Machine","Chest Press Machine","Close Grip Push Up","Diamond Push Up"].map(n=>({name:n,cat:"Upper Push"})),...["Glute Bridge","Barbell Glute Bridge","Barbell Hip Thrust","Dumbbell Hip Thrust","Body Weight Glute Bridge","Leg Press","Dumbbell Romanian Deadlift","Barbell Romanian Deadlift","Barbell Deadlift","Hex Bar Deadlift","Barbell Squat","Dumbbell Goblet Squat","Body Weight Squat","Seated Hamstring Curl Machine","Prone Lying Hamstring Curl Machine","Dumbbell Step Ups","Body Weight Step Up","Dumbbell Walking Lunge","Dumbbell Split Squat","Dumbbell Standing Calf Raise","Seated Calf Raise Machine","Hamstring Bridge — Heel Drive","Single Leg Glute Bridge","Heels Elevated Goblet Squat"].map(n=>({name:n,cat:"Lower"})),...["Exercise Bike","Treadmill Walk","Treadmill Incline Walk","Row Machine","Zone 2 — Incline Walk / Bike","HIIT Intervals","Jumping Jacks","Mountain Climbers"].map(n=>({name:n,cat:"Cardio"})),...["Sit-to-Stand","Pallof Press — Cable","Cable Standing Low to High Chop","Dumbbell Renegade Row","Single Leg Balance with Reach","Suitcase Carry","Farmers Walk","Cable Half Kneeling Pallof Press","Single Arm Row","Single Arm Wall Angel","Single Leg Touchdown","Scapular Push Up","Push Up to Side Plank"].map(n=>({name:n,cat:"Integration"})),
...["Bosu Ball Squat","Hex Bar Deadlift","Body Weight Lateral Lunge","Body Weight Split Squat","Dumbbell Deadlift","Roman Chair Back Extensions","Body Weight Glute Kickback","Body Weight 3 Way Calf Raise","Leg Extension w/ Ankle Weight","Bicep Femoris Stretch","Swiss Ball Hip Thrust","Dumbbell Goblet Split Squat","Seated Hip Abduction Machine","Seated Leg Press","Seated Leg Extension Machine","Exercise Ball Hamstring Curl","Assisted Pistol Squat","Kettlebell Goblet Squat","Single Leg Press","Dumbbell Suitcase Walking Lunge","Front Box Jump"].map(n=>({name:n,cat:"Lower"})),
...["Scapular Retraction Inverted Row","Barbell Incline Chest Supported Row","Alternating Dumbbell Cross Body Hammer Curl","Seated Dumbbell Bent Over Reverse Fly","Cable Seated Supinated Lat Pulldown","TRX T Deltoid Fly","Barbell Bicep Curl","ITY","Weighted Chest Supported IYT","Barbell Inverted Row","Bicep Curl Machine","Cable Kneeling Face Pull","Cable Half Kneeling Single Arm High Row","Cable Single Arm Lateral Raise","Dumbbell Shrug"].map(n=>({name:n,cat:"Upper Pull"})),
...["Cable Standing Chest Fly","Cable Bar Tricep Pushdown","Dumbbell Tricep Kickback","Seated Tricep Extension Machine","Exercise Ball Dumbbell Chest Press","Cable Rope Tricep Pushdown","Bench Dips","Dumbbell Floor Press","Barbell Shoulder Press","Ez Bar Skullcrusher","Lying Dumbbell Tricep Extension","Incline Chest Press Machine","Cable Cross Body Tricep Extension","Cable Crossover","Cable Incline Bench Press","Cable Incline Chest Fly"].map(n=>({name:n,cat:"Upper Push"})),
...["Bosu Ball Plank","Psoas March","Superman","Standing Cable Wood Chop","Rectus Ab Crunch","Side Plank Lv2","Side Plank Lv3","Exercise Ball Stir the Pot","Side Lying Oblique Crunch","Exercise Ball Crunch","Exercise Ball Torso Rotation","Ab Crunch Machine","Hanging Oblique Knee Raise","Plank with Twist"].map(n=>({name:n,cat:"Core"})),
...["Cervical Neck Flexion","Lateral Neck Flexion Exercise","PNF Carry Away","Shoulder External Rotation on Wall","Side Lying Leg Extension","Mini Band Clamshell","Post Serratus Activation","Lower Trap Lv1","Lower Trap Lv2","Lower Trap Lv3"].map(n=>({name:n,cat:"Activation"})),
...["Arm Circles Forward & Backward","Anterior Shoulder & Chest Stretch","Wrist Extension","Anterior Adductor Stretch","Cat Stretch","Outside Calf Stretch","Shoulder Stretch","Exercise Ball Chest Stretch","Standing Biceps Stretch","Leg-Up Hamstring Stretch","Standing Hamstring and Calf Stretch","Walking High Knees"].map(n=>({name:n,cat:"Mobility"})),
...["Post Adductor Release","Posterior Delt Release","Outside Calf Release","Outside Quad Release","Foam Roll Spinal Erectors"].map(n=>({name:n,cat:"Release"})),
...["Ice Skater","Burpee"].map(n=>({name:n,cat:"Cardio"}))

];

// ── Extended Exercise Library ─────────────────────────────────────────────
const EX_EXTENDED = [
  // LOWER BODY - Squats
  ...["Pause Squat","Box Squat","Zercher Squat","Safety Bar Squat","Belt Squat","Overhead Squat","Anderson Squat","Hatfield Squat","Spanish Squat","Pin Squat","Tempo Squat 3-0-3","1.5 Rep Squat","Dead Stop Squat","Heels Elevated Back Squat","Wide Stance Squat","Narrow Stance Squat","Sumo Squat","Sissy Squat","Smith Machine Squat","Pendulum Squat","TRX Squat","Landmine Squat","Sandbag Squat","Trap Bar Squat","Bulgarian Split Squat","Rear Foot Elevated Split Squat","Weighted Pistol Squat","Shrimp Squat","Poliquin Step Up","Peterson Step Up","Box Step Up","Lateral Step Up","Cross Behind Lunge","Reverse Lunge","Walking Lunge with Rotation","Deficit Reverse Lunge","Leaning Lunge","Lateral Lunge with Knee Drive","Curtsy Lunge","Skater Squat"].map(n=>({name:n,cat:"Lower"})),

  // LOWER BODY - Hip Hinge
  ...["Snatch Grip Deadlift","Sumo Deadlift","Deficit Deadlift","Rack Pull","Block Pull","Pause Deadlift","Touch and Go Deadlift","Romanian Deadlift to Shrug","Stiff Leg Deadlift","Good Morning","Banded Good Morning","Safety Bar Good Morning","Cable Pull Through","Kettlebell Swing","Single Arm Kettlebell Swing","Kettlebell Sumo Deadlift","Kettlebell RDL","Single Leg Kettlebell Deadlift","B-Stance Deadlift","B-Stance RDL","Wide Stance RDL","Suitcase Deadlift","Trap Bar RDL","Landmine RDL","Snatch Grip RDL"].map(n=>({name:n,cat:"Lower"})),

  // LOWER BODY - Glutes
  ...["Cable Kickback","Quadruped Hip Extension","Donkey Kick","Fire Hydrant","Side Lying Hip Abduction","Banded Side Lying Hip Abduction","Monster Walk","Lateral Band Walk","Forward Band Walk","Diagonal Band Walk","Banded Hip Thrust","Single Leg Hip Thrust — Bench","Frog Pump","Banded Frog Pump","Hip Abduction Machine Standing","Cable Hip Abduction","Cable Hip Adduction","Hip Adduction Machine","Sumo Hip Thrust","American Hip Thrust","Seated Hip Abduction Machine","Banded Glute Bridge — Marching","Single Leg Glute Bridge — Foot Elevated","Reverse Hyper","Nordic Hamstring Curl","Inverse Curl","Natural Leg Curl","Sliding Leg Curl","Swiss Ball Leg Curl","Glute Ham Raise","Banded Leg Curl"].map(n=>({name:n,cat:"Lower"})),

  // LOWER BODY - Quads / Calves
  ...["Leg Extension — Single Leg","Leg Extension — Bilateral","Sissy Squat — Weighted","Terminal Knee Extension","VMO Drop Squat","Cyclist Squat","Tib Raise — Standing","Tib Raise — Seated","Ankle Circles","Heel Walk","Toe Walk","Standing Calf Raise","Donkey Calf Raise","Seated Calf Raise","Single Leg Standing Calf Raise","Leg Press Calf Raise","Smith Machine Calf Raise","Toe Press — Leg Press","Cable Calf Raise","Jump Rope — Calf Finisher","Tibialis Anterior Press"].map(n=>({name:n,cat:"Lower"})),

  // UPPER PULL - Rows
  ...["Chest Supported Row — Machine","Chest Supported Row — Dumbbell","Chest Supported Row — Barbell","Pendlay Row","Yates Row","Kroc Row","Helms Row","Meadows Row","Seal Row","T-Bar Row","T-Bar Row — Close Grip","T-Bar Row — Wide Grip","Landmine Row","Landmine Row — Single Arm","Cable Row — Wide Grip","Cable Row — Underhand","Cable Row — Single Arm High","Cable Row — Single Arm Low","Machine Row — Hammer","Machine Row — Wide","Machine Row — Narrow","Smith Machine Row","Resistance Band Row — Seated","Resistance Band Row — Standing","Inverted Row — TRX","Inverted Row — Rings","Inverted Row — Overhand","Inverted Row — Underhand","Incline Dumbbell Row","Prone Incline Row — Dumbbell","Prone Incline Row — Barbell","Dumbbell Pullover","Cable Pullover","Straight Arm Pulldown — Rope","Straight Arm Pulldown — Bar"].map(n=>({name:n,cat:"Upper Pull"})),

  // UPPER PULL - Vertical Pull
  ...["Neutral Grip Lat Pulldown","Wide Grip Lat Pulldown","Single Arm Lat Pulldown — Cable","V-Bar Lat Pulldown","Behind Neck Lat Pulldown","Assisted Pull-Up — Band","Assisted Pull-Up — Machine","Chin-Up","Neutral Grip Pull-Up","Wide Grip Pull-Up","Close Grip Pull-Up","Weighted Pull-Up","L-Sit Pull-Up","Archer Pull-Up","Ring Pull-Up","Typewriter Pull-Up","Commando Pull-Up","Mixed Grip Pull-Up","Scapular Pull-Up","Dead Hang","Active Hang","Towel Pull-Up","Fat Grip Pull-Up","Banded Pull-Apart — Overhead","High Cable Curl"].map(n=>({name:n,cat:"Upper Pull"})),

  // UPPER PULL - Biceps
  ...["Barbell Curl — Wide Grip","Barbell Curl — Close Grip","Barbell Curl — Reverse","EZ Bar Curl","EZ Bar Curl — Wide","EZ Bar Curl — Reverse","Preacher Curl — Barbell","Preacher Curl — Dumbbell","Preacher Curl — EZ Bar","Preacher Curl — Cable","Concentration Curl","Spider Curl","Incline Dumbbell Curl","Incline Dumbbell Hammer Curl","Cable Curl — Single Arm High","Cable Curl — Single Arm Low","Cable Curl — Bilateral","Cable Curl — Rope","Reverse Cable Curl","Bayesian Curl","21s Curl","Zottman Curl","Cross Body Curl","Waiter Curl","Pinwheel Curl","TRX Bicep Curl","Band Curl","Wrist Curl — Barbell","Wrist Curl — Dumbbell","Reverse Wrist Curl","Finger Extension — Band","Farmers Carry — Single Arm","Axle Bar Hold","Plate Pinch","Rice Bucket Grip Training"].map(n=>({name:n,cat:"Upper Pull"})),

  // UPPER PUSH - Chest
  ...["Barbell Incline Bench Press","Barbell Decline Bench Press","Dumbbell Incline Press","Dumbbell Decline Press","Dumbbell Fly — Flat","Dumbbell Fly — Incline","Dumbbell Fly — Decline","Cable Fly — Low to High","Cable Fly — High to Low","Cable Fly — Neutral","Machine Chest Fly","Machine Chest Press — Flat","Machine Chest Press — Incline","Smith Machine Bench Press","Smith Machine Incline Press","Push-Up — Wide","Push-Up — Diamond","Push-Up — Deficit","Push-Up — Archer","Push-Up — Ring","Push-Up — TRX","Push-Up — Plyo","Push-Up — Spiderman","Push-Up — T","Landmine Press — Single Arm","Landmine Press — Bilateral","Floor Press — Barbell","Floor Press — Kettlebell","Dumbbell Squeeze Press","Svend Press","Plate Press","Single Arm Cable Press","Cable Crossover — High","Cable Crossover — Mid","Cable Crossover — Low","Pec Deck Machine","Chest Dips — Weighted","Chest Dips — Assisted"].map(n=>({name:n,cat:"Upper Push"})),

  // UPPER PUSH - Shoulders
  ...["Dumbbell Front Raise","Barbell Front Raise","Cable Front Raise","Plate Front Raise","Cable Y Raise","Dumbbell Y Raise","Band Y Raise","Dumbbell Lateral Raise — Leaning","Machine Lateral Raise","Barbell Upright Row","Cable Upright Row","Dumbbell Upright Row","Dumbbell Rear Delt Fly","Band Rear Delt Fly","Machine Rear Delt Fly — Reverse Pec Deck","Dumbbell Cuban Press","Band Cuban Press","Cable Cuban Rotation","Handstand Push-Up","Pike Push-Up","Wall Walk","Log Press","Axle Press","Push Press","Push Jerk","Split Jerk","Bradford Press","Z Press","Seated DB Shoulder Press","Seated Barbell Shoulder Press","Smith Machine Shoulder Press","Machine Shoulder Press","Bottoms Up Kettlebell Press","Kettlebell Shoulder Press","Single Arm Landmine Press"].map(n=>({name:n,cat:"Upper Push"})),

  // UPPER PUSH - Triceps
  ...["Close Grip Bench Press","Board Press","JM Press","Tate Press","Rolling Tricep Extension","Overhead Dumbbell Extension — Single Arm","Overhead Dumbbell Extension — Bilateral","Cable Overhead Tricep Extension — Rope","Cable Overhead Tricep Extension — Bar","Cable Pushdown — V-Bar","Cable Pushdown — Single Arm","Cable Pushdown — Reverse","Tricep Dip — Rings","Tricep Dip — Weighted","Tricep Dip — Machine","Skull Crusher — Dumbbell","Skull Crusher — Barbell","Skull Crusher — Cable","Banded Skull Crusher","Incline Skull Crusher","Spider Skull Crusher","Pullover Skull Crusher","Nosebreaker","Tricep Kickback — Single Arm","Tricep Kickback — Cable","Bench Dip — Elevated Feet","Diamond Push-Up","Narrow Push-Up","Band Tricep Pushdown","Tricep Extension — Machine"].map(n=>({name:n,cat:"Upper Push"})),

  // CORE - Anti-Extension
  ...["Ab Wheel Rollout","Ab Wheel — Kneeling","Ab Wheel — Standing","Barbell Rollout","TRX Fallout","Cable Crunch — Kneeling","Cable Crunch — Standing","Weighted Crunch","Decline Crunch","Reverse Crunch","Leg Raise — Hanging","Leg Raise — Lying","Toe Touch Crunch","V-Up","Hollow Body Hold","Hollow Body Rock","Banana Roll","Dragon Flag","L-Sit Hold — Floor","L-Sit Hold — Parallel Bars","Tuck Hold","Tuck-to-Extension","Windshield Wiper","Hanging Windshield Wiper","GHD Sit-Up","Decline Sit-Up","Weighted Decline Sit-Up","Medicine Ball Crunch","Stability Ball Crunch","Swiss Ball Rollout","Plank Hip Dip","Plank Reach","Plank Row","RKC Plank","Weighted Plank","Stir the Pot — Barbell","Body Saw"].map(n=>({name:n,cat:"Core"})),

  // CORE - Rotational / Obliques
  ...["Russian Twist","Weighted Russian Twist","Cable Wood Chop — High to Low","Cable Wood Chop — Low to High","Cable Horizontal Chop","Landmine Rotation","Landmine Anti-Rotation","Half-Kneeling Chop","Half-Kneeling Lift","Suitcase Carry — Stationary","Single Arm Farmers Carry","Overhead Carry","Bottoms Up Carry","Waiter Walk","Goblet Carry","Yoke Carry","Sandbag Carry","Keg Carry","Zercher Carry","Bear Hug Carry","Marching Hip Flexor — Band","Oblique V-Up","Side Plank with Row","Side Plank with Hip Abduction","Copenhagen Plank — Short","Copenhagen Adduction","Pallof Press — Tall Kneeling","Pallof Press — Seated","Pallof Hold — Split Stance","Band Chop — Kneeling","Medicine Ball Slam","Medicine Ball Side Slam","Medicine Ball Rotational Throw","Slam Ball Overhead","Tornado Ball"].map(n=>({name:n,cat:"Core"})),

  // ACTIVATION / CORRECTIVE
  ...["Hip 90/90 Stretch","Hip 90/90 External Rotation","Hip 90/90 Internal Rotation","Hip 90/90 Transition","CARS — Hip","CARS — Shoulder","CARS — Thoracic","Prone Hip ER","Prone Hip IR","Supine Hip ER Stretch","Supine Hip IR Stretch","Pigeon Pose","Half Pigeon","Dragon Pose","Couch Stretch","Deep Squat Hold","Deep Squat with Reach","Goblet Squat Hold","Ankle Dorsiflexion Stretch","Ankle CARs","Calf Smash","Gastrocnemius Stretch","Soleus Stretch","Hamstring Floss","Sciatic Nerve Floss","Cervical CARs","Thoracic CARs","Lumbar CARs","Shoulder CARs","Wrist CARs","Finger CARs","Supination/Pronation","Radial/Ulnar Deviation","Side Lying Thoracic Rotation","Thread the Needle","Open Books","World's Greatest Stretch","Spiderman Stretch","Hip Flexor CARs","Active Straight Leg Raise"].map(n=>({name:n,cat:"Activation"})),

  // MOBILITY
  ...["Box Hip Flexor Stretch","Lunge with Reach","Lunge with Rotation","Lunge with Hip Circle","Lateral Lunge Stretch","Groin Stretch — Seated","Groin Stretch — Supine","Standing Hip CARs","Supine Figure 4","Figure 4 Hip Stretch","Sleeper Stretch","Cross Body Shoulder Stretch","Overhead Tricep Stretch","Lat Stretch — Doorway","Pec Stretch — Floor","Pec Stretch — Band","Foam Roll IT Band","Foam Roll Hip Flexor","Foam Roll Glutes","Foam Roll Upper Back","Foam Roll Thoracic","Foam Roll Calves","Foam Roll Peroneals","Foam Roll Adductors","Lacrosse Ball Glutes","Lacrosse Ball Thoracic","Lacrosse Ball Pec Minor","Lacrosse Ball Subscapularis","Lacrosse Ball Suboccipitals","Lacrosse Ball Plantar Fascia","Yoga Toe Stretch","Standing Quad Stretch","Supine Quad Stretch","Supine Hamstring Stretch","Seated Hamstring Stretch","Standing Hamstring Stretch","Half Kneeling Hip Flexor with Reach","Tall Kneeling Hip Extension","Quadruped Thoracic Rotation","Quadruped Hip CARs"].map(n=>({name:n,cat:"Mobility"})),

  // RELEASE / SMR
  ...["Foam Roll Quads","Foam Roll Hamstrings","Foam Roll IT Band","Foam Roll Hip Flexor","Foam Roll Glute Med","Foam Roll Glute Max","Foam Roll Upper Back — T-Spine","Foam Roll Lats — Side Lying","Foam Roll Thoracic Extension","Foam Roll Lower Leg — Anterior","Foam Roll Peroneals","Foam Roll Calves","Lacrosse Ball Calf","Lacrosse Ball Foot","Lacrosse Ball Hip Flexor","Lacrosse Ball Serratus","Lacrosse Ball Thoracic","Lacrosse Ball Mid-Trap","Lacrosse Ball Upper Trap","Lacrosse Ball Scalenes","Vibration Roller Quads","Vibration Roller Hamstrings","Vibration Roller IT Band","Vibration Roller Calves","Vibration Roller Upper Back","Stick Rolling Quads","Stick Rolling Calves","Trigger Point Pec Minor","Trigger Point Subscapularis","Trigger Point QL","Trigger Point TFL","Trigger Point Piriformis","Trigger Point Adductors","Trigger Point Tibialis Anterior","Trigger Point Peroneals"].map(n=>({name:n,cat:"Release"})),

  // CARDIO
  ...["Row Machine — Steady State","Row Machine — Intervals","Ski Erg — Steady State","Ski Erg — Intervals","Air Bike — Steady State","Air Bike — Intervals","Treadmill Sprint Intervals","Treadmill Incline Walk — Extended","Stair Climber","Step Mill","Versa Climber","Elliptical — Forward","Elliptical — Reverse","Swimming Laps","Pool Running","Cycling — Road","Cycling — Stationary","Cycling — Spin Class","Nordic Ski Machine","Cross Trainer","Jump Rope — Single Under","Jump Rope — Double Under","Jump Rope — Alternating Feet","Jump Rope — High Knees","Shuttle Run","Agility Ladder — In Out","Agility Ladder — Lateral","Agility Ladder — Icky Shuffle","Agility Ladder — Ali Shuffle","Cone Drill — 3 Cone","Cone Drill — 5-10-5","Cone Drill — T-Drill","Sled Push — Heavy","Sled Pull — Heavy","Sled Drag — Backward","Prowler Push","Battle Rope — Alternating","Battle Rope — Bilateral","Battle Rope — Circles","Battle Rope — Slams","Box Jump — Standard","Box Jump — Lateral","Box Jump — Depth","Broad Jump","Broad Jump — Continuous","Single Leg Hop","Lateral Bound","Reactive Bound","Vertical Jump","Squat Jump","Tuck Jump","Power Skip","High Knees — Running","Butt Kicks","A-Skip","B-Skip","C-Skip","Gallop","Carioca","Side Shuffle","Backpedal","Plyometric Push-Up","Explosive Push-Up"].map(n=>({name:n,cat:"Cardio"})),

  // INTEGRATION / FUNCTIONAL
  ...["Turkish Get-Up","Turkish Get-Up — Partial","Half Turkish Get-Up","Windmill — Kettlebell","Windmill — Dumbbell","Clean — Barbell","Clean — Dumbbell","Clean — Kettlebell","Power Clean","Hang Clean","Hang Power Clean","Push Press","Push Jerk","Split Jerk","Snatch — Barbell","Power Snatch","Hang Snatch","Overhead Squat — Snatch Grip","Thruster — Barbell","Thruster — Dumbbell","Thruster — Kettlebell","Wall Ball","Slam Ball Squat to Press","Sandbag Clean to Press","Sandbag Shouldering","Bear Complex","Man Maker","Devil's Press","Renegade Row","Renegade Row with Push-Up","Single Arm KB Complex","Kettlebell Flow","Barbell Complex","Dumbbell Complex","Medicine Ball Complex","Suitcase Squat","Waiter Squat","Single Arm OHP — Lunge","Rotational Press","Halo — Kettlebell","Around the World — Kettlebell","Figure 8 — Kettlebell","Bottoms Up Press — Carry","Lateral Bound to Stick","Jump to Pull-Up","Box Jump to Pull-Up","Squat to Row","Deadlift to Upright Row","Clean to Press","Romanian Deadlift to Row","Reverse Lunge to Press","Step Up to Press","Single Leg RDL to Row"].map(n=>({name:n,cat:"Integration"})),
];

// Merge all exercises
const ALL_EX_FULL=[...ALL_EX,...EX_EXTENDED];
const ALL_EX_FULL2=[...ALL_EX_FULL,...EX_EXTENDED2];

// FOOD_DB — full nutrition data with macros, portions, visual guide
const FOOD_DB=[
  // PROTEINS
  {name:"Chicken Breast",cat:"Protein",cal:187,pro:35,carb:0,fat:4,srv:"4 oz cooked",visual:"1 palm",unit:"oz",gramsPerSrv:113,goals:["fat_loss","muscle_gain","recomp","gut_support"]},
  {name:"Turkey Breast",cat:"Protein",cal:178,pro:34,carb:0,fat:3,srv:"4 oz cooked",visual:"1 palm",unit:"oz",gramsPerSrv:113,goals:["fat_loss","recomp","gut_support"]},
  {name:"Lean Ground Beef",cat:"Protein",cal:215,pro:28,carb:0,fat:11,srv:"4 oz cooked",visual:"1 palm",unit:"oz",gramsPerSrv:113,goals:["muscle_gain","performance"]},
  {name:"Salmon",cat:"Protein",cal:233,pro:25,carb:0,fat:14,srv:"4 oz cooked",visual:"1 palm",unit:"oz",gramsPerSrv:113,goals:["fat_loss","recomp","gut_support"]},
  {name:"Cod",cat:"Protein",cal:119,pro:26,carb:0,fat:1,srv:"4 oz cooked",visual:"1 palm",unit:"oz",gramsPerSrv:113,goals:["fat_loss","gut_support"]},
  {name:"Shrimp",cat:"Protein",cal:112,pro:24,carb:1,fat:1,srv:"4 oz cooked",visual:"1 palm",unit:"oz",gramsPerSrv:113,goals:["fat_loss","recomp"]},
  {name:"Tuna (canned)",cat:"Protein",cal:132,pro:29,carb:0,fat:1,srv:"4 oz",visual:"1 palm",unit:"oz",gramsPerSrv:113,goals:["fat_loss","recomp"]},
  {name:"Eggs",cat:"Protein",cal:143,pro:13,carb:1,fat:10,srv:"2 large eggs",visual:"1 palm",unit:"eggs",gramsPerSrv:100,goals:["muscle_gain","recomp"]},
  {name:"Egg Whites",cat:"Protein",cal:52,pro:11,carb:1,fat:0,srv:"3 whites (100g)",visual:"1 palm",unit:"g",gramsPerSrv:100,goals:["fat_loss","recomp"]},
  {name:"Greek Yogurt",cat:"Protein",cal:100,pro:17,carb:6,fat:0,srv:"170g / 6oz",visual:"1 palm",unit:"g",gramsPerSrv:170,goals:["fat_loss","recomp","gut_support"]},
  {name:"Cottage Cheese",cat:"Protein",cal:110,pro:14,carb:6,fat:3,srv:"1/2 cup (113g)",visual:"1 palm",unit:"g",gramsPerSrv:113,goals:["fat_loss","muscle_gain"]},
  {name:"Pork Tenderloin",cat:"Protein",cal:187,pro:28,carb:0,fat:7,srv:"4 oz cooked",visual:"1 palm",unit:"oz",gramsPerSrv:113,goals:["muscle_gain","recomp"]},
  {name:"Sardines",cat:"Protein",cal:191,pro:23,carb:0,fat:11,srv:"3.75 oz can",visual:"1 palm",unit:"oz",gramsPerSrv:106,goals:["fat_loss","gut_support"]},
  {name:"Black Beans",cat:"Protein",cal:114,pro:8,carb:20,fat:0,srv:"1/2 cup cooked",visual:"1 cupped hand",unit:"cup",gramsPerSrv:86,goals:["fat_loss","gut_support"]},
  {name:"Lentils",cat:"Protein",cal:115,pro:9,carb:20,fat:0,srv:"1/2 cup cooked",visual:"1 cupped hand",unit:"cup",gramsPerSrv:99,goals:["fat_loss","gut_support"]},
  {name:"Tempeh",cat:"Protein",cal:195,pro:19,carb:11,fat:11,srv:"3.5 oz (100g)",visual:"1 palm",unit:"g",gramsPerSrv:100,goals:["recomp","gut_support"]},
  {name:"Edamame",cat:"Protein",cal:121,pro:11,carb:10,fat:5,srv:"1/2 cup shelled",visual:"1 cupped hand",unit:"cup",gramsPerSrv:78,goals:["recomp"]},
  {name:"Protein Powder (whey)",cat:"Protein",cal:120,pro:24,carb:3,fat:2,srv:"1 scoop (30g)",visual:"1 palm",unit:"g",gramsPerSrv:30,goals:["muscle_gain","performance"]},
  // CARBS
  {name:"White Rice",cat:"Carbs",cal:205,pro:4,carb:45,fat:0,srv:"1 cup cooked",visual:"1 fist",unit:"cup",gramsPerSrv:158,goals:["muscle_gain","performance","gut_support"]},
  {name:"Brown Rice",cat:"Carbs",cal:218,pro:5,carb:46,fat:2,srv:"1 cup cooked",visual:"1 fist",unit:"cup",gramsPerSrv:195,goals:["recomp","fat_loss"]},
  {name:"Sweet Potato",cat:"Carbs",cal:135,pro:2,carb:31,fat:0,srv:"150g / 1 medium",visual:"1 fist",unit:"g",gramsPerSrv:150,goals:["fat_loss","recomp","performance"]},
  {name:"White Potato",cat:"Carbs",cal:130,pro:3,carb:30,fat:0,srv:"1 medium (150g)",visual:"1 fist",unit:"g",gramsPerSrv:150,goals:["muscle_gain","performance","gut_support"]},
  {name:"Oats",cat:"Carbs",cal:150,pro:5,carb:27,fat:3,srv:"1/2 cup dry (40g)",visual:"1 cupped hand",unit:"g",gramsPerSrv:40,goals:["fat_loss","muscle_gain","recomp"]},
  {name:"Kodiak Pancake Mix",cat:"Carbs",cal:190,pro:14,carb:30,fat:2,srv:"1/2 cup dry (60g)",visual:"1 cupped hand",unit:"g",gramsPerSrv:60,goals:["muscle_gain","performance"]},
  {name:"Quinoa",cat:"Carbs",cal:222,pro:8,carb:39,fat:4,srv:"1 cup cooked",visual:"1 fist",unit:"cup",gramsPerSrv:185,goals:["recomp","fat_loss"]},
  {name:"Ezekiel Bread",cat:"Carbs",cal:160,pro:8,carb:30,fat:1,srv:"2 slices (68g)",visual:"1 cupped hand",unit:"slices",gramsPerSrv:68,goals:["fat_loss","recomp"]},
  {name:"Farro",cat:"Carbs",cal:220,pro:8,carb:44,fat:2,srv:"1 cup cooked",visual:"1 fist",unit:"cup",gramsPerSrv:193,goals:["recomp","gut_support"]},
  {name:"Chickpeas",cat:"Carbs",cal:135,pro:7,carb:22,fat:2,srv:"1/2 cup cooked",visual:"1 cupped hand",unit:"cup",gramsPerSrv:82,goals:["fat_loss","gut_support"]},
  {name:"Banana",cat:"Carbs",cal:105,pro:1,carb:27,fat:0,srv:"1 medium",visual:"1 cupped hand",unit:"each",gramsPerSrv:118,goals:["muscle_gain","performance"]},
  {name:"Blueberries",cat:"Carbs",cal:84,pro:1,carb:21,fat:0,srv:"1 cup",visual:"1 cupped hand",unit:"cup",gramsPerSrv:148,goals:["fat_loss","recomp"]},
  {name:"Mixed Berries",cat:"Carbs",cal:70,pro:1,carb:17,fat:0,srv:"1 cup",visual:"1 cupped hand",unit:"cup",gramsPerSrv:140,goals:["fat_loss","recomp"]},
  {name:"Pineapple",cat:"Carbs",cal:82,pro:1,carb:22,fat:0,srv:"1 cup chunks",visual:"1 cupped hand",unit:"cup",gramsPerSrv:165,goals:["muscle_gain","gut_support"]},
  {name:"Butternut Squash",cat:"Carbs",cal:82,pro:2,carb:22,fat:0,srv:"1 cup cooked",visual:"1 fist",unit:"cup",gramsPerSrv:205,goals:["fat_loss","gut_support"]},
  // FATS
  {name:"Avocado",cat:"Fats",cal:80,pro:1,carb:4,fat:7,srv:"1/3 medium (50g)",visual:"1 thumb",unit:"g",gramsPerSrv:50,goals:["fat_loss","recomp","gut_support"]},
  {name:"Olive Oil",cat:"Fats",cal:120,pro:0,carb:0,fat:14,srv:"1 tbsp",visual:"1 thumb",unit:"tbsp",gramsPerSrv:14,goals:["fat_loss","gut_support"]},
  {name:"Walnuts",cat:"Fats",cal:185,pro:4,carb:4,fat:18,srv:"1 oz (28g)",visual:"1 thumb",unit:"oz",gramsPerSrv:28,goals:["fat_loss","gut_support"]},
  {name:"Almonds",cat:"Fats",cal:164,pro:6,carb:6,fat:14,srv:"1 oz (28g)",visual:"1 thumb",unit:"oz",gramsPerSrv:28,goals:["recomp","fat_loss"]},
  {name:"Almond Butter",cat:"Fats",cal:196,pro:7,carb:7,fat:18,srv:"2 tbsp (32g)",visual:"1 thumb",unit:"tbsp",gramsPerSrv:32,goals:["muscle_gain","performance"]},
  {name:"Natural Peanut Butter",cat:"Fats",cal:188,pro:8,carb:6,fat:16,srv:"2 tbsp (32g)",visual:"1 thumb",unit:"tbsp",gramsPerSrv:32,goals:["muscle_gain"]},
  {name:"Chia Seeds",cat:"Fats",cal:138,pro:5,carb:12,fat:9,srv:"2 tbsp (28g)",visual:"1 thumb",unit:"tbsp",gramsPerSrv:28,goals:["gut_support","recomp"]},
  {name:"Coconut Oil",cat:"Fats",cal:117,pro:0,carb:0,fat:14,srv:"1 tbsp",visual:"1 thumb",unit:"tbsp",gramsPerSrv:14,goals:["performance"]},
  {name:"Grass-fed Butter",cat:"Fats",cal:102,pro:0,carb:0,fat:12,srv:"1 tbsp",visual:"1 thumb",unit:"tbsp",gramsPerSrv:14,goals:["performance"]},
  {name:"Pumpkin Seeds",cat:"Fats",cal:151,pro:7,carb:5,fat:13,srv:"1 oz (28g)",visual:"1 thumb",unit:"oz",gramsPerSrv:28,goals:["gut_support","recomp"]},
  {name:"Dark Chocolate (85%+)",cat:"Fats",cal:170,pro:3,carb:13,fat:12,srv:"1 oz (28g)",visual:"1 thumb",unit:"oz",gramsPerSrv:28,goals:["recomp"]},
  // VEGGIES
  {name:"Broccoli",cat:"Veggies",cal:31,pro:3,carb:6,fat:0,srv:"1 cup",visual:"1 fist",unit:"cup",gramsPerSrv:91,goals:["fat_loss","recomp","gut_support","muscle_gain"]},
  {name:"Spinach",cat:"Veggies",cal:7,pro:1,carb:1,fat:0,srv:"1 cup raw",visual:"1 fist",unit:"cup",gramsPerSrv:30,goals:["fat_loss","recomp","gut_support","muscle_gain"]},
  {name:"Asparagus",cat:"Veggies",cal:27,pro:3,carb:5,fat:0,srv:"1 cup (134g)",visual:"1 fist",unit:"cup",gramsPerSrv:134,goals:["fat_loss","recomp"]},
  {name:"Zucchini",cat:"Veggies",cal:20,pro:2,carb:4,fat:0,srv:"1 cup sliced",visual:"1 fist",unit:"cup",gramsPerSrv:124,goals:["fat_loss","gut_support"]},
  {name:"Bell Peppers",cat:"Veggies",cal:31,pro:1,carb:7,fat:0,srv:"1 medium",visual:"1 fist",unit:"each",gramsPerSrv:119,goals:["fat_loss","gut_support"]},
  {name:"Green Beans",cat:"Veggies",cal:35,pro:2,carb:8,fat:0,srv:"1 cup",visual:"1 fist",unit:"cup",gramsPerSrv:125,goals:["fat_loss","gut_support"]},
  {name:"Kale",cat:"Veggies",cal:34,pro:2,carb:7,fat:0,srv:"1 cup chopped",visual:"1 fist",unit:"cup",gramsPerSrv:67,goals:["fat_loss","gut_support"]},
  {name:"Cauliflower",cat:"Veggies",cal:25,pro:2,carb:5,fat:0,srv:"1 cup",visual:"1 fist",unit:"cup",gramsPerSrv:100,goals:["fat_loss","gut_support"]},
  {name:"Brussels Sprouts",cat:"Veggies",cal:56,pro:4,carb:11,fat:1,srv:"1 cup",visual:"1 fist",unit:"cup",gramsPerSrv:156,goals:["fat_loss","gut_support"]},
  {name:"Mushrooms",cat:"Veggies",cal:15,pro:2,carb:2,fat:0,srv:"1 cup",visual:"1 fist",unit:"cup",gramsPerSrv:70,goals:["gut_support","recomp"]},
  {name:"Cabbage",cat:"Veggies",cal:22,pro:1,carb:5,fat:0,srv:"1 cup shredded",visual:"1 fist",unit:"cup",gramsPerSrv:89,goals:["fat_loss","gut_support"]},
  {name:"Romaine Lettuce",cat:"Veggies",cal:8,pro:1,carb:1,fat:0,srv:"2 cups",visual:"2 fists",unit:"cup",gramsPerSrv:94,goals:["fat_loss","gut_support"]},
  {name:"Cucumber",cat:"Veggies",cal:16,pro:1,carb:4,fat:0,srv:"1 cup sliced",visual:"1 fist",unit:"cup",gramsPerSrv:119,goals:["fat_loss","gut_support"]},
  {name:"Tomatoes",cat:"Veggies",cal:22,pro:1,carb:5,fat:0,srv:"1 cup",visual:"1 fist",unit:"cup",gramsPerSrv:149,goals:["fat_loss","gut_support"]},
  {name:"Arugula",cat:"Veggies",cal:5,pro:1,carb:1,fat:0,srv:"1 cup",visual:"1 fist",unit:"cup",gramsPerSrv:20,goals:["fat_loss","recomp"]},
  // FRUITS
  {name:"Apple",cat:"Fruits",cal:95,pro:0,carb:25,fat:0,srv:"1 medium",visual:"1 fist",unit:"each",gramsPerSrv:182,goals:["fat_loss","recomp"]},
  {name:"Orange",cat:"Fruits",cal:62,pro:1,carb:15,fat:0,srv:"1 medium",visual:"1 fist",unit:"each",gramsPerSrv:131,goals:["fat_loss","gut_support"]},
  {name:"Mango",cat:"Fruits",cal:107,pro:1,carb:28,fat:0,srv:"3/4 cup",visual:"1 cupped hand",unit:"cup",gramsPerSrv:124,goals:["muscle_gain","performance"]},
  {name:"Strawberries",cat:"Fruits",cal:49,pro:1,carb:12,fat:0,srv:"1 cup",visual:"1 cupped hand",unit:"cup",gramsPerSrv:152,goals:["fat_loss","recomp"]},
  {name:"Grapefruit",cat:"Fruits",cal:52,pro:1,carb:13,fat:0,srv:"1/2 medium",visual:"1 fist",unit:"each",gramsPerSrv:123,goals:["fat_loss"]},
  {name:"Watermelon",cat:"Fruits",cal:86,pro:2,carb:22,fat:0,srv:"2 cups",visual:"2 fists",unit:"cup",gramsPerSrv:280,goals:["performance","muscle_gain"]},
  {name:"Pomegranate",cat:"Fruits",cal:83,pro:2,carb:19,fat:1,srv:"1/2 cup seeds",visual:"1 cupped hand",unit:"cup",gramsPerSrv:87,goals:["gut_support","recomp"]},
  {name:"Kiwi",cat:"Fruits",cal:61,pro:1,carb:15,fat:1,srv:"2 medium",visual:"1 cupped hand",unit:"each",gramsPerSrv:148,goals:["gut_support","fat_loss"]},
  {name:"Raspberries",cat:"Fruits",cal:65,pro:2,carb:15,fat:1,srv:"1 cup",visual:"1 cupped hand",unit:"cup",gramsPerSrv:123,goals:["fat_loss","gut_support"]},
  {name:"Blackberries",cat:"Fruits",cal:62,pro:2,carb:14,fat:1,srv:"1 cup",visual:"1 cupped hand",unit:"cup",gramsPerSrv:144,goals:["fat_loss","gut_support"]},
  // EXTRAS
  {name:"Honey",cat:"Extras",cal:64,pro:0,carb:17,fat:0,srv:"1 tbsp",visual:"1 thumb",unit:"tbsp",gramsPerSrv:21,goals:["muscle_gain","performance"]},
  {name:"Electrolytes",cat:"Extras",cal:10,pro:0,carb:2,fat:0,srv:"1 packet",visual:"1 packet",unit:"packet",gramsPerSrv:5,goals:["performance","muscle_gain"]},
  {name:"Creatine",cat:"Extras",cal:0,pro:0,carb:0,fat:0,srv:"5g / 1 tsp",visual:"1 thumb",unit:"g",gramsPerSrv:5,goals:["muscle_gain","performance"]},
  {name:"Turmeric",cat:"Extras",cal:8,pro:0,carb:1,fat:0,srv:"1 tsp",visual:"pinch",unit:"tsp",gramsPerSrv:3,goals:["gut_support"]},
  {name:"Ginger",cat:"Extras",cal:5,pro:0,carb:1,fat:0,srv:"1 tsp fresh",visual:"pinch",unit:"tsp",gramsPerSrv:5,goals:["gut_support"]},
  {name:"Apple Cider Vinegar",cat:"Extras",cal:3,pro:0,carb:1,fat:0,srv:"1 tbsp",visual:"1 thumb",unit:"tbsp",gramsPerSrv:15,goals:["gut_support","fat_loss"]},
  {name:"Bone Broth",cat:"Extras",cal:35,pro:7,carb:1,fat:0,srv:"1 cup",visual:"1 cup",unit:"cup",gramsPerSrv:240,goals:["gut_support","muscle_gain"]}
];

// Legacy alias
const ALL_FOODS=FOOD_DB;

const MEAL_TEMPLATE_MAP={
  breakfast:{required:["Protein"],optional:["Carbs","Fruits","Fats"],note:"Start with protein. Add carbs or fruit for energy. Optional fat for satiety."},
  lunch:{required:["Protein","Carbs","Veggies"],optional:["Fats"],note:"Full meal. Protein + carb + veggie every time."},
  dinner:{required:["Protein","Carbs","Veggies"],optional:["Fats"],note:"Protein + carb + veggie. Lighter carbs if evening."},
  snack1:{required:["Protein"],optional:["Fruits","Carbs"],note:"Protein-first snack. Add fruit or carb for energy."},
  snack2:{required:["Protein"],optional:["Fats","Extras"],note:"Recovery or fat-focused support snack."}
};

const GOAL_FOOD_BIAS={
  fat_loss:{prefer:["Protein","Veggies","Fruits"],limit:["Fats"],note:"Prioritize fullness, recovery, and steady energy."},
  muscle_gain:{prefer:["Protein","Carbs","Extras"],limit:[],note:"Fuel performance, recovery, and muscle growth."},
  recomp:{prefer:["Protein","Veggies"],limit:[],note:"Support muscle retention while keeping calories controlled."},
  gut_support:{prefer:["Protein","Veggies","Fruits"],limit:["Fats"],note:"Keep digestion calm while maintaining adequate intake."},
  performance:{prefer:["Carbs","Protein","Extras"],limit:[],note:"Maximize training output and recovery speed."}
};


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


function ExerciseModal({ex,onClose}){
  const db=EXERCISE_DB.find(e=>e.name===ex)||null;
  const buildFallbackVid=(name)=>`https://www.youtube.com/results?search_query=${encodeURIComponent(name+' exercise form tutorial')}`;
  const vid=VID[ex]||db?.video||buildFallbackVid(ex);
  const cue=CUES[ex]||null;
  const prog=PROG[ex]||db?.progression||[];
  const regr=db?.regression||[];
  // Always render full modal - no early bail-out
  
  return h("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.75)",zIndex:999,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end"},onClick:onClose},
    h("div",{style:{background:C.white,borderRadius:"16px 16px 0 0",width:"100%",maxWidth:520,maxHeight:"90vh",overflowY:"auto"},onClick:e=>e.stopPropagation()},
      h("div",{style:{background:C.navy,color:C.white,padding:"14px 18px",borderRadius:"16px 16px 0 0",display:"flex",justifyContent:"space-between",alignItems:"center"}},
        h("div",null,
          h("div",{style:{fontWeight:"bold",fontSize:16}},ex),
          db&&h("div",{style:{fontSize:11,color:C.tealLight,marginTop:2}},db.diff+" | "+db.cat+(db.pattern?" | "+db.pattern:""))
        ),
        h("button",{onClick:onClose,style:{background:"none",border:"none",color:C.white,fontSize:22,cursor:"pointer",lineHeight:1}},"×")
      ),
      h("div",{style:{padding:16}},
        // Video link — always shown
        vid&&h("a",{href:vid,target:"_blank",rel:"noopener noreferrer",style:{display:"block",background:C.tealLight,border:"1px solid "+C.teal+"44",borderRadius:10,padding:"10px 14px",marginBottom:14,textDecoration:"none",textAlign:"center"}},
          h("span",{style:{color:C.teal,fontWeight:"bold",fontSize:13}},"▶ Watch Demo Video")
        ),
        // Muscles
        db&&db.muscles&&h("div",{style:{marginBottom:12}},
          h("div",{style:{fontSize:10,fontWeight:"bold",color:C.navy,letterSpacing:1,marginBottom:6}},"PRIMARY MUSCLES"),
          h("div",{style:{display:"flex",flexWrap:"wrap",gap:4}},
            db.muscles.map((m,i)=>h(Pill,{key:i,label:m,color:C.teal})),
            (db.secondary||[]).map((m,i)=>h(Pill,{key:"s"+i,label:m,color:C.gray}))
          )
        ),
        // General form reminders for any exercise without specific cues
        !db&&!cue&&h("div",{style:{marginBottom:14}},
          h("div",{style:{fontSize:10,fontWeight:"bold",color:C.navy,letterSpacing:1,marginBottom:8}},"GENERAL FORM PRINCIPLES"),
          h("div",{style:{background:C.tealLight,borderRadius:8,padding:"10px 12px",fontSize:13,color:C.navy,lineHeight:1.7}},
            [
              "✦ Brace your core before each rep — like you're about to take a punch.",
              "✦ Control the eccentric (lowering) phase — 2-3 seconds down.",
              "✦ Drive through your target muscle, not momentum.",
              "✦ Breathe out on the effort, in on the release.",
              "✦ Stop 1-2 reps before form breaks down."
            ].join("
")
          )
        ),
        // Cues
        (cue||db?.setup)&&h("div",{style:{marginBottom:14}},
          h("div",{style:{fontSize:10,fontWeight:"bold",color:C.navy,letterSpacing:1,marginBottom:8}},"COACHING CUES"),
          cue&&h("div",{style:{background:C.tealLight,border:"1px solid "+C.teal+"33",borderRadius:8,padding:"10px 12px",marginBottom:8,fontSize:14,color:C.navy,lineHeight:1.7}},cue),
          db&&!cue&&h("div",null,
            db.setup&&h("div",{style:{marginBottom:8}},
              h("div",{style:{fontSize:10,color:C.teal,fontWeight:"bold",letterSpacing:0.8,marginBottom:3}},"SETUP"),
              h("div",{style:{fontSize:14,color:C.navy,lineHeight:1.7}},db.setup)
            ),
            db.action&&h("div",{style:{marginBottom:8}},
              h("div",{style:{fontSize:10,color:C.teal,fontWeight:"bold",letterSpacing:0.8,marginBottom:3}},"ACTION"),
              h("div",{style:{fontSize:14,color:C.navy,lineHeight:1.7}},db.action)
            ),
            db.feel&&h("div",{style:{marginBottom:8}},
              h("div",{style:{fontSize:10,color:C.teal,fontWeight:"bold",letterSpacing:0.8,marginBottom:3}},"WHERE TO FEEL IT"),
              h("div",{style:{fontSize:14,color:C.navy,lineHeight:1.7}},db.feel)
            ),
            db.breath&&h("div",{style:{marginBottom:8}},
              h("div",{style:{fontSize:10,color:C.teal,fontWeight:"bold",letterSpacing:0.8,marginBottom:3}},"BREATHING"),
              h("div",{style:{fontSize:14,color:C.navy,lineHeight:1.7}},db.breath)
            )
          )
        ),
        // Common mistakes
        db&&db.mistakes&&db.mistakes.length>0&&h("div",{style:{marginBottom:14}},
          h("div",{style:{fontSize:10,fontWeight:"bold",color:C.red,letterSpacing:1,marginBottom:6}},"COMMON MISTAKES"),
          h("div",{style:{background:C.amberLight,border:"1px solid "+C.amber+"33",borderRadius:8,padding:"10px 12px"}},
            db.mistakes.map((m,i)=>h("div",{key:i,style:{fontSize:13,color:C.navy,marginBottom:i<db.mistakes.length-1?4:0}},
              h("span",{style:{color:C.red,marginRight:6}},"✗"),m
            ))
          )
        ),
        // Progressions / Regressions
        (prog.length>0||regr.length>0)&&h(G2,null,
          prog.length>0&&h("div",null,
            h("div",{style:{fontSize:10,fontWeight:"bold",color:C.green,letterSpacing:1,marginBottom:6}},"PROGRESSIONS"),
            prog.map((p,i)=>h("div",{key:i,style:{fontSize:12,color:C.navy,padding:"4px 8px",background:C.greenLight,borderRadius:5,marginBottom:3}},p))
          ),
          regr.length>0&&h("div",null,
            h("div",{style:{fontSize:10,fontWeight:"bold",color:C.amber,letterSpacing:1,marginBottom:6}},"REGRESSIONS"),
            regr.map((r,i)=>h("div",{key:i,style:{fontSize:12,color:C.navy,padding:"4px 8px",background:C.amberLight,borderRadius:5,marginBottom:3}},r))
          )
        ),
        h(Btn,{onClick:onClose,color:C.navy,full:true,st:{marginTop:16}},"Close")
      )
    )
  );
}


// ── Set Logger with Auto-Progression ─────────────────────────────────────
function SetLogger({ex, cid, di, si, ei, prescription}) {
  // Parse sets from prescription e.g. "3 x 12" or "4 x 8-10"
  const parseSets = (presc) => {
    if (!presc) return 3;
    const m = presc.match(/(\d+)\s*[x×]/i);
    return m ? parseInt(m[1]) : 3;
  };
  const parseReps = (presc) => {
    if (!presc) return '';
    const m = presc.match(/[x×]\s*([\d\-]+)/i);
    return m ? m[1] : '';
  };
  const parseWeight = (presc) => {
    if (!presc) return '';
    const m = presc.match(/(\d+(?:\.\d+)?)\s*(?:lbs?|kg)/i);
    return m ? m[1] : '';
  };

  const logKey = `tbf_setlog_${cid}_${di}_${si}_${ei}`;
  const [sets, setSets] = useState(() => {
    try { return JSON.parse(localStorage.getItem(logKey) || 'null') || []; } catch { return []; }
  });
  const [open, setOpen] = useState(false);
  const [editIdx, setEditIdx] = useState(null);
  const [entryWeight, setEntryWeight] = useState(() => parseWeight(prescription));
  const [entryReps, setEntryReps] = useState(() => parseReps(prescription));
  const [entryRpe, setEntryRpe] = useState('');
  const [autoNote, setAutoNote] = useState('');
  const totalSets = parseSets(prescription);

  const save = (updated) => {
    setSets(updated);
    try { localStorage.setItem(logKey, JSON.stringify(updated)); } catch {}
  };

  const checkProgression = (logs) => {
    // Auto-progression rule: if all sets hit top of rep range at target weight → suggest progression
    if (logs.length < totalSets) return null;
    const targetRepsStr = parseReps(prescription);
    const topReps = parseInt((targetRepsStr.split('-')[1] || targetRepsStr || '0'));
    const allHitTop = logs.every(s => parseInt(s.reps) >= topReps && topReps > 0);
    if (allHitTop) return `✦ All sets hit ${topReps} reps — ready to increase weight or reps next session!`;
    const avgRpe = logs.reduce((s, l) => s + (parseInt(l.rpe) || 7), 0) / logs.length;
    if (avgRpe <= 6 && logs.length >= totalSets) return `✦ RPE averaging ${avgRpe.toFixed(1)} — consider adding weight next session`;
    return null;
  };

  const logSet = () => {
    const newSet = {
      set: sets.length + 1,
      weight: entryWeight,
      reps: entryReps,
      rpe: entryRpe,
      time: new Date().toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit'}),
      date: new Date().toISOString().slice(0,10)
    };
    const updated = editIdx !== null
      ? sets.map((s, i) => i === editIdx ? {...newSet, set: s.set} : s)
      : [...sets, newSet];
    save(updated);
    setEditIdx(null);
    setEntryRpe('');
    const prog = checkProgression(updated);
    if (prog) setAutoNote(prog);
  };

  const completedSets = sets.length;
  const allDone = completedSets >= totalSets;

  return h('div', {style:{marginTop:8, borderTop:'1px solid '+C.grayBorder, paddingTop:8}},
    h('div', {style:{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:open?10:0}},
      h('div', {style:{display:'flex', alignItems:'center', gap:8}},
        h('div', {style:{fontSize:11, fontWeight:'bold', color:allDone?C.green:C.teal, letterSpacing:0.5}},
          'SETS: '+completedSets+'/'+totalSets
        ),
        h('div', {style:{display:'flex', gap:3}},
          Array.from({length:totalSets}).map((_, i) =>
            h('div', {key:i, style:{width:10, height:10, borderRadius:'50%', background: i < completedSets ? C.green : C.grayBorder}})
          )
        )
      ),
      h('button', {onClick:()=>setOpen(!open), style:{fontSize:11, color:C.teal, background:'none', border:'none', cursor:'pointer', fontFamily:'Georgia,serif', fontWeight:'bold'}},
        open ? '▲ Hide' : '▼ Log Sets'
      )
    ),
    open && h('div', null,
      // Logged sets
      sets.length > 0 && h('div', {style:{background:C.tealLight, borderRadius:8, padding:'8px 10px', marginBottom:10}},
        h('div', {style:{fontSize:10, fontWeight:'bold', color:C.navy, letterSpacing:1, marginBottom:6}}, 'LOGGED SETS'),
        h('div', {style:{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:4, fontSize:11, color:C.gray, marginBottom:4, fontWeight:'bold'}},
          h('div',null,'SET'), h('div',null,'WEIGHT'), h('div',null,'REPS'), h('div',null,'RPE')
        ),
        sets.map((s, i) =>
          h('div', {key:i, style:{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:4, fontSize:12, color:C.navy, padding:'3px 0', borderTop:'1px solid '+C.teal+'22'}},
            h('div',{style:{fontWeight:'bold'}}, '#'+s.set),
            h('div',null, s.weight ? s.weight+'lbs' : '—'),
            h('div',null, s.reps || '—'),
            h('div',null, s.rpe ? 'RPE '+s.rpe : '—')
          )
        )
      ),
      // Entry row
      !allDone && h('div', {style:{display:'grid', gap:6}},
        h('div', {style:{fontSize:11, color:C.gray, fontWeight:'bold'}}, 'LOG SET '+(completedSets+1)),
        h('div', {style:{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:6}},
          h('div', null,
            h('div', {style:{fontSize:10, color:C.gray, marginBottom:3}}, 'WEIGHT (lbs)'),
            h(Inp, {value:entryWeight, onChange:setEntryWeight, placeholder:'135'})
          ),
          h('div', null,
            h('div', {style:{fontSize:10, color:C.gray, marginBottom:3}}, 'REPS'),
            h(Inp, {value:entryReps, onChange:setEntryReps, placeholder:'12'})
          ),
          h('div', null,
            h('div', {style:{fontSize:10, color:C.gray, marginBottom:3}}, 'RPE (1-10)'),
            h(Inp, {value:entryRpe, onChange:setEntryRpe, placeholder:'7'})
          )
        ),
        h(Btn, {onClick:logSet, color:C.teal, full:true, st:{marginTop:2}},
          editIdx !== null ? 'Update Set' : 'Log Set '+( completedSets+1)
        )
      ),
      allDone && h('div', {style:{background:C.greenLight, border:'1px solid '+C.green+'44', borderRadius:8, padding:'8px 12px', fontSize:12, color:C.navy, textAlign:'center', fontWeight:'bold'}},
        '✓ All '+totalSets+' sets complete!'
      ),
      // Auto progression note
      autoNote && h('div', {style:{background:C.amberLight, border:'1px solid '+C.amber, borderRadius:8, padding:'10px 12px', fontSize:12, color:C.navy, marginTop:8}},
        autoNote
      ),
      // Clear button
      sets.length > 0 && h('button', {onClick:()=>{save([]);setAutoNote('');}, style:{fontSize:11, color:C.gray, background:'none', border:'none', cursor:'pointer', marginTop:6, fontFamily:'Georgia,serif'}},
        'Clear log'
      )
    )
  );
}


function ExCard({ex,cid,di,si,ei,isTrainer,onShowInfo}){
  const [checked,setChecked]=useState(()=>LS.get(exK(cid,"chk",di,si,ei),false));
  const [curName,setCurName]=useState(()=>LS.get(exK(cid,"swap",di,si,ei),ex.name));
  const [curPresc,setCurPresc]=useState(()=>LS.get(exK(cid,"presc",di,si,ei),ex.prescription));
  const [restPeriod,setRestPeriod]=useState(()=>LS.get(exK(cid,"rest",di,si,ei),ex.rest||""));
  const [isSuperset,setIsSuperset]=useState(()=>LS.get(exK(cid,"super",di,si,ei),false));
  const [supersetWith,setSupersetWith]=useState(()=>LS.get(exK(cid,"superwith",di,si,ei),""));
  const [panel,setPanel]=useState(null);
  const [search,setSearch]=useState("");
  const [prescEdit,setPrescEdit]=useState(curPresc);
  const [restEdit,setRestEdit]=useState(restPeriod);
  const [showCue,setShowCue]=useState(false);
  const progs=PROG[ex.name]||PROG[curName]||[];
  const results=search.length>1?ALL_EX_FULL2.filter(e=>e.name.toLowerCase().includes(search.toLowerCase())).slice(0,12):[];
  const tog=(p)=>setPanel(panel===p?null:p);
  const checkToggle=()=>{const v=!checked;setChecked(v);LS.set(exK(cid,"chk",di,si,ei),v);};
  const savePresc=()=>{setCurPresc(prescEdit);LS.set(exK(cid,"presc",di,si,ei),prescEdit);setPanel(null);};
  const saveRest=()=>{setRestPeriod(restEdit);LS.set(exK(cid,"rest",di,si,ei),restEdit);setPanel(null);};
  const doSwap=(name)=>{setCurName(name);LS.set(exK(cid,"swap",di,si,ei),name);setSearch("");setPanel(null);};
  const doSuperset=(v)=>{setIsSuperset(v);LS.set(exK(cid,"super",di,si,ei),v);};
  const doSupersetWith=(v)=>{setSupersetWith(v);LS.set(exK(cid,"superwith",di,si,ei),v);};

  return h("div",{style:{background:C.white,border:`1px solid ${isSuperset?C.amber:C.grayBorder}`,borderRadius:10,padding:"12px 14px",marginBottom:8,
    borderLeft:isSuperset?`4px solid ${C.amber}`:`4px solid ${checked?C.green:C.teal}`}},
    h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:8}},
      h("div",{style:{flex:1,minWidth:0}},
        isSuperset&&h("div",{style:{fontSize:10,color:C.amber,fontWeight:"bold",letterSpacing:1,marginBottom:3}},"SUPERSET"+(supersetWith?` w/ ${supersetWith}`:"")),
        h("div",{style:{fontWeight:"bold",fontSize:14,color:checked?C.gray:C.navy,textDecoration:checked?"line-through":"none",marginBottom:3}},curName),
        h("div",{style:{fontSize:12,color:C.teal2}},curPresc),
        restPeriod&&h("div",{style:{fontSize:11,color:C.amber,marginTop:2}},"Rest: "+restPeriod)
      ),
      h("div",{onClick:checkToggle,style:{width:26,height:26,borderRadius:6,border:`2px solid ${checked?C.green:C.grayBorder}`,background:checked?C.green:"transparent",display:"grid",placeItems:"center",cursor:"pointer",flexShrink:0}},
        checked&&h("span",{style:{color:C.white,fontSize:14,fontWeight:"bold"}},"✓")
      )
    ),
    h("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginTop:8}},
      h(Btn,{onClick:()=>onShowInfo&&onShowInfo(curName),color:C.navy,small:true},"ℹ Info"),
      isTrainer&&h(Btn,{onClick:()=>tog("presc"),color:panel==="presc"?C.navy:C.grayLight,fg:panel==="presc"?C.white:C.navy,small:true},"✏ Rx"),
      isTrainer&&h(Btn,{onClick:()=>tog("rest"),color:panel==="rest"?C.amber:C.grayLight,fg:panel==="rest"?C.white:C.navy,small:true},"⏱ Rest"),
      isTrainer&&h(Btn,{onClick:()=>tog("swap"),color:panel==="swap"?C.teal:C.grayLight,fg:panel==="swap"?C.white:C.navy,small:true},"⇄ Swap"),
      isTrainer&&h(Btn,{onClick:()=>doSuperset(!isSuperset),color:isSuperset?C.amber:C.grayLight,fg:isSuperset?C.white:C.navy,small:true},isSuperset?"✓ Superset":"+ Superset"),
      progs.length>0&&h(Btn,{onClick:()=>tog("prog"),color:C.teal,small:true},"↑ Progress")
    ),
    panel==="presc"&&h("div",{style:{marginTop:8,display:"flex",gap:6}},
      h(Inp,{value:prescEdit,onChange:setPrescEdit,placeholder:"e.g. 3 x 12 | 2s hold"}),
      h(Btn,{onClick:savePresc,color:C.teal,small:true},"Save")
    ),
    panel==="rest"&&h("div",{style:{marginTop:8}},
      h("div",{style:{fontSize:11,color:C.gray,marginBottom:6}},"Set rest period between sets"),
      h("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:6}},
        ["30s","45s","60s","90s","2min","3min"].map(r=>h("button",{key:r,onClick:()=>{setRestEdit(r);},
          style:{padding:"5px 10px",borderRadius:6,border:"1.5px solid",fontSize:11,cursor:"pointer",fontFamily:"Georgia,serif",
            borderColor:restEdit===r?C.amber:C.grayBorder,background:restEdit===r?C.amberLight:"transparent",color:restEdit===r?C.navy:C.gray}},r))
      ),
      h("div",{style:{display:"flex",gap:6}},
        h(Inp,{value:restEdit,onChange:setRestEdit,placeholder:"Custom (e.g. 2min 30s)"}),
        h(Btn,{onClick:saveRest,color:C.amber,small:true},"Save"),
        h(Btn,{onClick:()=>{setRestEdit("");setRestPeriod("");LS.set(exK(cid,"rest",di,si,ei),"");setPanel(null);},color:C.grayLight,fg:C.gray,small:true},"Clear")
      )
    ),
    panel==="swap"&&h("div",{style:{marginTop:8}},
      h(Inp,{value:search,onChange:setSearch,placeholder:"Search 1000+ exercises..."}),
      results.length>0&&h("div",{style:{background:C.white,border:`1px solid ${C.grayBorder}`,borderRadius:6,marginTop:4,maxHeight:180,overflowY:"auto"}},
        results.map((e,i)=>h("div",{key:i,onClick:()=>doSwap(e.name),style:{padding:"7px 10px",cursor:"pointer",fontSize:12,color:C.navy,borderBottom:`1px solid ${C.grayBorder}`,display:"flex",justifyContent:"space-between"}},
          h("span",null,e.name),h(Tag,{label:e.cat,color:C.teal})
        ))
      )
    ),
    panel==="prog"&&h("div",{style:{marginTop:8}},
      h("div",{style:{fontSize:11,color:C.gray,marginBottom:6}},"Progression options:"),
      progs.map((p,i)=>h("div",{key:i,onClick:()=>doSwap(p),style:{padding:"7px 10px",cursor:"pointer",fontSize:12,color:C.navy,background:C.tealLight,borderRadius:6,marginBottom:4,display:"flex",justifyContent:"space-between",alignItems:"center"}},
        h("span",null,p),h("span",{style:{color:C.teal,fontSize:10}},"Swap →")
      ))
    ),
    isSuperset&&h("div",{style:{marginTop:8,display:"flex",gap:6,alignItems:"center"}},
      h("div",{style:{fontSize:11,color:C.amber,flexShrink:0}},"Paired with:"),
      h(Inp,{value:supersetWith,onChange:doSupersetWith,placeholder:"Exercise name..."})
    ),
    h(SetLogger,{ex:curName,cid,di,si,ei,prescription:curPresc})
  );
}


function DayView({client,di,isTrainer}){
  const day=client.days[di];
  const [infoEx,setInfoEx]=useState(null);
  if(!day) return null;
  return h("div",null,
    infoEx&&h(ExerciseModal,{ex:infoEx,onClose:()=>setInfoEx(null)}),
    h("div",{style:{background:C.navy,color:C.white,padding:"12px 16px",borderRadius:"8px 8px 0 0",marginBottom:2}},h("div",{style:{fontSize:12,fontWeight:"bold"}},day.title)),
    day.sections.map((sec,si)=>h(Card,{key:si},h(CardH,{t:sec.label,color:sec.color}),sec.exercises.map((ex,ei)=>h(ExCard,{key:ei,ex,cid:client.id,di,si,ei,isTrainer,onShowInfo:setInfoEx}))))
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
  const [calories,setCalories]=useState(()=>LS.get("tbf_cals_"+client.id,dC));
  const [macros,setMacros]=useState(()=>LS.get("tbf_macros_"+client.id,dM));
  const [goalFilter,setGoalFilter]=useState(()=>LS.get("tbf_goal_"+client.id,"recomp"));
  const [mealFoods,setMealFoods]=useState(()=>LS.get("tbf_meals_"+client.id,{}));
  const [portionView,setPortionView]=useState("visual");
  const [swapTarget,setSwapTarget]=useState(null);
  const [swapSearch,setSwapSearch]=useState("");
  const [showCalc,setShowCalc]=useState(false);
  const [showConv,setShowConv]=useState(false);
  const [conv,setConv]=useState({lbs:"",kg:"",feet:"",inches:"",cm:""});
  const [cf,setCf]=useState({weight:"",height:"",age:"",sex:"male",activity:"moderate",goal:"maintenance"});
  const [cr,setCr]=useState(null);

  const MEAL_KEYS=["breakfast","lunch","dinner","snack1","snack2"];
  const MEAL_LABELS={breakfast:"Breakfast",lunch:"Lunch",dinner:"Dinner",snack1:"Snack 1",snack2:"Snack 2"};
  const MEAL_CAL_SPLIT={breakfast:0.25,lunch:0.3,dinner:0.3,snack1:0.075,snack2:0.075};
  const bias=GOAL_FOOD_BIAS[goalFilter]||GOAL_FOOD_BIAS.recomp;

  // ── Portion Math ──────────────────────────────────────────────────────
  const roundServing=(s)=>{if(s<=0.25)return 0.25;if(s<=0.5)return 0.5;if(s<=0.75)return 0.75;return Math.round(s*2)/2;};
  const getServings=(targetG,gramsPerSrv)=>gramsPerSrv>0?roundServing(targetG/gramsPerSrv):1;

  // Get a food item from FOOD_DB by name
  const getFood=(name)=>FOOD_DB.find(f=>f.name===name)||{name,cat:"Protein",cal:150,pro:25,carb:0,fat:5,srv:"1 serving",visual:"1 palm",gramsPerSrv:100};

  // Calculate portions for a meal
  const calcPortions=(mealKey)=>{
    const calSplit=MEAL_CAL_SPLIT[mealKey]||0.2;
    const mealCal=Math.round(calories*calSplit);
    const mealPro=Math.round(macros.protein.grams*calSplit);
    const mealCarb=Math.round(macros.carbs.grams*calSplit);
    const mealFat=Math.round(macros.fat.grams*calSplit);
    const foods=getMealFoods(mealKey);
    return foods.map(f=>{
      const fd=getFood(f.name);
      let targetG=0;
      if(fd.cat==="Protein"||fd.cat==="Extras") targetG=mealPro>0?(mealPro/(fd.pro||1))*fd.gramsPerSrv:fd.gramsPerSrv;
      else if(fd.cat==="Carbs"||fd.cat==="Fruits") targetG=mealCarb>0?(mealCarb/(fd.carb||1))*fd.gramsPerSrv:fd.gramsPerSrv;
      else if(fd.cat==="Fats") targetG=mealFat>0?(mealFat/(fd.fat||1))*fd.gramsPerSrv:fd.gramsPerSrv;
      else targetG=fd.gramsPerSrv;
      const servings=getServings(targetG,fd.gramsPerSrv);
      return {
        name:fd.name,cat:fd.cat,
        servings,
        exact:servings===1?fd.srv:servings+" x "+fd.srv,
        visual:servings===1?fd.visual:servings+" x "+fd.visual,
        cal:Math.round(fd.cal*servings),
        pro:Math.round(fd.pro*servings),
        carb:Math.round(fd.carb*servings),
        fat:Math.round(fd.fat*servings)
      };
    });
  };

  // Generate meal from template + goal bias
  const genMeal=(mealKey)=>{
    const tmpl=MEAL_TEMPLATE_MAP[mealKey];
    const foods=[];
    const used=new Set();
    const getByCat=(cat)=>{
      const pool=FOOD_DB.filter(f=>f.cat===cat&&!used.has(f.name));
      const preferred=pool.filter(f=>f.goals&&f.goals.includes(goalFilter));
      const src=preferred.length>0?preferred:pool;
      const pick=src[Math.floor(Math.random()*src.length)];
      if(pick){used.add(pick.name);return {name:pick.name,cat:pick.cat};}
      return null;
    };
    tmpl.required.forEach(cat=>{const f=getByCat(cat);if(f)foods.push(f);});
    tmpl.optional.forEach(cat=>{
      if(!bias.limit.includes(cat)&&Math.random()>0.4){const f=getByCat(cat);if(f)foods.push(f);}
    });
    return foods;
  };

  const getMealFoods=(key)=>mealFoods[key]||genMeal(key);

  const swapFood=(mealKey,idx,newFood,newCat)=>{
    const current=getMealFoods(mealKey);
    const updated=[...current];updated[idx]={name:newFood,cat:newCat||updated[idx].cat};
    const nm={...mealFoods,[mealKey]:updated};setMealFoods(nm);LS.set("tbf_meals_"+client.id,nm);
    setSwapTarget(null);setSwapSearch("");
  };
  const regenMeal=(key)=>{const nm={...mealFoods,[key]:genMeal(key)};setMealFoods(nm);LS.set("tbf_meals_"+client.id,nm);};
  const regenAll=()=>{const nm={};MEAL_KEYS.forEach(k=>{nm[k]=genMeal(k);});setMealFoods(nm);LS.set("tbf_meals_"+client.id,nm);};

  const calcConv=(field,val)=>{
    const v=parseFloat(val)||0;
    if(field==="lbs")setConv(p=>({...p,lbs:val,kg:(v*0.453592).toFixed(1)}));
    else if(field==="kg")setConv(p=>({...p,kg:val,lbs:(v*2.20462).toFixed(1)}));
    else if(field==="feet"||field==="inches"){
      const f2=field==="feet"?v:parseFloat(conv.feet)||0;
      const i2=field==="inches"?v:parseFloat(conv.inches)||0;
      setConv(p=>({...p,[field]:val,cm:((f2*12+i2)*2.54).toFixed(1)}));
    }else if(field==="cm"){
      const ti=v/2.54;setConv(p=>({...p,cm:val,feet:Math.floor(ti/12),inches:(ti%12).toFixed(1)}));
    }
  };

  const adj=(type,pct)=>{
    const oth=["protein","carbs","fat"].filter(t=>t!==type);
    const rem=100-pct;const total=oth.reduce((s,t)=>s+macros[t].pct,0);
    const newM={...macros,[type]:{pct,grams:Math.round(calories*(pct/100)/(type==="fat"?9:4))}};
    oth.forEach(t=>{const np=total===0?Math.round(rem/2):Math.round(macros[t].pct*(rem/total));newM[t]={pct:np,grams:Math.round(calories*(np/100)/(t==="fat"?9:4))};});
    setMacros(newM);LS.set("tbf_macros_"+client.id,newM);
  };

  const calc=()=>{
    const w=parseFloat(cf.weight),ht=parseFloat(cf.height),a=parseFloat(cf.age);
    if(!w||!ht||!a)return;
    const bmr=cf.sex==="male"?(10*w)+(6.25*ht)-(5*a)+5:(10*w)+(6.25*ht)-(5*a)-161;
    const actF={sedentary:1.2,light:1.375,moderate:1.55,active:1.725,very_active:1.9}[cf.activity]||1.55;
    const tdee=Math.round(bmr*actF);
    const goalCals=cf.goal==="loss"?tdee-500:cf.goal==="gain"?tdee+300:tdee;
    const protG=Math.round(w*2.2);const fatG=Math.round(goalCals*0.25/9);
    const carbG=Math.round((goalCals-(protG*4)-(fatG*9))/4);
    const protPct=Math.round((protG*4/goalCals)*100);const fatPct=Math.round((fatG*9/goalCals)*100);
    setCr({calories:goalCals,protein:{pct:protPct,grams:protG},carbs:{pct:100-protPct-fatPct,grams:carbG},fat:{pct:fatPct,grams:fatG},tdee});
  };
  const applyCalc=()=>{if(!cr)return;setCalories(cr.calories);setMacros(cr);LS.set("tbf_cals_"+client.id,cr.calories);LS.set("tbf_macros_"+client.id,cr);};

  const MB=({label,pct,grams,color,type})=>h("div",{style:{marginBottom:16}},
    h("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4}},
      h("span",{style:{fontWeight:"bold",color,fontSize:13}},label),
      h("span",{style:{color:C.navy,fontWeight:"bold",fontSize:13}},pct+"% — "+grams+"g")
    ),
    h("input",{type:"range",min:5,max:70,value:pct,onChange:e=>adj(type,parseInt(e.target.value)),style:{accentColor:color,width:"100%"}})
  );

  const swapModal=swapTarget&&h("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:999,display:"flex",alignItems:"flex-end",justifyContent:"center"}},
    h("div",{style:{background:C.white,borderRadius:"16px 16px 0 0",width:"100%",maxWidth:480,padding:20,maxHeight:"72vh",overflowY:"auto"}},
      h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:15,marginBottom:2}},"Swap: "+swapTarget.name),
      h("div",{style:{fontSize:11,color:C.gray,marginBottom:10}},"Same category shown first. Search for anything."),
      h(Inp,{value:swapSearch,onChange:setSwapSearch,placeholder:"Search foods..."}),
      h("div",{style:{marginTop:8}},
        FOOD_DB
          .filter(f=>swapSearch.length>1?f.name.toLowerCase().includes(swapSearch.toLowerCase()):f.cat===swapTarget.cat)
          .filter(f=>f.name!==swapTarget.name)
          .slice(0,14)
          .map((f,i)=>h("div",{key:i,onClick:()=>swapFood(swapTarget.mealKey,swapTarget.idx,f.name,f.cat),
            style:{padding:"10px 12px",cursor:"pointer",borderBottom:"1px solid "+C.grayBorder,display:"flex",justifyContent:"space-between",alignItems:"center"}},
            h("div",null,
              h("div",{style:{fontSize:13,color:C.navy,fontWeight:"bold"}},f.name),
              h("div",{style:{fontSize:11,color:C.gray}},f.cal+" cal | "+f.pro+"p "+f.carb+"c "+f.fat+"f per "+f.srv)
            ),
            h(Tag,{label:f.cat,color:f.cat===swapTarget.cat?C.teal:C.gray})
          ))
      ),
      h(Btn,{onClick:()=>{setSwapTarget(null);setSwapSearch("");},color:C.gray,full:true,st:{marginTop:12}},"Cancel")
    )
  );

  return h("div",{style:{paddingBottom:24}},
    swapModal,
    // Converter
    h(Btn,{onClick:()=>setShowConv(!showConv),color:showConv?C.gray:C.navy,full:true,st:{marginBottom:8}},"⇄ Unit Converter  (lbs↔kg  |  ft+in↔cm)"),
    showConv&&h(Card,null,h(CardH,{t:"UNIT CONVERTER"}),h(CardB,null,
      h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:12,marginBottom:8}},"Weight"),
      h(G2,null,
        h(Fld,{label:"POUNDS (lbs)"},h(Inp,{value:conv.lbs,onChange:v=>calcConv("lbs",v),placeholder:"185"})),
        h(Fld,{label:"KILOGRAMS (kg)"},h(Inp,{value:conv.kg,onChange:v=>calcConv("kg",v),placeholder:"84"}))
      ),
      h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:12,marginBottom:8,marginTop:4}},"Height"),
      h(G2,null,
        h("div",null,h(G2,null,
          h(Fld,{label:"FEET"},h(Inp,{value:conv.feet,onChange:v=>calcConv("feet",v),placeholder:"5"})),
          h(Fld,{label:"INCHES"},h(Inp,{value:conv.inches,onChange:v=>calcConv("inches",v),placeholder:"10"}))
        )),
        h(Fld,{label:"CENTIMETERS"},h(Inp,{value:conv.cm,onChange:v=>calcConv("cm",v),placeholder:"178"}))
      )
    )),
    // Calculator
    h(Btn,{onClick:()=>setShowCalc(!showCalc),color:showCalc?C.gray:C.teal,full:true,st:{marginBottom:8}},"📊 Calorie & Macro Calculator"),
    showCalc&&h(Card,null,h(CardH,{t:"CALORIE & MACRO CALCULATOR"}),h(CardB,null,
      h("div",{style:{fontSize:11,color:C.gray,fontStyle:"italic",marginBottom:10}},"Enter weight in kg, height in cm. Use converter above if needed."),
      h(G2,null,
        h(Fld,{label:"WEIGHT (kg)"},h(Inp,{value:cf.weight,onChange:v=>setCf(p=>({...p,weight:v})),placeholder:"84"})),
        h(Fld,{label:"HEIGHT (cm)"},h(Inp,{value:cf.height,onChange:v=>setCf(p=>({...p,height:v})),placeholder:"178"}))
      ),
      h(G2,null,
        h(Fld,{label:"AGE"},h(Inp,{value:cf.age,onChange:v=>setCf(p=>({...p,age:v})),placeholder:"35"})),
        h(Fld,{label:"SEX"},h(Sel,{value:cf.sex,onChange:v=>setCf(p=>({...p,sex:v})),options:[["male","Male"],["female","Female"]]}))
      ),
      h(Fld,{label:"ACTIVITY LEVEL"},h(Sel,{value:cf.activity,onChange:v=>setCf(p=>({...p,activity:v})),options:[["sedentary","Sedentary (desk job)"],["light","Light (1-3x/week)"],["moderate","Moderate (3-5x/week)"],["active","Active (6-7x/week)"],["very_active","Very Active (2x/day)"]]})),
      h(Fld,{label:"GOAL"},h("div",{style:{display:"flex",gap:8}},
        [["loss","Fat Loss",C.red],["maintenance","Maintain",C.teal],["gain","Muscle Gain",C.green]].map(([v,lb,col])=>
          h("div",{key:v,onClick:()=>setCf(p=>({...p,goal:v})),style:{flex:1,textAlign:"center",padding:"8px 4px",borderRadius:8,cursor:"pointer",border:"2px solid "+(cf.goal===v?col:C.grayBorder),background:cf.goal===v?col+"18":C.white}},
            h("div",{style:{fontWeight:"bold",color:cf.goal===v?col:C.gray,fontSize:11}},lb)
          )
        )
      )),
      h(Btn,{onClick:calc,color:C.teal,full:true,st:{marginTop:8}},"Calculate"),
      cr&&h("div",{style:{marginTop:14,padding:14,background:C.tealLight,borderRadius:8}},
        h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:15,marginBottom:4,textAlign:"center"}},cr.calories.toLocaleString()+" cal / day"),
        h("div",{style:{fontSize:12,color:C.gray,textAlign:"center",marginBottom:10}},"TDEE: "+cr.tdee.toLocaleString()),
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
    // Macros
    h(Card,null,h(CardH,{t:"DAILY TARGET — "+calories.toLocaleString()+" CAL"}),h(CardB,null,
      h(MB,{label:"Protein",pct:macros.protein.pct,grams:macros.protein.grams,color:C.teal,type:"protein"}),
      h(MB,{label:"Carbohydrates",pct:macros.carbs.pct,grams:macros.carbs.grams,color:C.amber,type:"carbs"}),
      h(MB,{label:"Fat",pct:macros.fat.pct,grams:macros.fat.grams,color:C.red,type:"fat"}),
      h("div",{style:{fontSize:10,color:C.gray,textAlign:"center",fontStyle:"italic"}},"Drag sliders to adjust. Meal portions update automatically.")
    )),
    // Goal filter
    h(Card,null,h(CardH,{t:"NUTRITION GOAL"}),h(CardB,null,
      h("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:10}},
        Object.entries(GOAL_FOOD_BIAS).map(([k,v])=>
          h("div",{key:k,onClick:()=>{setGoalFilter(k);LS.set("tbf_goal_"+client.id,k);regenAll();},
            style:{textAlign:"center",padding:"8px",borderRadius:8,cursor:"pointer",border:"2px solid "+(goalFilter===k?C.teal:C.grayBorder),background:goalFilter===k?C.tealLight:C.white}},
            h("div",{style:{fontWeight:"bold",color:goalFilter===k?C.teal:C.navy,fontSize:11}},k.replace("_"," ").replace(/[a-z]/g,c=>c.toUpperCase())),
            h("div",{style:{fontSize:9,color:C.gray,marginTop:2}},v.note.slice(0,36)+"...")
          )
        )
      ),
      h("div",{style:{background:C.tealLight,border:"1px solid "+C.teal+"33",borderRadius:8,padding:"8px 12px",fontSize:12,color:C.teal2}},bias.note)
    )),
    // Portion view toggle
    h("div",{style:{display:"flex",gap:8,marginBottom:8}},
      [["visual","👁 Visual Portions"],["exact","📏 Exact Amounts"],["macros","📊 Macro Breakdown"]].map(([v,lb])=>
        h("button",{key:v,onClick:()=>setPortionView(v),style:{flex:1,padding:"8px 4px",border:"1px solid "+(portionView===v?C.teal:C.grayBorder),borderRadius:8,background:portionView===v?C.tealLight:C.white,color:portionView===v?C.teal:C.gray,cursor:"pointer",fontSize:11,fontWeight:portionView===v?"bold":"normal",fontFamily:"Georgia,serif"}},lb)
      )
    ),
    // Meal plan
    h(Card,null,
      h("div",{style:{background:C.navy,color:C.white,padding:"9px 14px",fontSize:11,fontWeight:"bold",letterSpacing:1,display:"flex",justifyContent:"space-between",alignItems:"center"}},
        "MEAL PLAN",
        h("button",{onClick:regenAll,style:{background:C.teal,border:"none",color:C.white,borderRadius:5,padding:"3px 10px",fontSize:11,cursor:"pointer",fontFamily:"Georgia,serif"}},"↺ Regenerate")
      ),
      h(CardB,null,
        h("div",{style:{fontSize:11,color:C.gray,fontStyle:"italic",marginBottom:12}},"Tap any food to swap. Portions auto-calculated from your macro targets."),
        MEAL_KEYS.map(mealKey=>{
          const tmpl=MEAL_TEMPLATE_MAP[mealKey];
          const foods=getMealFoods(mealKey);
          const portions=calcPortions(mealKey);
          const mealCal=portions.reduce((s,p)=>s+p.cal,0);
          const mealPro=portions.reduce((s,p)=>s+p.pro,0);
          const mealCarb=portions.reduce((s,p)=>s+p.carb,0);
          const mealFat=portions.reduce((s,p)=>s+p.fat,0);
          return h("div",{key:mealKey,style:{marginBottom:16,background:C.grayLight,borderRadius:10,padding:12}},
            h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}},
              h("div",null,
                h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:13}},MEAL_LABELS[mealKey]),
                h("div",{style:{fontSize:11,color:C.teal2,fontStyle:"italic"}},tmpl.note)
              ),
              h("div",{style:{display:"flex",gap:6,alignItems:"center"}},
                h("span",{style:{fontSize:11,color:C.gray}},mealCal+" cal"),
                h("button",{onClick:()=>regenMeal(mealKey),style:{background:C.white,border:"1px solid "+C.grayBorder,borderRadius:5,padding:"3px 6px",fontSize:10,cursor:"pointer",color:C.gray,fontFamily:"Georgia,serif"}},"↺")
              )
            ),
            // Food items
            h("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:8}},
              foods.map((food,fi)=>{
                const portion=portions[fi]||{};
                return h("div",{key:fi,
                  onClick:()=>setSwapTarget({...food,mealKey,idx:fi}),
                  style:{background:C.white,border:"1px solid "+(swapTarget?.mealKey===mealKey&&swapTarget?.idx===fi?C.teal:C.grayBorder),borderRadius:20,padding:"5px 12px",fontSize:12,color:C.navy,cursor:"pointer"}},
                  h("div",{style:{fontWeight:"bold",marginBottom:2}},food.name),
                  portionView==="visual"&&h("div",{style:{fontSize:10,color:C.teal2}},portion.visual||""),
                  portionView==="exact"&&h("div",{style:{fontSize:10,color:C.teal2}},portion.exact||""),
                  portionView==="macros"&&h("div",{style:{fontSize:10,color:C.teal2}},(portion.pro||0)+"p "+(portion.carb||0)+"c "+(portion.fat||0)+"f")
                );
              })
            ),
            portionView==="macros"&&h("div",{style:{display:"flex",gap:8,marginTop:4}},
              [["P",mealPro+"g",C.teal],["C",mealCarb+"g",C.amber],["F",mealFat+"g",C.red]].map(([lb,v,col])=>
                h("div",{key:lb,style:{flex:1,textAlign:"center",background:col+"11",borderRadius:6,padding:"4px"}},
                  h("div",{style:{fontSize:12,fontWeight:"bold",color:col}},v),
                  h("div",{style:{fontSize:9,color:C.gray}},lb==="P"?"Protein":lb==="C"?"Carbs":"Fat")
                )
              )
            )
          );
        })
      )
    ),
    // Supplements
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
  const results=search.length>1?ALL_EX_FULL2.filter(e=>e.name.toLowerCase().includes(search.toLowerCase())).slice(0,20):[];
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
        isTrainer&&h("div",{style:{display:"flex",gap:8,marginBottom:10}},
          h(Btn,{onClick:()=>setShowBuilder(true),color:C.navy,full:true,st:{fontSize:12}},"⚙ Workout Builder"),
          h(Btn,{onClick:()=>setShowCardio(true),color:C.teal,full:true,st:{fontSize:12}},"🏃 Cardio Builder")
        ),
        !hasProgram&&!isTrainer&&h("div",{style:{padding:32,textAlign:"center",color:C.gray,fontStyle:"italic"}},h("div",{style:{fontSize:40,marginBottom:12}},"🏋️"),h("div",null,"Your program is being prepared. Check back after your first appointment.")),
        hasProgram&&h("div",null,
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

function TrainerRoster({clients,onSelect,onAddClient,onDeleteClient}){
  const [confirmDelete,setConfirmDelete]=useState(null);
  return h("div",{style:{padding:16}},
    confirmDelete&&h("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",zIndex:999,display:"flex",alignItems:"center",justifyContent:"center",padding:20}},
      h("div",{style:{background:C.white,borderRadius:14,padding:28,maxWidth:340,width:"100%",textAlign:"center"}},
        h("div",{style:{fontSize:22,marginBottom:12}},"⚠️"),
        h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:16,marginBottom:8}},"Delete "+confirmDelete.name+"?"),
        h("div",{style:{fontSize:13,color:C.gray,marginBottom:20}},"This removes them from the roster and Supabase. Their Supabase login account is not affected."),
        h("div",{style:{display:"flex",gap:10}},
          h(Btn,{onClick:()=>setConfirmDelete(null),color:C.grayLight,fg:C.navy,full:true},"Cancel"),
          h(Btn,{onClick:()=>{onDeleteClient(confirmDelete);setConfirmDelete(null);},color:C.red,full:true},"Yes, Delete")
        )
      )
    ),
    h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}},
      h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:16}},"Client Roster"),
      h(Btn,{onClick:onAddClient,color:C.teal,small:true},"+ Add Client")
    ),
    clients.length===0&&h("div",{style:{textAlign:"center",color:C.gray,padding:40,fontStyle:"italic"}},"No clients yet. Add your first client above."),
    clients.map(c=>{
      const hasA=LS.get(`tbf_assess_${c.id}`,null)!==null;
      return h("div",{key:c.id,style:{background:C.white,borderRadius:10,boxShadow:"0 1px 6px rgba(0,0,0,0.07)",padding:"14px 16px",marginBottom:10,borderLeft:`4px solid ${C.teal}`,display:"flex",justifyContent:"space-between",alignItems:"center"}},
        h("div",{onClick:()=>onSelect(c),style:{flex:1,cursor:"pointer"}},
          h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:15}},c.name),
          h("div",{style:{fontSize:11,color:C.gray,marginTop:2}},c.email||(c.focus||"")),
          h("div",{style:{marginTop:6,display:"flex",flexWrap:"wrap",gap:4}},
            h(Pill,{label:`Phase ${c.phase}`,color:C.teal}),
            hasA?h(Pill,{label:"✓ Assessment",color:C.green}):h(Pill,{label:"No Assessment",color:C.amber}),
            c.restrictions?.slice(0,1).map((r,i)=>h(Pill,{key:i,label:r,color:C.red}))
          )
        ),
        h("div",{style:{display:"flex",gap:8,alignItems:"center",marginLeft:10}},
          h("button",{onClick:()=>onSelect(c),style:{background:"none",border:"none",color:C.teal,fontSize:24,cursor:"pointer",lineHeight:1}},"›"),
          h("button",{onClick:e=>{e.stopPropagation();setConfirmDelete(c);},style:{background:"none",border:"none",color:C.red,fontSize:18,cursor:"pointer",lineHeight:1,padding:"4px"}},"✕")
        )
      );
    })
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
const TRAINER_EMAIL="aja2012@gmail.com";
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


function App({supabaseUser=null, supabaseProfile=null, autoTrainer=false}){
  const [user,setUser]=useState(()=>{const s=LS.get("tbf_session");if(!s) return null;if(s.role==="trainer") return TRAINER_U;const clients=LS.get("tbf_clients",INIT);return clients.find(c=>c.id===s.id)||null;});
  const [screen,setScreen]=useState(()=>LS.get("tbf_session")?"app":"login");
  const [viewing,setViewing]=useState(null);
  const [showAdd,setShowAdd]=useState(false);
  const [clients,setClients]=useState(()=>{if(supabase) return [];return LS.get("tbf_clients",INIT);});
  const [clientsLoaded,setClientsLoaded]=useState(!supabase);
  const [clientSelfProfile,setClientSelfProfile]=useState(null);

  // Load clients from Supabase (trainer only)
  useEffect(()=>{
    if(!supabase||!autoTrainer) return;
    supabase.from("tbf_clients").select("*")
      .then(({data,error})=>{
        if(error){console.warn("Load clients:",error.message);setClientsLoaded(true);return;}
        if(!data||data.length===0){setClientsLoaded(true);return;}
        try{
          const mapped=data.map(r=>({
            id:r.email.toLowerCase().replace(/[^a-z0-9]/g,"_"),
            name:r.name,email:r.email,role:"client",
            phase:r.phase||1,focus:r.focus||"",
            restrictions:typeof r.restrictions==="string"?JSON.parse(r.restrictions||"[]"):r.restrictions||[],
            goal:r.goal_template||"posture",
            invitedAt:r.invited_at,
            days:r.days?JSON.parse(r.days):TEMPLATES[r.goal_template||"posture"]?.days||[],
            schedule:[],nutrition:null,password:"",supabase_id:r.id
          }));
          setClients(mapped);
        }catch(e){console.warn("Client map error:",e.message);}
        setClientsLoaded(true);
      })
      .catch(e=>{console.warn("tbf_clients fetch failed:",e.message);setClientsLoaded(true);});
  },[autoTrainer]);

  // Load own profile if signed in as client
  useEffect(()=>{
    if(!supabase||!supabaseUser||autoTrainer) return;
    supabase.from("tbf_clients").select("*").eq("email",supabaseUser.email).single()
      .then(({data,error})=>{
        if(error||!data) return;
        try{
          setClientSelfProfile({
            id:data.email.toLowerCase().replace(/[^a-z0-9]/g,"_"),
            name:data.name,email:data.email,role:"client",
            phase:data.phase||1,focus:data.focus||"",
            restrictions:typeof data.restrictions==="string"?JSON.parse(data.restrictions||"[]"):data.restrictions||[],
            days:data.days?JSON.parse(data.days):TEMPLATES[data.goal_template||"posture"]?.days||[],
            schedule:[],nutrition:null
          });
        }catch(e){console.warn("Client self profile:",e.message);}
      })
      .catch(e=>console.warn("Client self load:",e.message));
  },[supabaseUser?.email,autoTrainer]);

  const handleLogin=u=>{setUser(u);setScreen("app");};
  const handleLogout=()=>{setUser(null);setViewing(null);LS.del("tbf_session");setScreen("login");if(window.__tbf_signout)window.__tbf_signout();};

  const handleAddClient=async c=>{
    const u=[...clients,c];setClients(u);setShowAdd(false);
    if(supabase){
      try{
        await supabase.from("tbf_clients").upsert({
          email:c.email,name:c.name,role:"client",phase:c.phase,
          focus:c.focus,restrictions:JSON.stringify(c.restrictions||[]),
          goal_template:c.goal||"posture",invited_at:c.invitedAt,
          days:JSON.stringify(c.days||[]),
          trainer_id:window.__tbf_user?.id||null
        },{onConflict:"email"});
      }catch(e){console.warn("Supabase client save:",e.message);}
    }
  };

  const handleDeleteClient=async c=>{
    const updated=clients.filter(x=>x.id!==c.id);
    setClients(updated);
    if(viewing?.id===c.id) setViewing(null);
    if(supabase){
      try{await supabase.from("tbf_clients").delete().eq("email",c.email);}
      catch(e){console.warn("Supabase client delete:",e.message);}
    }
  };

  const handleClientUpdate=async updated=>{
    const list=clients.map(c=>c.id===updated.id?updated:c);
    setClients(list);
    if(viewing?.id===updated.id) setViewing(updated);
    if(supabase&&updated.email){
      try{
        await supabase.from("tbf_clients").update({
          name:updated.name,phase:updated.phase,focus:updated.focus,
          restrictions:JSON.stringify(updated.restrictions||[]),
          days:JSON.stringify(updated.days||[])
        }).eq("email",updated.email);
      }catch(e){console.warn("Client update:",e.message);}
    }
  };

  const isTrainer=user?.role==="trainer";
  const supabaseClientProfile=(()=>{
    try{
      if(isTrainer||!supabaseUser) return null;
      return clients.find(c=>c.email&&c.email.toLowerCase()===(supabaseUser.email||"").toLowerCase())||null;
    }catch(e){return null;}
  })();

  // AutoTrainer path — trainer signed in via Supabase
  if(autoTrainer){
    if(!clientsLoaded) return h("div",{style:{minHeight:"100vh",background:C.navy,display:"flex",alignItems:"center",justifyContent:"center"}},
      h("div",{style:{color:C.tealLight,fontFamily:"Georgia,serif",fontSize:14,letterSpacing:2}},"LOADING ROSTER...")
    );
    return h("div",{style:{minHeight:"100vh",background:C.cream}},
      h("div",{style:{background:C.navy,padding:"14px 18px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 12px rgba(0,0,0,0.25)"}},
        h("div",null,
          h("div",{style:{color:C.white,fontWeight:"bold",fontSize:17}},viewing?viewing.name:"True Balance Fitness"),
          h("div",{style:{color:C.tealLight,fontSize:11,marginTop:1}},viewing?"Client View":"Trainer Dashboard")
        ),
        h("div",{style:{display:"flex",gap:8}},
          viewing&&h(Btn,{onClick:()=>setViewing(null),color:C.navy2,small:true},"← Roster"),
          h(Btn,{onClick:()=>{if(window.__tbf_signout)window.__tbf_signout();},color:C.red,small:true},"Sign Out")
        )
      ),
      showAdd&&h(AddClientForm,{onAdd:handleAddClient,onClose:()=>setShowAdd(false)}),
      !viewing&&h(TrainerRoster,{clients:clients.filter(c=>c.role==="client"),onSelect:c=>setViewing(c),onAddClient:()=>setShowAdd(true),onDeleteClient:handleDeleteClient}),
      viewing&&h(ClientView,{client:viewing,isTrainer:true,onClientUpdate:handleClientUpdate})
    );
  }

  // Non-Supabase path — inner login
  if(!supabaseUser){
    if(screen==="register") return h(Register,{onRegister:handleLogin,onBack:()=>setScreen("login")});
    if(screen==="login"||!user) return h(Login,{onLogin:handleLogin,onRegister:()=>setScreen("register")});
  }

  // Client via Supabase
  const effectiveUser = supabaseUser
    ? (clientSelfProfile||supabaseClientProfile||{id:supabaseUser.id,name:supabaseUser.email||"Client",
        role:"client",email:supabaseUser.email||"",days:[],schedule:[],
        nutrition:null,phase:1,focus:"Your trainer is setting up your program.",restrictions:[]})
    : user;
  const effectiveIsTrainer = isTrainer;
  const activeClient = effectiveIsTrainer?viewing:effectiveUser;

  return h("div",{style:{minHeight:"100vh",background:C.cream}},
    h("div",{style:{background:C.navy,padding:"14px 18px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 12px rgba(0,0,0,0.25)"}},
      h("div",null,
        h("div",{style:{color:C.white,fontWeight:"bold",fontSize:17}},effectiveIsTrainer&&viewing?viewing.name:"True Balance Fitness"),
        h("div",{style:{color:C.tealLight,fontSize:11,marginTop:1}},effectiveIsTrainer&&!viewing?"Trainer Dashboard":effectiveIsTrainer?"Client View":(effectiveUser?.focus||"").split("|")[0]?.trim()||"My Program")
      ),
      h("div",{style:{display:"flex",gap:8}},
        effectiveIsTrainer&&viewing&&h(Btn,{onClick:()=>setViewing(null),color:C.navy2,small:true},"← Roster"),
        h(Btn,{onClick:()=>{if(window.__tbf_signout)window.__tbf_signout();else handleLogout();},color:C.red,small:true},"Sign Out")
      )
    ),
    showAdd&&h(AddClientForm,{onAdd:handleAddClient,onClose:()=>setShowAdd(false)}),
    effectiveIsTrainer&&!viewing&&h(TrainerRoster,{clients:clients.filter(c=>c.role==="client"),onSelect:c=>setViewing(c),onAddClient:()=>setShowAdd(true),onDeleteClient:handleDeleteClient}),
    effectiveIsTrainer&&viewing&&h(ClientView,{client:viewing,isTrainer:true,onClientUpdate:handleClientUpdate}),
    !effectiveIsTrainer&&h(ClientView,{
      client:{
        id:activeClient?.id||"client",
        name:activeClient?.name||"Client",
        email:activeClient?.email||"",
        role:"client",
        phase:activeClient?.phase||1,
        focus:activeClient?.focus||"Your trainer is building your program.",
        restrictions:Array.isArray(activeClient?.restrictions)?activeClient.restrictions:[],
        days:Array.isArray(activeClient?.days)?activeClient.days:[],
        schedule:activeClient?.schedule||[],
        nutrition:activeClient?.nutrition||null
      },
      isTrainer:false,
      onClientUpdate:handleClientUpdate
    })
  );
}


function AuthGate() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authMode, setAuthMode] = useState("login");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!supabase) { setLoading(false); return; }
    supabase.auth.getSession().then(({data: {session}}) => {
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
      .then(({data}) => { if (data) setProfile(data); });
  }, [session]);

  if (loading) return h("div",{style:{minHeight:"100vh",background:C.navy,display:"flex",alignItems:"center",justifyContent:"center"}},
    h("div",{style:{color:C.tealLight,fontFamily:"Georgia,serif",fontSize:14,letterSpacing:2}},"LOADING...")
  );

  if (!supabase) return h(App, null);

  if (!session) {
    return h("div",{style:{minHeight:"100vh",background:C.navy,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24}},
      h("div",{style:{color:C.white,fontWeight:"bold",fontSize:28,letterSpacing:1}},"True Balance"),
      h("div",{style:{color:C.tealLight,fontSize:12,letterSpacing:3,marginBottom:36}},"FITNESS"),
      h("div",{style:{background:C.white,borderRadius:14,padding:28,width:"100%",maxWidth:360,boxShadow:"0 8px 32px rgba(0,0,0,0.35)"}},
        h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:16,marginBottom:20,textAlign:"center"}},
          authMode==="login"?"Sign In to Your Plan":"Create Your Account"
        ),
        h("input",{value:email,onChange:e=>setEmail(e.target.value),placeholder:"Email address",type:"email",style:{...istyle,marginBottom:12}}),
        h("input",{value:pw,onChange:e=>setPw(e.target.value),placeholder:"Password",type:"password",style:{...istyle,marginBottom:16}}),
        err&&h("div",{style:{color:C.red,fontSize:12,marginBottom:12,textAlign:"center"}},err),
        h("button",{
          onClick:async()=>{
            setErr("");
            if(authMode==="login"){
              const{error}=await supabase.auth.signInWithPassword({email,password:pw});
              if(error) setErr(error.message);
            }else{
              const{error}=await supabase.auth.signUp({email,password:pw});
              if(error){setErr(error.message);return;}
            }
          },
          style:{background:C.teal,color:C.white,border:"none",borderRadius:7,padding:"12px",fontFamily:"Georgia,serif",fontSize:13,fontWeight:"bold",cursor:"pointer",width:"100%",marginBottom:12}
        },authMode==="login"?"Sign In":"Create Account"),
        h("button",{
          onClick:()=>{setAuthMode(authMode==="login"?"signup":"login");setErr("");},
          style:{background:"none",border:`1.5px solid ${C.grayBorder}`,borderRadius:7,color:C.navy,fontSize:13,cursor:"pointer",width:"100%",padding:"10px 0",fontWeight:"bold",fontFamily:"Georgia,serif"}
        },authMode==="login"?"New client? Create account":"← Back to Sign In"),
        h("div",{style:{marginTop:16,fontSize:11,color:C.gray,textAlign:"center"}},"True Balance Fitness · 228-229-6865")
      )
    );
  }

  if (profile && profile.subscription_status === "canceled") {
    return h(SubscribeScreen, null);
  }

  window.__tbf_signout = () => supabase.auth.signOut();
  window.__tbf_user = session.user;
  const isTrainerEmail = session.user.email === TRAINER_EMAIL;
  return h(App, {supabaseUser: session.user, supabaseProfile: profile, autoTrainer: isTrainerEmail});
}

export default AuthGate;
