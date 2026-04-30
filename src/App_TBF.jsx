import React, { createElement as h, useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
const supabase = SUPABASE_URL ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  realtime: { params: { eventsPerSecond: 10 } }
}) : null;

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

  // ── LOWER BODY ────────────────────────────────────────────────────────
  {name:"Barbell Deadlift",cat:"Lower",region:"Full Posterior Chain",pattern:"Hip Hinge",muscles:["Glutes","Hamstrings","Erectors"],secondary:["Lats","Traps","Quads","Core"],equip:["Barbell"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=conventional+deadlift+form+tutorial",
   setup:"Stand with bar over mid-foot, hip-width stance. Hinge at hips, grip just outside legs. Bar against shins. Proud chest, neutral spine. Big breath in.",
   action:"Push the floor away — think leg press, not pull. Bar stays dragging up your shins. Lock hips and knees at the same time at the top. Hinge back down.",
   feel:"Hamstrings loading on the way down. Full body tension at the top.",
   breath:"Big inhale and brace before lifting. Exhale at lockout or on the way down.",
   mistakes:["Jerking the bar off the floor","Bar drifting away from body","Rounding lower back","Looking straight up — straining neck","Squatting the deadlift"],
   progression:["Sumo Deadlift","Trap Bar Deadlift","Romanian Deadlift"],regression:["Trap Bar Deadlift","Romanian Deadlift","Kettlebell Deadlift"]},

  {name:"Trap Bar Deadlift",cat:"Lower",region:"Full Posterior Chain",pattern:"Hip Hinge",muscles:["Glutes","Hamstrings","Quads"],secondary:["Erectors","Traps","Core"],equip:["Trap Bar"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=trap+bar+deadlift+form+tutorial",
   setup:"Stand centered in the trap bar, feet hip-width. Push hips back, grip handles, neutral spine. Shoulders over or slightly in front of handles.",
   action:"Push floor away with both feet equally. Keep chest tall as you rise. Lock hips and knees out together at the top. Lower with control.",
   feel:"Quads and glutes both working — more balanced than a conventional deadlift.",
   breath:"Inhale and brace before the pull. Exhale at the top.",
   mistakes:["Shooting hips up first","Letting bar pull you forward","Not locking out fully at the top"],
   progression:["Barbell Deadlift","Barbell Romanian Deadlift"],regression:["Goblet Squat","Dumbbell Romanian Deadlift"]},

  {name:"Bulgarian Split Squat",cat:"Lower",region:"Legs",pattern:"Single Leg Squat",muscles:["Quads","Glutes"],secondary:["Hamstrings","Core","Hip Flexors"],equip:["Bench","Dumbbells"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=bulgarian+split+squat+form+tutorial",
   setup:"Rear foot elevated on bench, laces down. Front foot far enough forward that your knee stays behind or over your toes at the bottom. Upright torso.",
   action:"Lower straight down — like you are descending on an elevator. Back knee drops toward the floor. Drive through front heel to stand.",
   feel:"Deep quad stretch in the rear leg. Glute loading in the front leg.",
   breath:"Inhale on the way down. Exhale as you drive up.",
   mistakes:["Front foot too close — knee caves forward","Leaning torso forward excessively","Pushing off rear foot","Not reaching full depth"],
   progression:["Barbell Bulgarian Split Squat","Deficit Bulgarian Split Squat"],regression:["Reverse Lunge","Split Squat — Both Feet on Floor"]},

  {name:"Walking Lunge",cat:"Lower",region:"Legs",pattern:"Single Leg Squat",muscles:["Quads","Glutes"],secondary:["Hamstrings","Core","Hip Flexors"],equip:["Bodyweight","Dumbbells"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=walking+lunge+form+tutorial",
   setup:"Stand tall, feet hip-width. Hold dumbbells at sides or bodyweight. Core braced.",
   action:"Step forward, drop back knee toward floor — stop 1 inch above. Front knee tracks over second toe. Push through front heel to step the rear foot forward. Repeat alternating.",
   feel:"Quad burn in front leg. Hip flexor stretch in rear leg.",
   breath:"Inhale as you lunge down. Exhale as you step through.",
   mistakes:["Front knee caving inward","Torso leaning too far forward","Stomping the front foot — step softly","Short stride causing knee to go past toes"],
   progression:["Dumbbell Walking Lunge","Barbell Walking Lunge","Reverse Lunge — Deficit"],regression:["Stationary Lunge","Reverse Lunge"]},

  {name:"Reverse Lunge",cat:"Lower",region:"Legs",pattern:"Single Leg Squat",muscles:["Quads","Glutes"],secondary:["Hamstrings","Core"],equip:["Bodyweight","Dumbbells"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=reverse+lunge+form+tutorial",
   setup:"Stand tall, feet hip-width. Step one foot straight back onto the ball of the foot.",
   action:"Lower rear knee toward the floor with control. Keep front shin vertical. Front heel stays planted. Drive through front heel to return to standing.",
   feel:"Quad of the front leg doing the work. Easier on the knee than a forward lunge.",
   breath:"Inhale down. Exhale on the way up.",
   mistakes:["Knee caving inward","Letting heel rise on front foot","Not reaching full depth"],
   progression:["Walking Lunge","Bulgarian Split Squat"],regression:["Assisted Reverse Lunge","Step Down"]},

  {name:"Step Up",cat:"Lower",region:"Legs",pattern:"Single Leg Squat",muscles:["Quads","Glutes"],secondary:["Hamstrings","Core"],equip:["Box","Dumbbells"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=step+up+exercise+form+tutorial",
   setup:"Stand in front of a box or bench. Place entire foot on the surface — heel included.",
   action:"Drive through the heel of the working leg to step up. Do NOT push off the trailing leg. Stand tall at the top. Lower back down with control.",
   feel:"Glute and quad of the working leg. If you feel it in your calf, shift weight to heel.",
   breath:"Exhale as you step up. Inhale as you step down.",
   mistakes:["Pushing off the back foot","Leaning heavily forward","Not fully extending at the top"],
   progression:["Weighted Step Up","High Box Step Up","Bulgarian Split Squat"],regression:["Bodyweight Step Up — Low Box","Sit to Stand"]},

  {name:"Hip Thrust",cat:"Lower",region:"Glutes",pattern:"Hip Extension",muscles:["Glutes"],secondary:["Hamstrings","Core","Hip Flexors"],equip:["Bench","Barbell"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=barbell+hip+thrust+form+tutorial",
   setup:"Upper back on bench edge, bar across hip crease with pad. Feet flat, hip-width, knees at 90 degrees at top. Chin tucked.",
   action:"Squeeze glutes FIRST. Drive hips up until body is a straight line from knees to shoulders. Hold 1-2 seconds. Lower with control.",
   feel:"Glutes — not lower back. If you feel your back, push feet farther from the bench.",
   breath:"Exhale as you drive up. Inhale on the way down.",
   mistakes:["Hyperextending the lower back at the top","Not squeezing glutes — just pushing","Feet too close — causes knee strain","Bar slipping off pad"],
   progression:["Pause Hip Thrust","Single Leg Hip Thrust","Hip Thrust 1.5 Rep"],regression:["Glute Bridge","Banded Glute Bridge"]},

  {name:"Leg Press",cat:"Lower",region:"Legs",pattern:"Squat",muscles:["Quads","Glutes"],secondary:["Hamstrings","Hip Flexors"],equip:["Leg Press Machine"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=leg+press+foot+placement+form",
   setup:"Sit in machine with lower back flat against pad. Feet hip-width, mid-platform. Knees tracking over second toe.",
   action:"Lower platform until knees are at 90 degrees — no deeper if lower back rounds. Push through mid-foot to extend. Do NOT lock knees out fully at top.",
   feel:"Even distribution of quads and glutes. High foot placement = more glutes.",
   breath:"Inhale as you lower. Exhale as you press.",
   mistakes:["Letting lower back peel off pad","Knees caving inward","Locking knees out at the top","Going too deep and losing back position"],
   progression:["Single Leg Press","Bulgarian Split Squat","Barbell Squat"],regression:["Goblet Squat","Bodyweight Squat"]},

  {name:"Single Leg Romanian Deadlift",cat:"Lower",region:"Posterior Chain",pattern:"Hip Hinge",muscles:["Glutes","Hamstrings"],secondary:["Core","Erectors","Hip Stabilizers"],equip:["Dumbbell","Kettlebell"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=single+leg+RDL+form+tutorial",
   setup:"Stand on one leg, soft knee. Hold weight in opposite hand. Hinge forward, rear leg rises as a counterbalance — think seesaw.",
   action:"Push hips back, lower weight toward floor while keeping hips SQUARE to the ground. Drive through standing heel to return. Move as one unit — hip and leg together.",
   feel:"Deep hamstring stretch on the working leg. Hip stabilizers on fire.",
   breath:"Inhale as you hinge forward. Exhale as you drive back up.",
   mistakes:["Hips rotating open — twisting","Bending the knee excessively","Looking up — straining neck","Reaching too far — losing balance instead of hinging"],
   progression:["Barbell RDL","B-Stance RDL"],regression:["Dumbbell Romanian Deadlift","Glute Bridge"]},

  // ── UPPER PULL ─────────────────────────────────────────────────────────
  {name:"Pull-Up",cat:"Upper Pull",region:"Back",pattern:"Vertical Pull",muscles:["Lats","Biceps"],secondary:["Rhomboids","Rear Delts","Core"],equip:["Pull-Up Bar"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=pull+up+perfect+form+tutorial",
   setup:"Dead hang from bar, hands shoulder-width or slightly wider, palms facing away. Scapulae depressed — shoulders away from ears.",
   action:"Pull elbows toward hips — think about bending the bar. Lead with your chest, not your chin. Clear chin over bar. Lower with full control over 2-3 seconds.",
   feel:"Lats doing the work — not biceps alone. Visualize squeezing oranges in your armpits.",
   breath:"Exhale as you pull up. Inhale on the way down.",
   mistakes:["Kipping — using momentum","Not reaching full hang at bottom","Chin-lead — craning neck forward","Shrugging at the bottom"],
   progression:["Weighted Pull-Up","L-Sit Pull-Up","Archer Pull-Up"],regression:["Band Assisted Pull-Up","Negative Pull-Up","Lat Pulldown"]},

  {name:"Chin-Up",cat:"Upper Pull",region:"Back",pattern:"Vertical Pull",muscles:["Biceps","Lats"],secondary:["Rhomboids","Core"],equip:["Pull-Up Bar"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=chin+up+form+tutorial",
   setup:"Dead hang from bar, hands shoulder-width, palms facing you. Shoulders packed down — not shrugged.",
   action:"Pull elbows toward hips and slightly back. Clear chin over bar. More bicep involvement than pull-up. Lower with control.",
   feel:"Stronger bicep contraction than pull-up. Still should feel lats.",
   breath:"Exhale pulling up. Inhale lowering.",
   mistakes:["Using only arms — forgetting lats","Not getting full range of motion","Body swinging"],
   progression:["Weighted Chin-Up","Pull-Up"],regression:["Band Assisted Chin-Up","Cable Curl + Lat Pulldown"]},

  {name:"Barbell Row",cat:"Upper Pull",region:"Back",pattern:"Horizontal Pull",muscles:["Lats","Rhomboids","Mid Traps"],secondary:["Biceps","Rear Delts","Erectors"],equip:["Barbell"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=barbell+bent+over+row+form",
   setup:"Hip-width stance. Hinge forward 45 degrees. Neutral spine. Overhand grip, just outside shoulder-width. Bar at knee level.",
   action:"Pull bar to lower chest/upper abdomen. Lead with elbows — drive them back and up. Squeeze shoulder blades together at top. Lower with control.",
   feel:"Mid-back and lats contracting. NOT your lower back.",
   breath:"Exhale as you row. Inhale as you lower.",
   mistakes:["Using body momentum — jerking","Rounding the lower back","Pulling to the wrong height — too high or too low","Not retracting scapulae at top"],
   progression:["Pendlay Row","Barbell Row — Pause","T-Bar Row"],regression:["Dumbbell Row","Seated Cable Row"]},

  {name:"Dumbbell Row",cat:"Upper Pull",region:"Back",pattern:"Horizontal Pull",muscles:["Lats","Rhomboids"],secondary:["Biceps","Rear Delts"],equip:["Dumbbell","Bench"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=dumbbell+single+arm+row+form",
   setup:"Hand and knee on bench. Back flat and parallel to floor. Dumbbell hanging from working arm, shoulder packed.",
   action:"Pull dumbbell to hip, leading with elbow — not hand. Elbow drives back and up. Squeeze at top. Lower slowly — full stretch at bottom.",
   feel:"Lat contracting from armpit to hip. Do NOT rotate torso.",
   breath:"Exhale on the row. Inhale on the lowering.",
   mistakes:["Rotating torso to row heavier weight","Pulling with bicep only — forearm should stay vertical","Not getting full range — skipping the stretch"],
   progression:["Barbell Row","Meadows Row","Chest Supported Row"],regression:["Seated Cable Row","Band Row"]},

  {name:"Seated Cable Row",cat:"Upper Pull",region:"Back",pattern:"Horizontal Pull",muscles:["Lats","Rhomboids","Mid Traps"],secondary:["Biceps","Rear Delts"],equip:["Cable Machine"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=seated+cable+row+form+tutorial",
   setup:"Sit upright, feet on platform, soft knee. Grip handle with neutral or pronated grip. Tall spine — do NOT lean back.",
   action:"Pull handle to lower abdomen. Lead with elbows, squeeze shoulder blades together at peak. Control the return — let arms reach full extension.",
   feel:"Mid-back squeezing. Core working to keep torso stable.",
   breath:"Exhale as you row. Inhale as you return.",
   mistakes:["Leaning back to row heavier","Not reaching full extension at the front","Shrugging instead of retracting","Elbows flaring too wide"],
   progression:["Barbell Row","Chest Supported Row"],regression:["Band Row","Machine Row"]},

  {name:"Face Pull — Cable or Band",cat:"Upper Pull",region:"Shoulders/Upper Back",pattern:"Horizontal Pull",muscles:["Rear Delts","External Rotators","Mid Traps"],secondary:["Rhomboids","Biceps"],equip:["Cable","Band"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=face+pull+exercise+form+tutorial",
   setup:"Cable at head height. Rope or band attachment. Step back, slight lean. Arms extended forward.",
   action:"Pull rope to forehead — hands split apart at the end, elbows high and wide. Think: elbows up and out like a double bicep pose. Hold 1 second. Return slowly.",
   feel:"Rear delts and external rotators — back of the shoulder. NOT traps.",
   breath:"Exhale as you pull. Inhale as you return.",
   mistakes:["Elbows dropping below shoulder height","Pulling to chin — not forehead","Using too much weight — losing the external rotation","No pause at peak contraction"],
   progression:["Band Pull Apart — Overhead","Cuban Press"],regression:["Band Pull Apart","Prone Y Raise"]},

  {name:"Lat Pulldown",cat:"Upper Pull",region:"Back",pattern:"Vertical Pull",muscles:["Lats","Biceps"],secondary:["Rhomboids","Rear Delts"],equip:["Cable Machine"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=lat+pulldown+form+tutorial",
   setup:"Sit with thighs under pads. Lean back slightly — 10-15 degrees. Wide overhand grip. Depress shoulders before pulling.",
   action:"Pull bar to upper chest. Lead with elbows — drive them down and back. Chest up to meet the bar. Squeeze lats at bottom. Control the return.",
   feel:"Lats firing from armpit down. Like pulling yourself over a bar.",
   breath:"Exhale pulling down. Inhale returning.",
   mistakes:["Leaning back too far — turning it into a row","Pulling behind the neck","Not depressing shoulders first","Bar bouncing off chest"],
   progression:["Pull-Up","Weighted Pull-Up"],regression:["Band Assisted Pull-Up","Cable Straight Arm Pulldown"]},

  // ── UPPER PUSH ─────────────────────────────────────────────────────────
  {name:"Barbell Bench Press",cat:"Upper Push",region:"Chest",pattern:"Horizontal Push",muscles:["Pectorals","Anterior Delts","Triceps"],secondary:["Serratus Anterior","Core"],equip:["Barbell","Bench"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=barbell+bench+press+perfect+form",
   setup:"Lie on bench, eyes under bar. Shoulder blades pinched together and pressed into bench. Feet flat on floor. Grip just outside shoulder-width. Wrists straight.",
   action:"Unrack with control. Lower bar to lower chest — elbows at 45-75 degrees, NOT flared 90. Touch chest, press straight up. Bar path is slightly diagonal.",
   feel:"Pec stretch at bottom. Chest, shoulders, and triceps pressing together.",
   breath:"Inhale at the top or on the way down. Exhale forcefully as you press.",
   mistakes:["Elbows flaring 90 degrees — shoulder impingement risk","Bouncing bar off chest","Wrists bent back","Butt leaving bench","Bar path going straight up"],
   progression:["Pause Bench Press","Close Grip Bench Press","Incline Bench Press"],regression:["Dumbbell Bench Press","Push-Up"]},

  {name:"Dumbbell Bench Press",cat:"Upper Push",region:"Chest",pattern:"Horizontal Push",muscles:["Pectorals","Anterior Delts","Triceps"],secondary:["Serratus","Core"],equip:["Dumbbells","Bench"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=dumbbell+bench+press+form+tutorial",
   setup:"Sit on bench, dumbbells on thighs. Kick up to position as you lie back. Shoulder blades together and down. Elbows at 45-60 degree angle.",
   action:"Lower dumbbells to chest level, slight inward tilt of wrists. Press up and slightly together — do not clank at top. Full extension without locking elbows.",
   feel:"Greater stretch at the bottom than barbell. Each side works independently.",
   breath:"Inhale on the way down. Exhale pressing up.",
   mistakes:["Elbows too wide","Dumbbells swinging inward too aggressively","Not maintaining shoulder blade retraction","Wrists bending back"],
   progression:["Barbell Bench Press","Incline Dumbbell Press"],regression:["Push-Up","Floor Press"]},

  {name:"Overhead Press",cat:"Upper Push",region:"Shoulders",pattern:"Vertical Push",muscles:["Anterior Delts","Lateral Delts","Triceps"],secondary:["Upper Traps","Serratus","Core"],equip:["Barbell"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=overhead+press+strict+form+tutorial",
   setup:"Bar on front of shoulders, grip just outside shoulder-width. Elbows slightly in front of bar. Ribs down, core braced. Slight lean back of head to clear the bar path.",
   action:"Press bar straight up — head moves back, then through as bar passes face. Lock out at top with shrug. Lower with control to clavicle level.",
   feel:"Shoulders and triceps. Core working hard to stay stable.",
   breath:"Big inhale and brace before pressing. Exhale at lockout.",
   mistakes:["Excessive lumbar arch — ribs flaring","Bar path forward — not straight up","Not locking out at the top","Looking down instead of straight ahead"],
   progression:["Push Press","Z Press","Dumbbell Shoulder Press — Standing"],regression:["Dumbbell Shoulder Press — Seated","Landmine Press"]},

  {name:"Dumbbell Shoulder Press",cat:"Upper Push",region:"Shoulders",pattern:"Vertical Push",muscles:["Anterior Delts","Lateral Delts","Triceps"],secondary:["Upper Traps","Core"],equip:["Dumbbells"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=dumbbell+shoulder+press+form",
   setup:"Seated or standing. Dumbbells at shoulder height, palms forward or neutral. Core braced. Elbows at 90 degrees.",
   action:"Press dumbbells up and slightly together until elbows are near lockout. Control the descent back to shoulder level. Full range of motion.",
   feel:"Entire shoulder — front and side. Triceps finishing the press.",
   breath:"Exhale pressing up. Inhale lowering.",
   mistakes:["Arching lower back excessively","Dumbbells drifting forward — not directly overhead","Short range of motion","Shrugging at the top"],
   progression:["Barbell Overhead Press","Arnold Press"],regression:["Landmine Press","Machine Shoulder Press"]},

  {name:"Lateral Raise",cat:"Upper Push",region:"Shoulders",pattern:"Shoulder Abduction",muscles:["Lateral Delts"],secondary:["Supraspinatus","Upper Traps"],equip:["Dumbbells","Cable"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=lateral+raise+form+tutorial",
   setup:"Stand tall, slight bend in elbows. Dumbbells at sides. Slight forward lean from hips — 10 degrees. Pinky leads.",
   action:"Raise arms out to sides to shoulder height — no higher. Lead with elbows, not hands. Pinky edge slightly higher than thumb. Pause at top. Lower with 3-second control.",
   feel:"Burning in the side of the shoulder — lateral delt. NOT the trap.",
   breath:"Exhale raising. Inhale lowering.",
   mistakes:["Shrugging traps to lift","Swinging body — momentum","Going past shoulder height","Thumbs up — shifts load to front delt","Dropping too fast"],
   progression:["Cable Lateral Raise","Lean Away Lateral Raise"],regression:["Band Lateral Raise","Lighter Dumbbell"]},

  {name:"Push-Up",cat:"Upper Push",region:"Chest",pattern:"Horizontal Push",muscles:["Pectorals","Anterior Delts","Triceps"],secondary:["Serratus Anterior","Core"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=perfect+push+up+form+tutorial",
   setup:"Hands slightly wider than shoulder-width. Fingers spread, pointed forward or slightly out. Straight line from head to heels. Elbows slightly tucked — 45 degrees.",
   action:"Lower chest to floor, elbows at 45 degrees. Touch or near-touch chest. Push to straight arm — protract shoulder blades at top (push floor away).",
   feel:"Chest, shoulders, triceps. Core brace throughout. NOT sagging hips.",
   breath:"Inhale down. Exhale up.",
   mistakes:["Elbows flaring 90 degrees","Hips sagging or piking","Head drooping forward","Short range — not coming close to floor","Hands too wide"],
   progression:["Deficit Push-Up","Ring Push-Up","Close Grip Push-Up"],regression:["Incline Push-Up","Knee Push-Up"]},

  {name:"Incline Dumbbell Press",cat:"Upper Push",region:"Chest",pattern:"Incline Push",muscles:["Upper Pectorals","Anterior Delts","Triceps"],secondary:["Serratus"],equip:["Dumbbells","Incline Bench"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=incline+dumbbell+press+form",
   setup:"Bench at 30-45 degrees. Dumbbells at shoulder level, elbows 45-60 degrees from torso. Shoulder blades pinched together.",
   action:"Press dumbbells up and slightly together. Control descent until elbows pass bench level. Full range of motion.",
   feel:"Upper chest — feel a deeper stretch than flat press at the bottom.",
   breath:"Inhale lowering. Exhale pressing.",
   mistakes:["Bench too steep — turns it into a shoulder press","Elbows flaring wide","Short range of motion"],
   progression:["Incline Barbell Press","Decline Push-Up"],regression:["Flat Dumbbell Press","Push-Up"]},

  {name:"Tricep Pushdown",cat:"Upper Push",region:"Triceps",pattern:"Elbow Extension",muscles:["Triceps"],secondary:["Anconeus"],equip:["Cable Machine"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=tricep+pushdown+cable+form",
   setup:"Stand at cable machine, bar or rope at chest height. Elbows pinned to sides — not moving. Lean slightly forward.",
   action:"Push attachment down until arms are straight. Squeeze triceps hard at the bottom. Control back up — elbows stay glued to ribs.",
   feel:"Triceps only. If elbows move, reduce weight.",
   breath:"Exhale pushing down. Inhale returning.",
   mistakes:["Elbows swinging forward","Using body momentum","Not reaching full extension"],
   progression:["Skull Crusher","Overhead Tricep Extension"],regression:["Band Tricep Pushdown"]},

  {name:"Skull Crusher",cat:"Upper Push",region:"Triceps",pattern:"Elbow Extension",muscles:["Triceps"],secondary:["Anconeus"],equip:["Barbell","EZ Bar","Dumbbells"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=skull+crusher+form+tutorial",
   setup:"Lie on bench. Bar directly above shoulders, arms extended. Elbows shoulder-width, pointed at ceiling — they do NOT move.",
   action:"Lower weight toward forehead — elbows bend, upper arms stay vertical. Stop 1 inch above forehead. Press back to lockout. Elbows stay fixed.",
   feel:"Deep stretch and burn in the long head of the tricep.",
   breath:"Inhale lowering. Exhale pressing.",
   mistakes:["Elbows flaring out — losing vertical upper arm","Lowering behind head — changes the exercise","Moving upper arms — turns into a pullover","Using too much weight"],
   progression:["Overhead Tricep Extension","JM Press"],regression:["Tricep Pushdown","Band Overhead Tricep Extension"]},

  // ── CORE ───────────────────────────────────────────────────────────────
  {name:"Forearm Plank",cat:"Core",region:"Core",pattern:"Anti-Extension",muscles:["Transverse Abdominis","Rectus Abdominis"],secondary:["Glutes","Serratus","Hip Flexors"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=plank+perfect+form+tutorial",
   setup:"Forearms on floor, elbows under shoulders. Toes on floor, body straight. Squeeze glutes and brace core — like pulling belly button to spine.",
   action:"Maintain rigid straight line. No sagging hips, no piking. Breathe. Push forearms into the floor — like trying to pull them toward your feet without moving.",
   feel:"Abs and core wrap bracing. Glutes firing to protect lower back.",
   breath:"Breathe slowly and steadily. Exhaling forcefully increases core tension.",
   mistakes:["Hips sagging below straight line","Butt piking up too high","Head dropping","Holding breath"],
   progression:["Weighted Plank","RKC Plank","Plank with Reach"],regression:["Incline Plank","Shortened Hold Time"]},

  {name:"Dead Bug",cat:"Core",region:"Core",pattern:"Anti-Extension",muscles:["Transverse Abdominis","Rectus Abdominis"],secondary:["Hip Flexors","Shoulder Stabilizers"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=dead+bug+exercise+form+tutorial",
   setup:"Lie on back. Arms extended up to ceiling. Hips and knees at 90 degrees. Press lower back INTO the floor — maintain this contact throughout.",
   action:"Slowly lower opposite arm and leg toward floor — heel barely above floor. Return to start. Switch sides. Keep lower back pressed down the entire time.",
   feel:"Deep core brace. If your back lifts off the floor — range of motion is too large.",
   breath:"Exhale as you extend. Inhale to reset. Breathing out increases intra-abdominal pressure.",
   mistakes:["Lower back arching off the floor","Moving too fast — losing the core brace","Going too far — back lifts","Holding breath"],
   progression:["Dead Bug with Band","Dead Bug with Weight"],regression:["Heel Slide — Single Leg","Supine Marching"]},

  {name:"Pallof Press — Band",cat:"Core",region:"Core",pattern:"Anti-Rotation",muscles:["Transverse Abdominis","Obliques"],secondary:["Glutes","Hip Stabilizers"],equip:["Band","Cable"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=pallof+press+form+tutorial",
   setup:"Band or cable anchored at chest height. Stand sideways. Hold at chest with both hands. Feet hip-width, slight bend in knees. Core braced.",
   action:"Press straight out from chest. Hold fully extended — resist the pull to rotate. Bring back to chest. The GOAL is NO rotation. Stay perfectly square.",
   feel:"Deep core oblique working to prevent rotation. NOT a shoulder exercise.",
   breath:"Exhale as you press out. Breathe steadily when holding.",
   mistakes:["Rotating torso during the press","Standing too far from anchor — too hard","Using shoulder muscles to press rather than bracing core"],
   progression:["Pallof Press — Kneeling","Pallof Overhead","Pallof Hold Walk"],regression:["Lighter Band","Shorter Hold"]},

  {name:"Suitcase Carry",cat:"Core",region:"Core",pattern:"Anti-Lateral Flexion",muscles:["QL","Obliques","Core"],secondary:["Glutes","Hip Stabilizers","Grip"],equip:["Dumbbell","Kettlebell"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=suitcase+carry+exercise+form",
   setup:"Hold a weight in ONE hand at your side — like carrying a suitcase. Stand perfectly tall. Opposite side must resist the pull.",
   action:"Walk with purpose — do NOT lean toward the weight. Stay perfectly upright. Short steps. Keep the weight-bearing shoulder from shrugging or dropping.",
   feel:"QL and lateral core on the OPPOSITE side working hard to stay upright.",
   breath:"Breathe normally and rhythmically throughout.",
   mistakes:["Leaning toward the weight","Shrugging the loaded shoulder","Short choppy steps that cause hip sway","Looking down"],
   progression:["Heavier Load","Longer Distance","Bottoms Up Carry"],regression:["Lighter Load","Shorter Distance"]},

  {name:"Bird Dog",cat:"Core",region:"Core",pattern:"Anti-Rotation",muscles:["Erectors","Glutes","Transverse Abdominis"],secondary:["Shoulder Stabilizers","Hip Stabilizers"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=bird+dog+exercise+form+tutorial",
   setup:"On hands and knees. Hands under shoulders, knees under hips. Neutral spine — no arching or rounding. Core braced.",
   action:"Extend opposite arm and leg at the same time. Move slowly and with control. Hold 2 seconds. Return to start. Stay level — do NOT let hip rotate or drop.",
   feel:"Lower back stabilizers and glutes. If back arches — range of motion too big.",
   breath:"Exhale as you extend. Inhale returning.",
   mistakes:["Hip rotating — lifting leg too high","Arm swinging — losing shoulder stability","Lower back arching","Moving too fast — using momentum"],
   progression:["Bird Dog with Weight","Dead Bug","Bird Dog Row"],regression:["Arm Only","Leg Only","Shortened Range"]},

  // ── ACTIVATION / CORRECTIVE ────────────────────────────────────────────
  {name:"Clamshell",cat:"Activation",region:"Hips",pattern:"Hip External Rotation",muscles:["Glute Medius","Hip External Rotators"],secondary:["TFL","Piriformis"],equip:["Bodyweight","Band"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=clamshell+exercise+form+tutorial",
   setup:"Lie on side, hips at 45 degrees, knees at 90 degrees. Feet stacked. Bottom arm extended under head. Keep hips stacked — do NOT roll back.",
   action:"Rotate top knee up like a clamshell opening — stop when hips want to rotate. Hold 2 seconds. Lower slowly. The movement is SMALL and controlled.",
   feel:"Glute med — side of your hip. NOT the TFL or outer quad.",
   breath:"Exhale opening. Inhale closing.",
   mistakes:["Rolling hips back to lift higher","Moving through too large a range","Foot lifting — only knee should move","Moving too fast"],
   progression:["Banded Clamshell","Side Lying Hip Abduction","Fire Hydrant"],regression:["Supine Hip ER","90/90 Hip External Rotation"]},

  {name:"TVA Draw-In — Supine",cat:"Activation",region:"Core",pattern:"Core Activation",muscles:["Transverse Abdominis"],secondary:["Pelvic Floor","Multifidus"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=TVA+draw+in+transverse+abdominis+activation",
   setup:"Lie on back, knees bent, feet flat. Relax completely first. Find neutral spine — slight natural arch in lower back.",
   action:"Draw belly button in toward spine — like tightening a corset. Do NOT suck in by pushing ribs down or holding breath. Hold 10 seconds breathing normally.",
   feel:"Deep wrap of muscles around your waist activating. NOT visible movement of ribs or pelvis.",
   breath:"Breathe normally while maintaining the activation. This is the key skill.",
   mistakes:["Sucking in by pulling ribs down","Posterior pelvic tilt while activating","Holding breath","Pushing belly out instead of in"],
   progression:["Dead Bug","Bird Dog","Plank"],regression:["TVA with Biofeedback — Hand on Belly"]},

  {name:"Chin Tucks",cat:"Activation",region:"Neck/Cervical",pattern:"Cervical Retraction",muscles:["Deep Cervical Flexors","Longus Colli"],secondary:["Suboccipitals"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=chin+tuck+exercise+cervical+retraction+form",
   setup:"Sit or stand tall. Eyes level. Do NOT tilt head down. Think about this movement as horizontal — moving straight back.",
   action:"Pull chin straight back — like making a double chin. Eyes stay level. Hold 5 seconds. Slowly return. The movement is SMALL.",
   feel:"Stretch at base of skull. Deep muscle engagement in front of neck.",
   breath:"Breathe normally throughout.",
   mistakes:["Nodding head down — NOT a chin tuck","Thrusting head forward to reset","Tightening shoulders and traps","Forcing too hard — light tension only"],
   progression:["Chin Tuck with Resistance Band","Deep Neck Flexor Curl Up"],regression:["Supine Chin Tuck — gravity assisted"]},

  {name:"Wall Angels",cat:"Activation",region:"Upper Back/Shoulders",pattern:"Shoulder Mobility",muscles:["Lower Traps","Serratus Anterior","Rhomboids"],secondary:["Posterior Rotator Cuff","Thoracic Extensors"],equip:["Bodyweight","Wall"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=wall+angels+exercise+form+tutorial",
   setup:"Stand with back against wall — feet 2-3 inches away. Press lower back, upper back, and head into wall. Start with arms bent at 90 degrees, elbows and wrists touching wall.",
   action:"Slide arms up the wall — KEEPING elbows and wrists touching the wall. Only go as high as you can without losing contact. Slide back down.",
   feel:"Upper back working hard. Shoulder mobility limitation becomes obvious. Lower traps firing.",
   breath:"Exhale as arms rise. Inhale lowering.",
   mistakes:["Back arching off the wall","Elbows leaving the wall — compensating","Ribs flaring","Shrugging shoulders up as arms rise"],
   progression:["Floor Angels","Wall Angel with Band","Overhead Carry"],regression:["Seated Scapular Retraction","Shorter Range Wall Angel"]},

  {name:"Thoracic Extension — Foam Roller",cat:"Mobility",region:"Thoracic Spine",pattern:"Mobility",muscles:["Thoracic Extensors","Rib Cage"],secondary:["Lats","Pec Minor"],equip:["Foam Roller"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=thoracic+extension+foam+roller+form",
   setup:"Place foam roller perpendicular to spine at mid-back. Support head with hands behind head. Knees bent, feet flat. Start at mid-back — T4-T8 region.",
   action:"Extend backward over the roller — let gravity open the thoracic spine. Hold 5-10 seconds. Move roller 1-2 inches and repeat across entire thoracic spine.",
   feel:"Opening sensation through upper and mid-back. NOT your lower back — stop if you feel pressure there.",
   breath:"Exhale fully as you extend over the roller. Helps rib cage open.",
   mistakes:["Rolling on the lumbar spine — stop at the lower ribs","Forcing the extension — just let gravity work","Moving too fast through the levels","Holding breath"],
   progression:["Thoracic Rotation — Quadruped","Thread the Needle","Open Books"],regression:["Seated Thoracic Extension — Chair"]},

  {name:"Kneeling Hip Flexor Stretch",cat:"Mobility",region:"Hip Flexors",pattern:"Mobility",muscles:["Psoas","Iliacus","Rectus Femoris"],secondary:["TFL","Quad"],equip:["Bodyweight","Knee Pad"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=kneeling+hip+flexor+stretch+form",
   setup:"Half-kneeling position — one knee on floor, opposite foot forward. Back knee under hip. Upright torso. Posterior pelvic tilt — tuck the tail under slightly.",
   action:"Shift weight forward through the front hip — this stretches the rear hip flexor. Do NOT lean forward with torso. Hold 30-60 seconds. Breathe.",
   feel:"Front of rear hip and upper thigh. The deeper the posterior tilt, the more intense.",
   breath:"Breathe deeply. Exhale to deepen the stretch.",
   mistakes:["Leaning forward instead of shifting hips forward","Not tucking pelvis — losing the stretch depth","Front knee going past toes — short stance","Holding breath"],
   progression:["Hip Flexor Stretch with Reach","90/90 Hip Mobility"],regression:["Standing Hip Flexor Stretch","Supine Hip Flexor Stretch"]},

  {name:"Doorway Pec Stretch",cat:"Mobility",region:"Chest/Shoulders",pattern:"Mobility",muscles:["Pectoralis Major","Pectoralis Minor","Anterior Delt"],secondary:["Bicep Tendon"],equip:["Doorframe"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=doorway+pec+stretch+form",
   setup:"Stand in doorframe. Forearm on frame, elbow at 90 degrees. Shoulder at 90 degrees. Step forward until you feel a stretch — not pain.",
   action:"Hold 30-60 seconds. Breathe. Tilt chin slightly back for more stretch. Try different arm heights — low (lower pec), mid (sternal), high (clavicular head).",
   feel:"Front of chest and shoulder opening. Mild — NOT sharp or painful.",
   breath:"Breathe deeply and slowly. Exhale to relax into it.",
   mistakes:["Going too aggressive — pain instead of stretch","Single height only — missing different fibers","Holding breath","Elbow too low or too high for target"],
   progression:["Pec Minor Lacrosse Ball Release","Band Pec Stretch"],regression:["Supine T-Spine Rotation","Cat-Cow"]},

  {name:"Zone 2 — Incline Walk / Bike",cat:"Cardio",region:"Cardiovascular",pattern:"Aerobic",muscles:["Heart","Glutes","Quads","Calves"],secondary:["Core"],equip:["Treadmill","Bike"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=zone+2+cardio+training+explanation",
   setup:"Zone 2 = conversational pace. You should be able to speak in full sentences. Heart rate approximately 60-70% of max. Incline walk: 10-15% incline, 2.8-3.5 mph.",
   action:"Maintain steady state for 20-60 minutes. Do NOT let heart rate spike above Zone 3. If you cannot hold a conversation — slow down.",
   feel:"Comfortably uncomfortable. Sustained breathing — not gasping. You can talk but choose not to.",
   breath:"Nasal breathing preferred if possible. Slow and rhythmic.",
   mistakes:["Going too hard — heart rate climbs above zone","Too short — under 20 minutes loses much of the benefit","Skipping because it feels too easy — the adaptation IS in the sustained low intensity"],
   progression:["Zone 2 — 45 minutes","Zone 2 — 60 minutes","Tempo Run"],regression:["Flat Walk","Stationary Bike — Low Resistance"]},


  // ── CORRECTIVE / ACTIVATION ────────────────────────────────────────────
  {name:"Superman",cat:"Activation",region:"Posterior Chain",pattern:"Spinal Extension",muscles:["Erector Spinae","Glutes","Hamstrings"],secondary:["Mid Traps","Rhomboids","Rear Delts"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=superman+exercise+form+back+extension",
   setup:"Lie face down, arms extended overhead, legs straight. Forehead resting on the floor. Entire body relaxed before you begin.",
   action:"Simultaneously lift arms, chest, and legs off the floor — hold 2-3 seconds at the top. Think about lengthening — reach long rather than arching hard. Lower with control. Do NOT jerk or use momentum.",
   feel:"Posterior chain — lower back, glutes, and hamstrings all working together. Mid-back stabilizers engaging to hold the arms up.",
   breath:"Exhale as you lift. Inhale as you lower.",
   mistakes:["Cranking the neck back — keep head in neutral line with spine","Using momentum to jerk up","Not lifting both ends simultaneously","Holding breath"],
   progression:["Superman — Alternating","Superman — Band Resistance","Back Extension Machine"],regression:["Prone Hip Extension — Single Leg","Bird Dog","Prone Cobra"]},

  {name:"Prone Cobra",cat:"Activation",region:"Upper Back/Neck",pattern:"Spinal Extension",muscles:["Erector Spinae","Lower Traps","Rhomboids"],secondary:["Rear Delts","Glutes"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=prone+cobra+exercise+form+posture",
   setup:"Lie face down, arms at sides with palms down. Forehead resting lightly on floor. Legs together.",
   action:"Pinch shoulder blades together and DOWN — like putting them in your back pockets. Lift chest slightly off floor. Rotate palms to face the floor or slightly outward. Hold 10 seconds. Lower slowly.",
   feel:"Lower traps and mid-back working. NOT the upper traps or neck.",
   breath:"Breathe normally while holding the position.",
   mistakes:["Shrugging — upper traps taking over","Cranking the neck up too high","Not rotating the arms — missing the scapular depression cue"],
   progression:["Superman","Prone Y Raise","Prone T Raise"],regression:["Seated Scapular Retraction"]},

  {name:"Lat Stretch",cat:"Mobility",region:"Lats/Thoracic",pattern:"Mobility",muscles:["Latissimus Dorsi","Teres Major"],secondary:["Thoracic Extensors","Serratus"],equip:["Doorframe","Band","Cable"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=lat+stretch+doorway+foam+roller",
   setup:"Doorway version: Stand in doorframe, grab edge at hip height with one hand. Step back until arm is extended. Sit hips back and away from the anchor point.",
   action:"Push hips back and slightly away from the arm — feel the lat elongate from armpit to hip. Hold 30-60 seconds. Breathe deeply. Try turning torso slightly away to increase the stretch.",
   feel:"Long pull from armpit down to hip on the working side. Deeper than a side bend.",
   breath:"Exhale to sink deeper into the stretch. Long slow breaths.",
   mistakes:["Bending sideways instead of hinging at the hip","Not getting the arm overhead enough — too low loses the stretch","Holding breath"],
   progression:["Lat Release — Foam Roller","Overhead Carry"],regression:["Child's Pose — Arms Extended","Puppy Pose"]},

  {name:"Anterior Adductor Stretch",cat:"Mobility",region:"Groin/Inner Thigh",pattern:"Mobility",muscles:["Adductors","Gracilis","Pectineus"],secondary:["Hip Flexors","Inner Quad"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=adductor+stretch+groin+inner+thigh+form",
   setup:"Wide stance — feet 2-3x shoulder width apart, toes pointed forward or slightly out. Hands on thighs or floor for support. Hinge at hips — chest up.",
   action:"Shift weight to one side — bend that knee while keeping the other leg straight. You should feel the inner thigh of the straight leg stretch. Hold 30 seconds each side. Or perform slowly side to side for dynamic mobility.",
   feel:"Inner thigh of the straight leg — long and deep. NOT in the knee.",
   breath:"Exhale to settle into the stretch. Breathe slowly.",
   mistakes:["Rounding the lower back — keep chest proud","Knee caving inward on the bent side","Feet too close — reduce the range"],
   progression:["Lateral Lunge — Weighted","Copenhagen Plank","Adductor Strengthening"],regression:["Butterfly Stretch","Supine Groin Stretch"]},

  {name:"Bodyweight Squat",cat:"Lower",region:"Legs",pattern:"Squat",muscles:["Quads","Glutes"],secondary:["Hamstrings","Core","Hip Flexors","Calves"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=bodyweight+squat+perfect+form+tutorial",
   setup:"Feet hip to shoulder-width apart. Toes pointed forward or 5-15 degrees out. Arms extended forward for balance. Tall spine — chest proud.",
   action:"Push knees out in line with toes as you sit down and back. Descend until thighs are parallel to the floor — or as deep as form allows. Drive through mid-foot to stand. Squeeze glutes at the top.",
   feel:"Quads loading on the way down. Glutes firing on the way up. Knees tracking over toes throughout.",
   breath:"Inhale on the way down. Exhale as you stand up.",
   mistakes:["Heels rising — shift weight to mid-foot","Knees caving inward","Chest falling forward — keep it tall","Not reaching depth — hips above knee level"],
   progression:["Goblet Squat","Barbell Squat","Bulgarian Split Squat"],regression:["Box Squat","Sit to Stand","TRX Assisted Squat"]},

  {name:"Prone Y Raise",cat:"Activation",region:"Upper Back/Shoulders",pattern:"Shoulder Stability",muscles:["Lower Traps","Serratus Anterior"],secondary:["Rhomboids","Rear Delts","Mid Traps"],equip:["Bodyweight","Light Dumbbell"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=prone+Y+raise+lower+trap+exercise",
   setup:"Lie face down on a bench or floor. Arms extended overhead in a Y position — thumbs up. Forehead neutral. Shoulder blades depressed — shoulders away from ears before you begin.",
   action:"With thumbs up, raise arms in the Y shape — lift from the shoulder blade, not just the arm. Hold 2 seconds at the top. Lower with control. Use NO weight or very light — this is activation, not strengthening.",
   feel:"Lower traps at the base of the shoulder blade — NOT upper traps or neck. If you feel your neck, lower the weight.",
   breath:"Exhale as you lift. Inhale lowering.",
   mistakes:["Shrugging upper traps to get the arms higher","Using too much weight — defeats the purpose","Head cranking back","Not retracting and depressing scapulae first"],
   progression:["Prone T Raise","Prone I Raise","Band Y Raise"],regression:["Seated Scapular Retraction — Lower Trap","Wall Angels"]},

  {name:"TFL Release",cat:"Release",region:"Hip/IT Band",pattern:"SMR",muscles:["Tensor Fasciae Latae","IT Band"],secondary:["Glute Med","Lateral Quad"],equip:["Foam Roller","Lacrosse Ball"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=TFL+release+foam+roller+IT+band",
   setup:"Position roller at the front-outside of the hip — below the hip bone, above the thigh. Side lying position. Support on forearm.",
   action:"Find a tender spot and hold — do NOT roll back and forth aggressively. Hold 30-90 seconds. Breathe into it. The pain should reduce over time. Move slightly and find the next spot.",
   feel:"Deep ache or tenderness in the outer hip. NOT sharp or shooting pain.",
   breath:"Long slow exhales to facilitate release.",
   mistakes:["Rolling the IT band itself — the band is not releasable, target the TFL muscle belly higher up","Going too fast","Skipping this when the hip feels tight — it usually needs it most then"],
   progression:["Lacrosse Ball TFL","Lateral Hip Stretch"],regression:["Lighter Pressure Hold"]},

  {name:"Piriformis Release",cat:"Release",region:"Hip/Glute",pattern:"SMR",muscles:["Piriformis","Deep Hip Rotators"],secondary:["Glute Max","Sciatic Area"],equip:["Lacrosse Ball","Foam Roller"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=piriformis+release+lacrosse+ball+foam+roller",
   setup:"Sit on the roller or ball. Cross one ankle over the opposite knee — figure 4 position. Lean toward the raised hip side to load the piriformis.",
   action:"Find a tender spot — hold 30-90 seconds. Breathe. Do NOT roll aggressively. Move to the next spot. The pressure should become less painful over 60-90 seconds if done correctly.",
   feel:"Deep ache inside the glute/hip. If you feel numbness or shooting sensation down the leg — shift position, you are too close to the sciatic nerve.",
   breath:"Long exhales — let the tissue relax with each breath.",
   mistakes:["Rolling on sciatic nerve — stop if shooting pain","Rolling too fast","Not loading enough — need body weight through the hip"],
   progression:["Pigeon Pose","90/90 Hip Stretch"],regression:["Supine Figure 4 Stretch","Lighter Pressure"]},

  {name:"Pec Minor Release — Lacrosse Ball",cat:"Release",region:"Chest/Shoulder",pattern:"SMR",muscles:["Pectoralis Minor"],secondary:["Anterior Deltoid","Coracobrachialis"],equip:["Lacrosse Ball","Wall"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=pec+minor+release+lacrosse+ball+wall",
   setup:"Place lacrosse ball just below the clavicle — inside the front of the shoulder near the coracoid process. Stand against wall, lean body weight into ball.",
   action:"Find tender spot — hold 30-90 seconds. Slowly move arm overhead or in small circles while holding pressure. Breathe. Move ball 1 inch and find next spot.",
   feel:"Deep ache under the clavicle and front of shoulder. Often very tender — a tight pec minor is common with forward head and rounded shoulders.",
   breath:"Long exhales to facilitate tissue release.",
   mistakes:["Placing ball too laterally — that is anterior delt not pec minor","Rolling too fast","Not enough pressure — need body weight lean"],
   progression:["Doorway Pec Stretch","Serratus Wall Slide"],regression:["Gentle Pec Stretch First"]},

  {name:"Lat Release",cat:"Release",region:"Back/Lats",pattern:"SMR",muscles:["Latissimus Dorsi","Teres Major"],secondary:["Serratus Anterior"],equip:["Foam Roller","Lacrosse Ball"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=lat+release+foam+roller+side+lying",
   setup:"Side lying on the roller. Place roller in the armpit/side of the back region — the lat origin. Arm overhead or resting. Rotate slightly to get the outer edge of the back.",
   action:"Find a tender spot — hold 30-90 seconds. Slowly reach arm overhead while maintaining pressure. Move roller down the lat in stages. NOT on the lower back or spine.",
   feel:"Deep ache along the side of the back from armpit toward the hip. Arm mobility often improves immediately after.",
   breath:"Long slow exhales — let the lat soften.",
   mistakes:["Rolling on the spine — stay lateral","Going too fast","Missing the upper lat near the armpit — most important spot"],
   progression:["Lat Stretch","Overhead Carry"],regression:["Static Stretch Only"]},

  {name:"Seated Scapular Retraction — Lower Trap",cat:"Activation",region:"Upper Back",pattern:"Shoulder Stability",muscles:["Lower Trapezius","Rhomboids"],secondary:["Mid Traps","Serratus Anterior"],equip:["Bodyweight","Band"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=scapular+retraction+lower+trap+exercise",
   setup:"Seated or standing. Arms relaxed at sides. Consciously think about pulling shoulder blades DOWN and TOGETHER — like putting them in your back pockets.",
   action:"Depress shoulders — down away from ears. Retract — pull blades toward spine. Hold 5-10 seconds. Release fully. Repeat. Do NOT shrug to get there — this is the opposite of a shrug.",
   feel:"The lower portion of the trapezius — just above the mid-back. Subtle but important.",
   breath:"Breathe normally while holding the retraction.",
   mistakes:["Shrugging instead of depressing","Using arms to pull instead of shoulder blades moving independently","Holding breath"],
   progression:["Wall Angels","Prone Y Raise","Band Pull Apart"],regression:["Mirror Feedback — Watch your shoulders"]},

  {name:"Sidelying External Rotation — Bilateral",cat:"Activation",region:"Shoulder/Rotator Cuff",pattern:"External Rotation",muscles:["Infraspinatus","Teres Minor"],secondary:["Posterior Rotator Cuff"],equip:["Dumbbell","Band"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=sidelying+external+rotation+rotator+cuff+exercise",
   setup:"Lie on side. Bottom arm supporting head. Top elbow bent to 90 degrees, pressed against your side. Forearm pointing toward the floor. Light dumbbell in top hand.",
   action:"Keep elbow pinned to your side — rotate forearm UP toward ceiling. Stop before elbow leaves the ribs. Lower slowly with control. The motion is small and deliberate.",
   feel:"Back of the shoulder — infraspinatus and teres minor. NOT the front of the shoulder.",
   breath:"Exhale rotating up. Inhale lowering.",
   mistakes:["Elbow leaving the side — changes the exercise entirely","Using too much weight — this is activation, not strengthening","Rotating too far — compensating with the shoulder blade"],
   progression:["Cable External Rotation","Band ER — Standing","90/90 ER"],regression:["Doorway ER Stretch first","Bodyweight Only"]},

  {name:"Single Leg Balance",cat:"Activation",region:"Ankle/Knee/Hip",pattern:"Proprioception",muscles:["Tibialis Anterior","Peroneals","Glute Med"],secondary:["Ankle Stabilizers","Core","Hip Stabilizers"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=single+leg+balance+exercise+proprioception",
   setup:"Stand tall, hands on hips or arms out for balance. Lift one foot off the floor. Soft knee on the standing leg — not locked. Eyes forward.",
   action:"Hold the balance for 20-60 seconds. Progress: eyes closed, unstable surface, arm reaches, head turns. The wobble IS the training — your ankle and hip stabilizers are working.",
   feel:"Ankle stabilizers working. Glute med of standing leg firing to keep hip level. If the hip drops — the glute med is weak.",
   breath:"Breathe normally and steadily.",
   mistakes:["Gripping the floor with toes — relax them","Locking the knee straight","Hip dropping on the raised-leg side — compensate by strengthening glute med","Staring at the floor — eyes up"],
   progression:["Single Leg Balance — Eyes Closed","BOSU Balance","Single Leg RDL","Single Leg Squat"],regression:["Tandem Stance","Partial Weight Shift"]},

  {name:"Copenhagen Plank",cat:"Core",region:"Core/Adductors",pattern:"Lateral Core",muscles:["Adductors","Obliques","Glutes"],secondary:["Hip Flexors","Core"],equip:["Bench","Box"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=copenhagen+plank+adductor+exercise+form",
   setup:"Side plank position. Top foot rests on a bench or box — lower leg hanging free. Elbow directly under shoulder.",
   action:"Lift hips off the floor — body forms a straight line. Hold. For the adductor: actively squeeze the top knee DOWN into the bench — you will feel the inner thigh engage hard. Can also perform as a lift/lower rather than a hold.",
   feel:"Adductors of the top leg working hard. Obliques of the top side stabilizing. Hip not dropping.",
   breath:"Breathe steadily. Exhale to increase core tension.",
   mistakes:["Hip dropping or rotating forward","Not actively pressing the top knee into the bench — missing the adductor component","Elbow too far forward or back"],
   progression:["Copenhagen Adductor — Long Lever","Copenhagen with Hip Dip"],regression:["Side Plank","Adductor Squeeze — Supine"]},

  {name:"Close Grip Push Up",cat:"Upper Push",region:"Triceps/Chest",pattern:"Horizontal Push",muscles:["Triceps","Pectorals — Inner"],secondary:["Anterior Delts","Core"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=close+grip+push+up+diamond+form",
   setup:"Push-up position. Hands closer than shoulder-width — thumbs almost touching or 4-6 inches apart. Elbows tucked CLOSE to your sides — they should brush your ribs.",
   action:"Lower chest to the floor while keeping elbows tight to body. Press back up. The close grip isolates the tricep more than a standard push-up.",
   feel:"Tricep loading on the way down. Burning at lockout.",
   breath:"Inhale down. Exhale up.",
   mistakes:["Elbows flaring out — defeats the purpose","Hands too close — strains wrists","Hips sagging"],
   progression:["Diamond Push-Up","Close Grip Bench Press","Skull Crusher"],regression:["Standard Push-Up","Incline Close Grip Push-Up"]},

  {name:"Serratus Anterior — Wall Push-Up Plus",cat:"Activation",region:"Shoulder/Scapular",pattern:"Scapular Protraction",muscles:["Serratus Anterior"],secondary:["Pectoralis Minor","Subscapularis"],equip:["Bodyweight","Wall"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=serratus+anterior+wall+pushup+plus+exercise",
   setup:"Stand facing wall, arms extended, hands at shoulder height. Body in a plank-like lean. Shoulder blades in neutral — not shrugged.",
   action:"Do a small push-up PLUS at the end — after your arms extend, push into the wall an extra inch and hold 2 seconds. This extra protracts the shoulder blade and activates serratus. Return to neutral. This is a small, precise movement.",
   feel:"Under the armpit along the ribcage — that is the serratus. If you feel it there — it is working.",
   breath:"Exhale on the final push-plus. Breathe normally.",
   mistakes:["Shrugging instead of protracting","Doing a full push-up — this is about the PLUS at the end","Not holding the protraction — doing it too fast"],
   progression:["Push-Up Plus","Ring Push-Up","Serratus Cable Push"],regression:["Supine Serratus Punch"]},

  {name:"Sit-to-Stand",cat:"Lower",region:"Legs/Hips",pattern:"Squat",muscles:["Quads","Glutes"],secondary:["Core","Hamstrings","Hip Flexors"],equip:["Chair"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=sit+to+stand+exercise+form+elderly+rehab",
   setup:"Seated in a chair, feet flat on floor — hip width. Edge of the chair. Lean chest forward slightly — nose over toes.",
   action:"Drive through both heels to stand. Do NOT use arms to push off — hands crossed at chest or on thighs only for safety. Stand tall at the top. Lower back down with control — land softly.",
   feel:"Quads and glutes doing the work. If it feels like falling forward — focus on driving the heels.",
   breath:"Exhale as you stand. Inhale as you sit.",
   mistakes:["Using arms to push off","Sitting down too fast — crash landing","Not standing fully tall at the top","Feet too far back — makes it harder to press through heels"],
   progression:["Goblet Squat","Bodyweight Squat","Box Squat"],regression:["Higher Chair — Reduces Range","Arms Assisted"]},


  // ── ANKLE / FOOT / DORSIFLEXION ───────────────────────────────────────
  {name:"Dorsiflexion — Banded",cat:"Mobility",region:"Ankle",pattern:"Ankle Mobility",muscles:["Tibialis Anterior","Gastrocnemius","Soleus"],secondary:["Peroneals","Ankle Stabilizers"],equip:["Band"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=banded+dorsiflexion+ankle+mobility",
   setup:"Loop a band around a rack or fixed anchor at floor level. Place the band around the front of your ankle just above the foot. Step back to create tension. Foot flat on the floor, toes forward.",
   action:"Drive your knee forward over your toes — push it as far forward as possible while keeping your heel on the floor. Hold 2-3 seconds at end range. Return. The band distracts the joint and allows greater range.",
   feel:"Stretch in the back of the ankle and calf. A pulling sensation in the front of the ankle as the joint opens.",
   breath:"Exhale as you drive the knee forward. Breathe normally.",
   mistakes:["Heel rising off the floor — the whole point is heel stays down","Not enough band tension — too loose defeats the purpose","Moving too fast — slow and controlled to end range"],
   progression:["Weighted Dorsiflexion","Deep Squat Hold","Pistol Squat Prep"],regression:["Wall Ankle Mobilization","Standing Calf Stretch"]},

  {name:"Dorsiflexion — Wall Ankle Mobilization",cat:"Mobility",region:"Ankle",pattern:"Ankle Mobility",muscles:["Gastrocnemius","Soleus","Tibialis Anterior"],secondary:["Plantar Fascia","Achilles Tendon"],equip:["Bodyweight","Wall"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=wall+ankle+dorsiflexion+mobilization",
   setup:"Stand facing a wall about 4-5 inches away. Place one foot forward, toes touching the wall. Other foot back for balance.",
   action:"Drive your front knee toward the wall — try to touch it — while keeping the heel flat. Move foot progressively farther from the wall as range improves. Measure progress by how far back you can stand and still touch.",
   feel:"Stretch deep in the back of the ankle. The further from the wall, the greater the demand.",
   breath:"Breathe normally throughout.",
   mistakes:["Heel lifting — defeats the purpose entirely","Foot turned out — keep it straight","Not progressing the distance as range improves"],
   progression:["Banded Dorsiflexion","Deep Squat with Heel Elevation","Pistol Squat"],regression:["Seated Towel Calf Stretch"]},

  {name:"Tibialis Anterior Raise",cat:"Activation",region:"Shin/Ankle",pattern:"Dorsiflexion Strengthening",muscles:["Tibialis Anterior"],secondary:["Extensor Digitorum","Peroneals"],equip:["Bodyweight","Resistance Band"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=tibialis+anterior+raise+shin+strengthening",
   setup:"Sit or stand with heels on the floor. Start with toes on the floor in a relaxed position.",
   action:"Pull toes and forefoot up toward your shin — maximum dorsiflexion. Hold 2 seconds at the top. Lower slowly. Progress to standing with back against a wall, walking the feet forward and performing raises.",
   feel:"Front of shin — tibialis anterior burning. This is the muscle that prevents shin splints and stabilizes the ankle.",
   breath:"Exhale raising up. Inhale lowering.",
   mistakes:["Moving too fast — no time under tension","Not reaching full range — toes all the way up","Skipping this — tibialis weakness is often overlooked in programming"],
   progression:["Banded Tibialis Raise","Tib Bar Raise","Single Leg Tibialis Walk"],regression:["Seated Toe Raises — Gravity Only"]},

  // ── GLUTE / HIP ────────────────────────────────────────────────────────
  {name:"Hip 90/90 Stretch",cat:"Mobility",region:"Hips",pattern:"Hip Internal/External Rotation",muscles:["Piriformis","Glute Med","Hip Internal Rotators","Hip External Rotators"],secondary:["TFL","Adductors"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=90+90+hip+stretch+mobility",
   setup:"Sit on the floor. Front leg at 90 degrees in front of you, rear leg at 90 degrees to the side. Both knees bent at 90. Sit as upright as possible — do not round forward.",
   action:"Maintain an upright torso and sit tall into the position. Lean forward over the front shin to deepen the external rotation stretch. Switch sides — the weaker direction is the one that needs more work.",
   feel:"Deep glute and hip stretch in the front leg. Hip flexor and internal rotator stretch in the back leg.",
   breath:"Exhale to sink deeper. Long slow breaths.",
   mistakes:["Rounding the back — maintain a tall spine","Collapsing to one side","Not spending enough time — needs 60-120 seconds per side minimum"],
   progression:["90/90 Hip Rotation with Transition","Hip Flow","Deep Squat with Hip Rotation"],regression:["Figure 4 Stretch Supine","Seated External Rotation"]},

  {name:"Glute Bridge — Single Leg",cat:"Activation",region:"Glutes",pattern:"Hip Extension",muscles:["Glute Max","Glute Med","Hamstrings"],secondary:["Core","Hip Stabilizers"],equip:["Bodyweight"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=single+leg+glute+bridge+form",
   setup:"Lie on back, knees bent, feet flat. Extend one leg straight. Drive through the heel of the planted foot.",
   action:"Squeeze glute and drive hips up. Hold at the top for 2 seconds. Lower slowly. The extended leg stays level with the torso — do not let the hip drop on that side.",
   feel:"Glute of the working leg. If you feel hamstring cramping — drive more through the heel and focus on squeezing the glute first.",
   breath:"Exhale driving up. Inhale lowering.",
   mistakes:["Hip dropping on the unsupported side","Using lower back to extend","Not squeezing the glute first"],
   progression:["Hip Thrust — Single Leg","Nordic Hamstring Curl"],regression:["Double Leg Glute Bridge"]},

  // ── ROTATOR CUFF / SHOULDER ────────────────────────────────────────────
  {name:"Band Pull Apart",cat:"Activation",region:"Upper Back/Shoulders",pattern:"Shoulder External Rotation",muscles:["Rear Delts","Rhomboids","External Rotators"],secondary:["Mid Traps","Infraspinatus"],equip:["Band"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=band+pull+apart+exercise+form",
   setup:"Hold a resistance band with both hands at shoulder width, arms extended in front at shoulder height. Palms down or thumbs up.",
   action:"Pull the band apart by driving elbows back and squeezing shoulder blades together. The band should touch your chest at the end range. Control the return. Do NOT let the band snap back.",
   feel:"Rear delts and mid-back. Not the neck or traps.",
   breath:"Exhale pulling apart. Inhale returning.",
   mistakes:["Shrugging traps","Bending elbows — keep them nearly straight","Moving too fast — no squeeze at end range","Band too heavy — compensating with neck"],
   progression:["Band Pull Apart — Overhead","Face Pull","Prone Y Raise"],regression:["Lighter Band","Seated Scapular Retraction"]},

  {name:"Cuban Press",cat:"Activation",region:"Rotator Cuff",pattern:"External Rotation + Press",muscles:["Infraspinatus","Teres Minor","Deltoids"],secondary:["Supraspinatus","Upper Traps"],equip:["Dumbbell"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=cuban+press+rotator+cuff+exercise",
   setup:"Stand with dumbbells at sides. Light weight — this is a corrective exercise not a strength move.",
   action:"3-part movement: (1) Upright row — lift elbows to shoulder height. (2) External rotation — rotate forearms up so hands point to ceiling. (3) Press — press overhead. Reverse the sequence to lower.",
   feel:"Full rotator cuff cycle. A great pre-hab and warm-up movement for overhead athletes.",
   breath:"Exhale pressing up. Inhale lowering.",
   mistakes:["Using too much weight","Moving too fast — each phase should be deliberate","Losing external rotation before pressing"],
   progression:["Overhead Press","Arnold Press"],regression:["Sidelying External Rotation","Band ER"]},

  // ── CORE / ANTI-EXTENSION ──────────────────────────────────────────────
  {name:"Ab Wheel Rollout",cat:"Core",region:"Core",pattern:"Anti-Extension",muscles:["Rectus Abdominis","Transverse Abdominis","Lats"],secondary:["Shoulder Stabilizers","Hip Flexors"],equip:["Ab Wheel"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=ab+wheel+rollout+form+tutorial",
   setup:"Kneel on floor, ab wheel in both hands directly under shoulders. Brace core hard before starting. Posterior pelvic tilt — flatten lower back.",
   action:"Roll the wheel forward slowly — only go as far as you can without your lower back arching. Pause at end range. Pull back using your lats and abs. Stop before your hips flex to return.",
   feel:"Deep core and lats working together. If your lower back arches — your range is too large.",
   breath:"Exhale rolling out. Inhale pulling back.",
   mistakes:["Letting lower back arch — the biggest mistake","Going too far too soon","Using hip flexors to return instead of lats and abs"],
   progression:["Standing Ab Wheel Rollout","Dragon Flag"],regression:["Dead Bug","Plank — RKC"]},

  {name:"Hollow Body Hold",cat:"Core",region:"Core",pattern:"Anti-Extension",muscles:["Rectus Abdominis","Transverse Abdominis","Hip Flexors"],secondary:["Serratus","Shoulder Stabilizers"],equip:["Bodyweight"],diff:"Intermediate",
   video:"https://www.youtube.com/results?search_query=hollow+body+hold+gymnastics+core",
   setup:"Lie on back. Press lower back into the floor — this position must be maintained throughout. Arms overhead, legs extended.",
   action:"Lift shoulders and legs off the floor simultaneously — hold. The key is lower back stays pressed into the floor. If it arches, raise legs higher or bend knees. This is a gymnastic core position.",
   feel:"Deep abdominal tension. Nothing should feel like hip flexors alone — the abs create the tension.",
   breath:"Breathe in short controlled breaths while holding. Do not hold breath.",
   mistakes:["Lower back arching off the floor","Legs too low before core is strong enough","Holding breath"],
   progression:["Hollow Body Rock","Hollow Body with Rotation","Toes to Bar"],regression:["Dead Bug","Legs up Hollow Hold — knees bent"]},

  // ── LOWER LEG / CALF ───────────────────────────────────────────────────
  {name:"Single Leg Calf Raise",cat:"Lower",region:"Calves/Ankle",pattern:"Plantarflexion",muscles:["Gastrocnemius","Soleus"],secondary:["Tibialis Posterior","Peroneals"],equip:["Bodyweight","Step"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=single+leg+calf+raise+form",
   setup:"Stand on the edge of a step, one foot. Other leg slightly bent and lifted. Hold something for balance — NOT to support weight.",
   action:"Lower heel as far as possible below the step (full stretch). Drive up onto the ball of the foot as high as possible. 3 second lowering — full range matters more than how many you do.",
   feel:"Full calf stretch at the bottom. Gastrocnemius at the top. If only feeling one part of the range — you're cheating.",
   breath:"Exhale rising. Inhale lowering slowly.",
   mistakes:["Short range — not dropping heel below step level","Going too fast — no time under tension","Holding the support for balance assistance"],
   progression:["Weighted Single Leg Calf Raise","Seated Calf Raise — Soleus focus"],regression:["Double Leg Calf Raise","Seated Calf Raise"]},

  {name:"Soleus Raise — Seated",cat:"Activation",region:"Calves/Ankle",pattern:"Plantarflexion",muscles:["Soleus"],secondary:["Tibialis Posterior"],equip:["Bodyweight","Weight Plate"],diff:"Beginner",
   video:"https://www.youtube.com/results?search_query=seated+soleus+raise+exercise",
   setup:"Seated with knees bent at 90 degrees, feet flat. Place a weight plate or dumbbell on your thigh near the knee for load. The bent knee position isolates the soleus — it removes the gastrocnemius.",
   action:"Drive the ball of the foot into the floor and raise the heel as high as possible. Hold 1-2 seconds at the top. Lower with control. The soleus is the deep calf — critical for Achilles health and ankle stability.",
   feel:"Deep lower calf — different from standing calf raises. Burn appears lower and closer to the Achilles.",
   breath:"Exhale rising. Inhale lowering.",
   mistakes:["Using a standing raise and thinking it works the soleus — it does not","No load — soleus needs resistance","Moving too fast"],
   progression:["Heavy Seated Calf Raise Machine","Single Leg Seated Soleus Raise"],regression:["Unloaded Seated Heel Raise"]},

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


// ═══════════════════════════════════════════════════════════════════
// PHASE 4: UNIVERSAL SYNC HELPERS
// ═══════════════════════════════════════════════════════════════════
const safeJson = (str, fallback) => {
  try { return (str && str !== 'null' && str !== 'undefined') ? JSON.parse(str) : fallback; }
  catch { return fallback; }
};

const syncClient = async (email, fields) => {
  if (!supabase || !email) return;
  try {
    const { error } = await supabase.from('tbf_clients')
      .upsert({ email, ...fields }, { onConflict: 'email' });
    if (error) console.error('syncClient:', error.message);
    else console.log('✓ Synced', Object.keys(fields).join(','), 'for', email);
  } catch(e) { console.error('syncClient:', e.message); }
};

const mapClientRow = (r) => {
  if (!r) return null;
  const sj = (str, fb) => { try { return (str&&str!=='null') ? JSON.parse(str) : fb; } catch { return fb; }};
  return {
    id:          r.email.toLowerCase().replace(/[^a-z0-9]/g,'_'),
    name:        r.name||'',
    email:       r.email,
    role:        'client',
    phase:       r.phase||1,
    focus:       r.focus||'',
    restrictions: sj(r.restrictions,[]),
    goal:        r.goal_template||'posture',
    invitedAt:   r.invited_at,
    days:        sj(r.days, TEMPLATES[r.goal_template||'posture']?.days||[]),
    notes:       sj(r.notes,[]),
    nutrition:   sj(r.nutrition,null),
    cardioPlan:  sj(r.cardio_plan,null),
    assessment:  sj(r.assessment,null),
    macros:      sj(r.macros,null),
    calories:    sj(r.calories,null),
    meal_foods:  sj(r.meal_foods,null),
    pain_logs:   sj(r.pain_logs,[]),
    schedule:    [],
    password:    '',
    supabase_id: r.id,
    trainer_id:  r.trainer_id,
  };
};

const TODAY_STR = new Date().toISOString().slice(0,10);

// Clean up old daily localStorage keys (older than 7 days) to prevent bloat
;(()=>{
  try {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 7);
    const cutoffStr = cutoff.toISOString().slice(0,10);
    Object.keys(localStorage).forEach(key => {
      // Match daily keys: tbf_chk_... or tbf_setlog_... ending in YYYY-MM-DD
      const m = key.match(/^tbf_(chk|setlog)_.+_(\d{4}-\d{2}-\d{2})$/);
      if (m && m[2] < cutoffStr) localStorage.removeItem(key);
    });
  } catch(e) {}
})();
const exK=(cid,t,di,si,ei)=>{
  // Daily keys (reset each day): chk (checkbox done)
  // Program keys (persist): swap, presc, rest, super, superwith
  const daily = ['chk'];
  const prefix = daily.includes(t) ? `tbf_${t}_${cid}_${di}_${si}_${ei}_${TODAY_STR}` : `tbf_${t}_${cid}_${di}_${si}_${ei}`;
  return prefix;
};


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
  const parseSets = (p) => { if(!p)return 3; const m=p.match(/(\d+)\s*[x×]/i); return m?parseInt(m[1]):3; };
  const parseReps = (p) => { if(!p)return ''; const m=p.match(/[x×]\s*([\d\-]+)/i); return m?m[1]:''; };
  const parseWeight = (p) => { if(!p)return ''; const m=p.match(/(\d+(?:\.\d+)?)\s*(?:lbs?|kg)/i); return m?m[1]:''; };

  const logKey = `tbf_setlog_${cid}_${di}_${si}_${ei}_${TODAY_STR}`;
  const totalSets = parseSets(prescription);

  // ── Load today's logged sets ──────────────────────────────────────────
  const [sets, setSets] = useState(() => {
    try { return JSON.parse(localStorage.getItem(logKey) || 'null') || []; } catch { return []; }
  });

  // Load from Supabase on mount (overrides localStorage with server truth)
  useEffect(() => {
    if (!supabase || !cid) return;
    supabase.from("tbf_set_logs")
      .select("sets")
      .eq("client_id", cid)
      .eq("log_date", TODAY_STR)
      .eq("day_index", di)
      .eq("section_index", si)
      .eq("exercise_index", ei)
      .single()
      .then(({ data, error }) => {
        if (error || !data) return;
        try {
          const serverSets = JSON.parse(data.sets || "[]");
          if (serverSets.length > 0) {
            setSets(serverSets);
            localStorage.setItem(logKey, JSON.stringify(serverSets));
          }
        } catch(e) {}
      });
  }, [cid, di, si, ei, TODAY_STR]);

  // ── Load PREVIOUS session data for this exercise ──────────────────────
  const prevSession = (() => {
    try {
      const histKey = 'tbf_history_' + cid;
      const today = new Date().toISOString().slice(0,10);
      const history = JSON.parse(localStorage.getItem(histKey) || '[]');
      // Find most recent session that is NOT today and has this exercise
      const prev = history.filter(s => s.date !== today)
        .sort((a,b) => b.date.localeCompare(a.date))
        .find(s => s.exercises && s.exercises.some(e => e.name === ex));
      if (!prev) return null;
      const prevEx = prev.exercises.find(e => e.name === ex);
      return { date: prev.date, sets: prevEx?.sets || [] };
    } catch { return null; }
  })();

  // Best set from previous session for this exercise
  const prevBest = prevSession?.sets?.reduce((best, s) => {
    const w = parseFloat(s.weight) || 0;
    const r = parseFloat(s.reps) || 0;
    const bw = parseFloat(best?.weight) || 0;
    const br = parseFloat(best?.reps) || 0;
    return (w * r) > (bw * br) ? s : best;
  }, prevSession?.sets?.[0] || null);

  // Pre-fill weight from previous session if no weight in prescription
  const defaultWeight = parseWeight(prescription) || (prevBest?.weight || '');
  const defaultReps = parseReps(prescription) || (prevBest?.reps || '');

  const [open, setOpen] = useState(false);
  const [editIdx, setEditIdx] = useState(null);
  const [entryWeight, setEntryWeight] = useState(defaultWeight);
  const [entryReps, setEntryReps] = useState(defaultReps);
  const [entryRpe, setEntryRpe] = useState('');
  const [autoNote, setAutoNote] = useState('');

  const save = async (updated) => {
    setSets(updated);
    // Always cache locally for instant UI
    try { localStorage.setItem(logKey, JSON.stringify(updated)); } catch {}
    // Sync to Supabase
    if(supabase && cid) {
      try {
        await supabase.from("tbf_set_logs").upsert({
          client_id: cid,
          log_date: TODAY_STR,
          day_index: di,
          section_index: si,
          exercise_index: ei,
          exercise_name: ex,
          sets: JSON.stringify(updated),
          updated_at: new Date().toISOString()
        }, { onConflict: "client_id,log_date,day_index,section_index,exercise_index" });
      } catch(e) { console.warn("Set log sync:", e.message); }
    }
  };

  const checkProgression = (logs) => {
    if (logs.length < totalSets) return null;
    const targetRepsStr = parseReps(prescription);
    const topReps = parseInt((targetRepsStr.split('-')[1] || targetRepsStr || '0'));
    const allHitTop = logs.every(s => parseInt(s.reps) >= topReps && topReps > 0);
    if (allHitTop) {
      const avgWeight = logs.reduce((s,l) => s + (parseFloat(l.weight)||0), 0) / logs.length;
      const suggestWeight = Math.ceil((avgWeight * 1.05) / 2.5) * 2.5;
      return `✦ All ${totalSets} sets hit ${topReps} reps — add weight next session. Suggested: ${suggestWeight}lbs`;
    }
    const avgRpe = logs.reduce((s, l) => s + (parseInt(l.rpe) || 7), 0) / logs.length;
    if (avgRpe <= 6 && logs.length >= totalSets) return `✦ RPE averaging ${avgRpe.toFixed(1)} — this feels easy. Consider adding weight or reps next session.`;
    if (avgRpe >= 9 && logs.length >= totalSets) return `✦ RPE ${avgRpe.toFixed(1)} is high — maintain current weight next session and focus on form.`;
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
    // Save to workout history
    try {
      const histKey = 'tbf_history_' + cid;
      const today = new Date().toISOString().slice(0,10);
      const history = JSON.parse(localStorage.getItem(histKey) || '[]');
      const todaySession = history.find(s => s.date === today) || {date:today, dayTitle:'Session', exercises:[]};
      const exIdx = todaySession.exercises.findIndex(e => e.name === ex);
      if (exIdx >= 0) todaySession.exercises[exIdx].sets = updated;
      else todaySession.exercises.push({name:ex, sets:updated});
      const otherSessions = history.filter(s => s.date !== today);
      localStorage.setItem(histKey, JSON.stringify([todaySession, ...otherSessions].slice(0, 60)));
    } catch(e) {}
  };

  const completedSets = sets.length;
  const allDone = completedSets >= totalSets;

  // Compare today vs previous: did we beat last session?
  const beatPrev = prevBest && sets.length > 0 && (() => {
    const todayBest = sets.reduce((best, s) => {
      return ((parseFloat(s.weight)||0)*(parseFloat(s.reps)||0)) > ((parseFloat(best?.weight)||0)*(parseFloat(best?.reps)||0)) ? s : best;
    }, sets[0]);
    return ((parseFloat(todayBest.weight)||0) * (parseFloat(todayBest.reps)||0)) >
           ((parseFloat(prevBest.weight)||0) * (parseFloat(prevBest.reps)||0));
  })();

  return h('div', {style:{marginTop:8, borderTop:'1px solid '+C.grayBorder, paddingTop:8}},
    // ── Header row ─────────────────────────────────────────────────────
    h('div', {style:{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:open?8:0}},
      h('div', {style:{display:'flex', alignItems:'center', gap:8}},
        h('div', {style:{fontSize:11, fontWeight:'bold', color:allDone?C.green:C.teal, letterSpacing:0.5}},
          'SETS: '+completedSets+'/'+totalSets
        ),
        h('div', {style:{display:'flex', gap:3}},
          Array.from({length:totalSets}).map((_,i) =>
            h('div', {key:i, style:{width:10, height:10, borderRadius:'50%',
              background: i < completedSets ? (allDone ? C.green : C.teal) : C.grayBorder}})
          )
        ),
        beatPrev && h('div', {style:{fontSize:10, color:C.green, fontWeight:'bold', background:C.greenLight, padding:'2px 6px', borderRadius:999}}, '▲ PR')
      ),
      h('button', {onClick:()=>setOpen(!open), style:{fontSize:11, color:C.teal, background:'none', border:'none', cursor:'pointer', fontFamily:'Georgia,serif', fontWeight:'bold'}},
        open ? '▲ Hide' : '▼ Log Sets'
      )
    ),

    open && h('div', null,
      // ── Previous session reference ──────────────────────────────────
      prevSession && h('div', {style:{background:C.navy+'11', border:'1px solid '+C.navy+'22', borderRadius:8, padding:'8px 10px', marginBottom:10}},
        h('div', {style:{fontSize:10, fontWeight:'bold', color:C.navy, letterSpacing:1, marginBottom:6}},
          'LAST SESSION — ' + prevSession.date
        ),
        h('div', {style:{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:4, fontSize:10, color:C.gray, fontWeight:'bold', marginBottom:4}},
          h('div',null,'SET'), h('div',null,'WEIGHT'), h('div',null,'REPS'), h('div',null,'RPE')
        ),
        prevSession.sets.map((s,i) =>
          h('div', {key:i, style:{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:4, fontSize:12, color:C.navy, padding:'3px 0', borderTop:'1px solid '+C.grayBorder+'44'}},
            h('div',{style:{fontWeight:'bold', color:C.gray}},'#'+s.set),
            h('div',null, s.weight ? s.weight+'lbs' : '—'),
            h('div',null, s.reps||'—'),
            h('div',null, s.rpe?'RPE '+s.rpe:'—')
          )
        ),
        prevBest && h('div', {style:{fontSize:11, color:C.teal, marginTop:6, fontWeight:'bold'}},
          'Best: ' + (prevBest.weight ? prevBest.weight+'lbs × ' : '') + prevBest.reps + ' reps' +
          (prevBest.rpe ? ' @ RPE '+prevBest.rpe : '')
        )
      ),
      !prevSession && h('div', {style:{background:C.grayLight, borderRadius:8, padding:'8px 10px', marginBottom:10, fontSize:11, color:C.gray, textAlign:'center'}},
        'No previous session logged for this exercise yet.'
      ),

      // ── Today logged sets ───────────────────────────────────────────
      sets.length > 0 && h('div', {style:{background:C.tealLight, borderRadius:8, padding:'8px 10px', marginBottom:10}},
        h('div', {style:{fontSize:10, fontWeight:'bold', color:C.navy, letterSpacing:1, marginBottom:6}}, 'TODAY'),
        h('div', {style:{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:4, fontSize:10, color:C.gray, fontWeight:'bold', marginBottom:4}},
          h('div',null,'SET'), h('div',null,'WEIGHT'), h('div',null,'REPS'), h('div',null,'RPE')
        ),
        sets.map((s,i) =>
          h('div', {key:i, onClick:()=>{setEditIdx(i);setEntryWeight(s.weight||'');setEntryReps(s.reps||'');setEntryRpe(s.rpe||'');},
            style:{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:4, fontSize:12, color:C.navy, padding:'3px 0', borderTop:'1px solid '+C.teal+'22', cursor:'pointer'}},
            h('div',{style:{fontWeight:'bold'}},'#'+s.set),
            h('div',null, s.weight ? s.weight+'lbs' : '—'),
            h('div',null, s.reps||'—'),
            h('div',null, s.rpe?'RPE '+s.rpe:'—')
          )
        )
      ),

      // ── Entry row ───────────────────────────────────────────────────
      !allDone && h('div', {style:{display:'grid', gap:6}},
        h('div', {style:{fontSize:11, color:C.gray, fontWeight:'bold'}},
          editIdx !== null ? 'EDITING SET '+(editIdx+1) : 'LOG SET '+(completedSets+1)
        ),
        // Target from prescription
        prescription && h('div', {style:{fontSize:11, color:C.teal, marginBottom:2}},
          'Target: ' + prescription
        ),
        h('div', {style:{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:6}},
          h('div', null,
            h('div', {style:{fontSize:10, color:C.gray, marginBottom:3}}, 'WEIGHT (lbs)'),
            h(Inp, {value:entryWeight, onChange:setEntryWeight, placeholder: prevBest?.weight || '135'})
          ),
          h('div', null,
            h('div', {style:{fontSize:10, color:C.gray, marginBottom:3}}, 'REPS'),
            h(Inp, {value:entryReps, onChange:setEntryReps, placeholder: prevBest?.reps || parseReps(prescription) || '10'})
          ),
          h('div', null,
            h('div', {style:{fontSize:10, color:C.gray, marginBottom:3}}, 'RPE (1-10)'),
            h(Inp, {value:entryRpe, onChange:setEntryRpe, placeholder:'7'})
          )
        ),
        h(Btn, {onClick:logSet, color:C.teal, full:true, st:{marginTop:2}},
          editIdx !== null ? 'Update Set '+(editIdx+1) : 'Log Set '+(completedSets+1)
        ),
        editIdx !== null && h('button', {onClick:()=>{setEditIdx(null);setEntryWeight(defaultWeight);setEntryReps(defaultReps);setEntryRpe('');},
          style:{fontSize:11, color:C.gray, background:'none', border:'none', cursor:'pointer', fontFamily:'Georgia,serif', marginTop:4}},
          'Cancel Edit'
        )
      ),

      allDone && h('div', {style:{background:C.greenLight, border:'1px solid '+C.green+'44', borderRadius:8, padding:'10px 12px', fontSize:13, color:C.navy, textAlign:'center', fontWeight:'bold'}},
        '✓ All '+totalSets+' sets complete!'
      ),

      // ── Auto progression note ───────────────────────────────────────
      autoNote && h('div', {style:{background:C.amberLight, border:'2px solid '+C.amber, borderRadius:8, padding:'10px 12px', fontSize:12, color:C.navy, marginTop:8, lineHeight:1.5}},
        h('div', {style:{fontWeight:'bold', color:C.amber, marginBottom:4}}, '⚡ AUTO-PROGRESSION'),
        autoNote
      ),

      // ── Clear ───────────────────────────────────────────────────────
      sets.length > 0 && h('button', {onClick:()=>{save([]);setAutoNote('');},
        style:{fontSize:11, color:C.gray, background:'none', border:'none', cursor:'pointer', marginTop:8, fontFamily:'Georgia,serif'}},
        "Clear today's log"
      )
    )
  );
}


function ExCard({ex,cid,di,si,ei,isTrainer,onEdit,onDelete,onInfo,onMoveUp,onMoveDown,isFirst,isLast}){
  const [checked,setChecked]=useState(()=>LS.get(exK(cid,"chk",di,si,ei),false));
  const [curName,setCurName]=useState(()=>LS.get(exK(cid,"swap",di,si,ei),ex.name));
  const [curPresc,setCurPresc]=useState(()=>LS.get(exK(cid,"presc",di,si,ei),ex.prescription));
  const [restPeriod,setRestPeriod]=useState(()=>LS.get(exK(cid,"rest",di,si,ei),ex.rest||""));
  const [isSuperset,setIsSuperset]=useState(()=>LS.get(exK(cid,"super",di,si,ei),false));
  const [supersetWith,setSupersetWith]=useState(()=>LS.get(exK(cid,"superwith",di,si,ei),""));
  const [panel,setPanel]=useState(null);
  const [prescEdit,setPrescEdit]=useState(curPresc);
  const [restEdit,setRestEdit]=useState(restPeriod);
  const [search,setSearch]=useState("");

  // Load from Supabase on mount
  useEffect(()=>{
    if(!supabase||!cid) return;
    supabase.from("tbf_exercise_settings")
      .select("*")
      .eq("client_id",cid).eq("day_index",di).eq("section_index",si).eq("exercise_index",ei)
      .single()
      .then(({data,error})=>{
        if(error||!data) return;
        if(data.swap_name){setCurName(data.swap_name);LS.set(exK(cid,"swap",di,si,ei),data.swap_name);}
        if(data.prescription){setCurPresc(data.prescription);setPrescEdit(data.prescription);LS.set(exK(cid,"presc",di,si,ei),data.prescription);}
        if(data.rest_period){setRestPeriod(data.rest_period);setRestEdit(data.rest_period);LS.set(exK(cid,"rest",di,si,ei),data.rest_period);}
        if(data.is_superset!=null){setIsSuperset(data.is_superset);LS.set(exK(cid,"super",di,si,ei),data.is_superset);}
        if(data.superset_with){setSupersetWith(data.superset_with);LS.set(exK(cid,"superwith",di,si,ei),data.superset_with);}
      });
  },[cid,di,si,ei]);

  // Load checkbox from Supabase daily
  useEffect(()=>{
    if(!supabase||!cid) return;
    supabase.from("tbf_exercise_checks")
      .select("checked").eq("client_id",cid).eq("log_date",TODAY_STR)
      .eq("day_index",di).eq("section_index",si).eq("exercise_index",ei)
      .single()
      .then(({data,error})=>{
        if(error||!data) return;
        setChecked(data.checked);
        LS.set(exK(cid,"chk",di,si,ei),data.checked);
      });
  },[cid,di,si,ei,TODAY_STR]);

  const syncSettings = async (fields) => {
    LS.set(exK(cid,"swap",di,si,ei),fields.swap_name||curName);
    LS.set(exK(cid,"presc",di,si,ei),fields.prescription||curPresc);
    LS.set(exK(cid,"rest",di,si,ei),fields.rest_period||restPeriod);
    if(!supabase||!cid) return;
    await supabase.from("tbf_exercise_settings").upsert({
      client_id:cid,day_index:di,section_index:si,exercise_index:ei,
      swap_name:fields.swap_name||curName,
      prescription:fields.prescription||curPresc,
      rest_period:fields.rest_period||restPeriod,
      is_superset:fields.is_superset!=null?fields.is_superset:isSuperset,
      superset_with:fields.superset_with||supersetWith,
    },{onConflict:"client_id,day_index,section_index,exercise_index"});
  };

  const checkToggle=async()=>{
    const v=!checked;setChecked(v);
    LS.set(exK(cid,"chk",di,si,ei),v);
    if(supabase&&cid){
      await supabase.from("tbf_exercise_checks").upsert({
        client_id:cid,log_date:TODAY_STR,day_index:di,section_index:si,
        exercise_index:ei,exercise_name:curName,checked:v,
        updated_at:new Date().toISOString()
      },{onConflict:"client_id,log_date,day_index,section_index,exercise_index"});
    }
  };

  const savePresc=()=>{setCurPresc(prescEdit);LS.set(exK(cid,"presc",di,si,ei),prescEdit);setPanel(null);syncSettings({prescription:prescEdit});};
  const saveRest=()=>{setRestPeriod(restEdit);LS.set(exK(cid,"rest",di,si,ei),restEdit);setPanel(null);syncSettings({rest_period:restEdit});};
  const doSwap=(name)=>{setCurName(name);LS.set(exK(cid,"swap",di,si,ei),name);setSearch("");setPanel(null);syncSettings({swap_name:name});};
  const doSuperset=(v)=>{setIsSuperset(v);LS.set(exK(cid,"super",di,si,ei),v);syncSettings({is_superset:v});};
  const doSupersetWith=(v)=>{setSupersetWith(v);LS.set(exK(cid,"superwith",di,si,ei),v);syncSettings({superset_with:v});};

  const filtered=ALL_EX_FULL2.filter(e=>e.name.toLowerCase().includes(search.toLowerCase())).slice(0,20);
  const isChecked=checked;

  return h("div",{style:{borderRadius:10,marginBottom:8,overflow:"hidden",border:`1px solid ${isChecked?C.green:C.grayBorder}`,background:isChecked?"#f0fff4":C.white}},
    // Main exercise row
    h("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"10px 12px",cursor:"pointer"},onClick:checkToggle},
      h("div",{style:{width:22,height:22,borderRadius:6,border:`2px solid ${isChecked?C.green:C.grayBorder}`,
        background:isChecked?C.green:"transparent",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"}},
        isChecked&&h("span",{style:{color:"white",fontWeight:700,fontSize:".8rem"}},"✓")
      ),
      h("div",{style:{flex:1,minWidth:0}},
        h("div",{style:{fontWeight:600,fontSize:13,color:C.navy,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},curName),
        h("div",{style:{fontSize:11,color:C.gray,marginTop:1}},curPresc+(restPeriod?" · Rest: "+restPeriod:"")),
        ex.cue&&h("div",{style:{fontSize:10,color:C.teal,marginTop:1,fontStyle:"italic"}},ex.cue),
        isSuperset&&h("div",{style:{fontSize:10,color:C.amber,marginTop:1}},"🔗 Superset"+(supersetWith?" with "+supersetWith:""))
      ),
      isTrainer&&h("div",{style:{display:"flex",gap:4,flexShrink:0}},
        h("button",{onClick:e=>{e.stopPropagation();onInfo&&onInfo(curName);},style:{background:"none",border:"none",color:C.teal,cursor:"pointer",fontSize:14,padding:"2px 4px"}},"ℹ"),
        h("button",{onClick:e=>{e.stopPropagation();setPanel(panel==="menu"?null:"menu");},style:{background:"none",border:"none",color:C.gray,cursor:"pointer",fontSize:18,padding:"2px 4px"}},"⋯")
      )
    ),
    // Panel menu
    panel==="menu"&&isTrainer&&h("div",{style:{borderTop:`1px solid ${C.grayBorder}`,padding:"8px 12px",background:C.cream,display:"flex",flexWrap:"wrap",gap:6}},
      h(Btn,{onClick:()=>setPanel("swap"),color:C.navy,small:true},"⇄ Swap"),
      h(Btn,{onClick:()=>{setPrescEdit(curPresc);setPanel("presc");},color:C.navy,small:true},"✏ Rx"),
      h(Btn,{onClick:()=>{setRestEdit(restPeriod);setPanel("rest");},color:C.navy,small:true},"⏱ Rest"),
      h(Btn,{onClick:()=>doSuperset(!isSuperset),color:isSuperset?C.amber:C.navy,small:true},"🔗 Super"),
      onMoveUp&&!isFirst&&h(Btn,{onClick:onMoveUp,color:C.gray,small:true},"↑"),
      onMoveDown&&!isLast&&h(Btn,{onClick:onMoveDown,color:C.gray,small:true},"↓"),
      onDelete&&h(Btn,{onClick:onDelete,color:C.red,small:true},"✕"),
    ),
    panel==="swap"&&h("div",{style:{padding:"10px 12px",borderTop:`1px solid ${C.grayBorder}`}},
      h("input",{placeholder:"Search exercises...",value:search,onChange:e=>setSearch(e.target.value),
        autoFocus:true,style:{width:"100%",padding:"8px 10px",border:`1px solid ${C.grayBorder}`,borderRadius:6,fontSize:13,boxSizing:"border-box"}}),
      h("div",{style:{maxHeight:180,overflowY:"auto",marginTop:6}},
        filtered.map(e=>h("div",{key:e.name,onClick:()=>doSwap(e.name),
          style:{padding:"8px 10px",cursor:"pointer",borderRadius:6,fontSize:13,
          background:e.name===curName?C.teal:undefined,color:e.name===curName?"white":C.navy}},e.name))
      )
    ),
    panel==="presc"&&h("div",{style:{padding:"10px 12px",borderTop:`1px solid ${C.grayBorder}`,display:"flex",gap:8}},
      h("input",{value:prescEdit,onChange:e=>setPrescEdit(e.target.value),placeholder:"e.g. 3 x 12",autoFocus:true,
        style:{flex:1,padding:"8px 10px",border:`1px solid ${C.grayBorder}`,borderRadius:6,fontSize:13}}),
      h(Btn,{onClick:savePresc,color:C.teal,small:true},"Save")
    ),
    panel==="rest"&&h("div",{style:{padding:"10px 12px",borderTop:`1px solid ${C.grayBorder}`,display:"flex",gap:8}},
      h("input",{value:restEdit,onChange:e=>setRestEdit(e.target.value),placeholder:"e.g. 60 sec",autoFocus:true,
        style:{flex:1,padding:"8px 10px",border:`1px solid ${C.grayBorder}`,borderRadius:6,fontSize:13}}),
      h(Btn,{onClick:saveRest,color:C.teal,small:true},"Save"),
      h(Btn,{onClick:()=>{setRestEdit("");setRestPeriod("");LS.set(exK(cid,"rest",di,si,ei),"");setPanel(null);syncSettings({rest_period:""});},color:C.gray,small:true},"Clear")
    )
  );
}


function DayView({client,di,isTrainer}){
  const day=(client.days||[])[di];
  const [infoEx,setInfoEx]=useState(null);
  const today=new Date().toISOString().slice(0,10);
  const histKey='tbf_history_'+client.id;
  const [completed,setCompleted]=useState(()=>{
    try{const hist=JSON.parse(localStorage.getItem(histKey)||'[]');return hist.find(s=>s.date===today)?.completed||false;}catch(e){return false;}
  });
  if(!day) return null;
  const dayTitle=day?.title||'Session';
  try{
    const history=JSON.parse(localStorage.getItem(histKey)||'[]');
    const todaySess=history.find(s=>s.date===today);
    if(todaySess&&todaySess.dayTitle==='Session'){
      todaySess.dayTitle=dayTitle;
      localStorage.setItem(histKey,JSON.stringify([todaySess,...history.filter(s=>s.date!==today)]));
    }
  }catch(e){}
  const saveWorkoutLog=async(completedVal)=>{
    // Build exercise snapshot from set logs for this day
    const buildExerciseSnapshot=async()=>{
      if(!supabase||!client.email) return [];
      try{
        const {data}=await supabase.from('tbf_set_logs')
          .select('exercise_name,section_index,exercise_index,sets')
          .eq('client_id',client.email)
          .eq('log_date',today)
          .eq('day_index',di);
        if(!data||!data.length) return [];
        return data
          .filter(r=>r.sets&&JSON.parse(r.sets).length>0)
          .map(r=>({name:r.exercise_name,sets:JSON.parse(r.sets)}));
      }catch(e){return [];}
    };
    const exercises=await buildExerciseSnapshot();
    // Save to localStorage
    try{
      const history=JSON.parse(localStorage.getItem(histKey)||'[]');
      const existing=history.find(s=>s.date===today)||{date:today,dayTitle,exercises:[]};
      existing.completed=completedVal;
      existing.completedAt=completedVal?new Date().toISOString():null;
      existing.dayTitle=dayTitle;
      if(exercises.length>0) existing.exercises=exercises;
      localStorage.setItem(histKey,JSON.stringify([existing,...history.filter(s=>s.date!==today)].slice(0,60)));
    }catch(e){}
    // Save to Supabase
    if(supabase&&client.email){
      try{
        await supabase.from('tbf_workout_logs').upsert({
          client_email:client.email,
          log_date:today,
          day_title:dayTitle,
          completed:completedVal,
          completed_at:completedVal?new Date().toISOString():null,
          exercises:JSON.stringify(exercises),
          updated_at:new Date().toISOString()
        },{onConflict:'client_email,log_date'});
        console.log('✓ Workout logged with',exercises.length,'exercises');
      }catch(e){console.warn('Workout log sync:',e.message);}
    }
  };
  const markComplete=async()=>{await saveWorkoutLog(true);setCompleted(true);};
  const undoComplete=async()=>{await saveWorkoutLog(false);setCompleted(false);};
  return h("div",null,
    infoEx&&h(ExerciseModal,{ex:infoEx,onClose:()=>setInfoEx(null)}),
    h("div",{style:{background:C.navy,color:C.white,padding:"12px 16px",borderRadius:"8px 8px 0 0",marginBottom:1}},h("div",{style:{fontSize:13,fontWeight:"bold",letterSpacing:0.5}},dayTitle)),
    day.sections.map((sec,si)=>h(Card,{key:`${di}-${si}`},h(CardH,{t:sec.label,color:sec.color}),h(CardB,null,sec.exercises.map((ex,ei)=>h(ExCard,{key:`${di}-${si}-${ei}`,ex,cid:client.id,di,si,ei,isTrainer,onShowInfo:setInfoEx}))))),
    completed
      ?h("div",{style:{background:C.green,borderRadius:10,padding:"14px 16px",marginTop:12,display:"flex",justifyContent:"space-between",alignItems:"center"}},
          h("div",null,
            h("div",{style:{color:C.white,fontWeight:"bold",fontSize:15}},"✓ Workout Complete!"),
            h("div",{style:{color:C.white,fontSize:12,opacity:0.85,marginTop:2}},"Great work. Session logged.")
          ),
          h("button",{onClick:undoComplete,style:{background:"none",border:"1px solid rgba(255,255,255,0.5)",color:C.white,borderRadius:6,padding:"5px 10px",fontSize:11,cursor:"pointer"}},"Undo")
        )
      :h("button",{onClick:markComplete,style:{width:"100%",marginTop:12,padding:"13px",background:C.navy,color:C.white,border:"2px solid "+C.teal,borderRadius:10,fontSize:14,fontWeight:"bold",cursor:"pointer",letterSpacing:0.5}},
          "✓ Mark Workout Complete"
        )
  );
}



// ── Workout History ─────────────────────────────────────────────────────
function WorkoutHistory({client, isTrainer}) {
  const histKey = `tbf_history_${client.id}`;
  const [history, setHistory] = useState(() => LS.get(histKey, []));
  const [selectedSession, setSelectedSession] = useState(null);
  const [view, setView] = useState('recent'); // recent | exercise
  // Sync completion status from Supabase on mount
  useEffect(()=>{
    if(!supabase||!client.email) return;
    supabase.from('tbf_workout_logs')
      .select('log_date,day_title,completed,completed_at,exercises')
      .eq('client_email',client.email)
      .order('log_date',{ascending:false})
      .limit(60)
      .then(async ({data,error})=>{
        if(error||!data) return;
        // For any session missing exercises, pull from tbf_set_logs
        const enriched=await Promise.all(data.map(async row=>{
          let exercises=row.exercises?JSON.parse(row.exercises):[];
          if(exercises.length===0&&supabase){
            try{
              const {data:sets}=await supabase.from('tbf_set_logs')
                .select('exercise_name,sets')
                .eq('client_id',client.email)
                .eq('log_date',row.log_date)
                .neq('sets','[]');
              if(sets?.length>0){
                exercises=sets.map(s=>({name:s.exercise_name,sets:JSON.parse(s.sets||'[]')}));
              }
            }catch(e){}
          }
          return {date:row.log_date,dayTitle:row.day_title,completed:row.completed,
            completedAt:row.completed_at,exercises};
        }));
        setHistory(prev=>{
          const merged=[...prev];
          enriched.forEach(row=>{
            const idx=merged.findIndex(s=>s.date===row.date);
            if(idx>=0) merged[idx]={...merged[idx],...row};
            else merged.push(row);
          });
          const sorted=merged.sort((a,b)=>b.date.localeCompare(a.date));
          try{localStorage.setItem(histKey,JSON.stringify(sorted.slice(0,60)));}catch(e){}
          return sorted;
        });
      });
  },[client.email]);

  // Group by exercise for trend view
  const exerciseTrends = {};
  history.forEach(session => {
    const exercises = Array.isArray(session.exercises) ? session.exercises : [];
    exercises.forEach(ex => {
      if (!ex || !ex.name) return;
      const sets = Array.isArray(ex.sets) && ex.sets.length > 0 ? ex.sets : null;
      if (!sets) return; // skip cardio-only or empty entries
      if (!exerciseTrends[ex.name]) exerciseTrends[ex.name] = [];
      exerciseTrends[ex.name].push({
        date: session.date,
        dayTitle: session.dayTitle,
        sets,
        bestSet: sets.reduce((best, s) => {
          const vol = (parseFloat(s.weight)||0) * (parseFloat(s.reps)||0);
          const bestVol = (parseFloat(best.weight)||0) * (parseFloat(best.reps)||0);
          return vol > bestVol ? s : best;
        }, sets[0] || {})
      });
    });
  });

  const recentSessions = [...history].sort((a,b) => b.date.localeCompare(a.date)).slice(0, 20);
  const exerciseNames = Object.keys(exerciseTrends).sort();

  if (history.length === 0) return h('div', {style:{padding:24, textAlign:'center', color:C.gray}},
    h('div', {style:{fontSize:32, marginBottom:12}}, '📊'),
    h('div', {style:{fontWeight:'bold', color:C.navy, fontSize:15, marginBottom:6}}, 'No workout history yet'),
    h('div', {style:{fontSize:12, color:C.gray}}, 'Logged sets will appear here after your first session.')
  );

  return h('div', null,
    // View toggle
    h('div', {style:{display:'flex', gap:6, marginBottom:14}},
      h(Btn, {onClick:()=>setView('recent'), color:view==='recent'?C.navy:C.grayLight, fg:view==='recent'?C.white:C.navy, small:true}, '📅 Sessions'),
      h(Btn, {onClick:()=>setView('exercise'), color:view==='exercise'?C.navy:C.grayLight, fg:view==='exercise'?C.white:C.navy, small:true}, '📈 By Exercise')
    ),

    // Recent sessions view
    view === 'recent' && h('div', null,
      selectedSession
        ? h('div', null,
            h(Btn, {onClick:()=>setSelectedSession(null), color:C.grayLight, fg:C.navy, small:true, st:{marginBottom:12}}, '← Back'),
            h('div', {style:{fontWeight:'bold', color:C.navy, fontSize:15, marginBottom:4}}, selectedSession.dayTitle),
            h('div', {style:{fontSize:11, color:C.gray, marginBottom:12}}, selectedSession.date),
            (Array.isArray(selectedSession.exercises)?selectedSession.exercises:[]).filter(ex=>ex&&Array.isArray(ex.sets)&&ex.sets.length>0).map((ex, i) =>
              h(Card, {key:i},
                h(CardH, {t:ex.name, color:C.navy2}),
                h(CardB, null,
                  h('div', {style:{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:4, fontSize:11, color:C.gray, fontWeight:'bold', marginBottom:6}},
                    h('div',null,'SET'), h('div',null,'WEIGHT'), h('div',null,'REPS'), h('div',null,'RPE')
                  ),
                  ex.sets.map((s, si) =>
                    h('div', {key:si, style:{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:4, fontSize:13, color:C.navy, padding:'4px 0', borderTop:'1px solid '+C.grayBorder}},
                      h('div',{style:{fontWeight:'bold'}},'#'+(si+1)),
                      h('div',null, s.weight ? s.weight+'lbs' : '—'),
                      h('div',null, s.reps || '—'),
                      h('div',null, s.rpe ? 'RPE '+s.rpe : '—')
                    )
                  )
                )
              )
            )
          )
        : recentSessions.map((session, i) =>
            h('div', {key:i, onClick:()=>setSelectedSession(session),
              style:{background:C.white, border:'1px solid '+C.grayBorder, borderRadius:10, padding:'12px 14px', marginBottom:8, cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center'}},
              h('div', null,
                h('div', {style:{display:'flex',alignItems:'center',gap:6}},
                  h('div', {style:{display:'flex',alignItems:'center',gap:6}},
                  h('div', {style:{fontWeight:'bold', color:C.navy, fontSize:13}}, session.dayTitle),
                  session.completed&&h('div',{style:{background:C.green,color:C.white,borderRadius:4,padding:'2px 7px',fontSize:10,fontWeight:'bold'}},'✓ Done')
                ),
                  session.completed&&h('div',{style:{background:C.green,color:C.white,borderRadius:4,padding:'2px 7px',fontSize:10,fontWeight:'bold'}},'✓ Done')
                ),
                h('div', {style:{fontSize:11, color:C.gray, marginTop:2}}, session.date + ' · ' + session.exercises.length + ' exercises')
              ),
              h('div', {style:{fontSize:18, color:C.teal}}, '›')
            )
          )
    ),

    // By exercise view
    view === 'exercise' && h('div', null,
      exerciseNames.map(name => {
        const sessions = exerciseTrends[name].sort((a,b) => a.date.localeCompare(b.date));
        const latest = sessions[sessions.length - 1];
        const prev = sessions[sessions.length - 2];
        const improved = prev && latest.bestSet && prev.bestSet &&
          ((parseFloat(latest.bestSet.weight)||0) > (parseFloat(prev.bestSet.weight)||0) ||
           (parseFloat(latest.bestSet.reps)||0) > (parseFloat(prev.bestSet.reps)||0));
        return h(Card, {key:name},
          h(CardH, {t:name, color:C.navy2}),
          h(CardB, null,
            h('div', {style:{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8}},
              h('div', {style:{fontSize:11, color:C.gray}}, sessions.length + ' session' + (sessions.length!==1?'s':'')),
              improved && h('div', {style:{fontSize:11, color:C.green, fontWeight:'bold'}}, '▲ Progressing')
            ),
            sessions.slice(-4).map((s, i) =>
              h('div', {key:i, style:{display:'flex', justifyContent:'space-between', padding:'4px 0', borderBottom:'1px solid '+C.grayBorder, fontSize:12}},
                h('span', {style:{color:C.gray}}, s.date),
                h('span', {style:{color:C.navy, fontWeight:'bold'}},
                  s.bestSet ? (s.bestSet.weight ? s.bestSet.weight+'lbs × '+s.bestSet.reps+' reps' : s.bestSet.reps+' reps') : '—'
                )
              )
            )
          )
        );
      })
    )
  );
}

// ── Trainer Notes ───────────────────────────────────────────────────────
function TrainerNotes({client, isTrainer, onClientUpdate}) {
  const notesKey = `tbf_notes_${client.id}`;

  // Merge: take whichever source has MORE notes (handles existing localStorage data)
  const initNotes = () => {
    const fromSupabase = (client.notes && Array.isArray(client.notes)) ? client.notes : [];
    const fromLS = LS.get(notesKey, []);
    if (fromSupabase.length === 0 && fromLS.length === 0) return [];
    if (fromSupabase.length === 0) return fromLS;
    if (fromLS.length === 0) return fromSupabase;
    // Merge by id — combine both, deduplicate, sort newest first
    const all = [...fromSupabase, ...fromLS];
    const seen = new Set();
    const merged = all.filter(n => {
      if (seen.has(n.id)) return false;
      seen.add(n.id);
      return true;
    }).sort((a,b) => b.id - a.id);
    return merged;
  };

  const [notes, setNotes] = useState(initNotes);
  // Always prefer Supabase data on mount
  useEffect(()=>{
    if(!supabase||!client.email) return;
    supabase.from('tbf_clients').select('notes').eq('email',client.email).single()
      .then(({data,error})=>{
        if(error||!data?.notes) return;
        try{
          const sb=JSON.parse(data.notes);
          if(Array.isArray(sb)&&sb.length>0){
            setNotes(sb);LS.set(notesKey,sb);
          }
        }catch{}
      });
  },[client.email]);
  const [newNote, setNewNote] = useState('');
  const [noteType, setNoteType] = useState('note');
  const [synced, setSynced] = useState(false);

  // On mount: if localStorage has notes Supabase doesn't have, push them up
  useEffect(() => {
    if (synced) return;
    setSynced(true);
    const fromLS = LS.get(notesKey, []);
    const fromSupabase = (client.notes && Array.isArray(client.notes)) ? client.notes : [];
    // If LS has notes that aren't in Supabase, merge and push
    if (fromLS.length > 0 && onClientUpdate) {
      const all = [...fromSupabase, ...fromLS];
      const seen = new Set();
      const merged = all.filter(n => {
        if (seen.has(n.id)) return false;
        seen.add(n.id);
        return true;
      }).sort((a,b) => b.id - a.id);
      if (merged.length > fromSupabase.length) {
        // Push merged notes to Supabase
        setNotes(merged);
        LS.set(notesKey, merged);
    syncClient(client.email, {notes: JSON.stringify(merged)});
        onClientUpdate({...client, notes: merged});
      }
    }
  }, []);

  const saveNotes = (updated) => {
    setNotes(updated);
    LS.set(notesKey, updated);
    syncClient(client.email, {notes: JSON.stringify(updated)});
    if (onClientUpdate) {
      onClientUpdate({...client, notes: updated});
    }
  };

  const addNote = () => {
    if (!newNote.trim()) return;
    const entry = {
      id: Date.now(),
      type: noteType,
      text: newNote.trim(),
      date: new Date().toISOString().slice(0,10),
      time: new Date().toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit'}),
      from: isTrainer ? 'trainer' : 'client',
      read: false
    };
    saveNotes([entry, ...notes]);
    setNewNote('');
  };

  const deleteNote = (id) => saveNotes(notes.filter(n => n.id !== id));

  const unreadCount = notes.filter(n => n.from === 'trainer' && !n.read && !isTrainer).length;

  const TYPE_CONFIG = {
    note:    {icon:'📝', label:'Note',       color:C.navy},
    cue:     {icon:'🎯', label:'Cue',        color:C.teal},
    flag:    {icon:'⚑',  label:'Flag',       color:C.red},
    checkin: {icon:'✓',  label:'Check-in',   color:C.green},
    client:  {icon:'💬', label:'From Client', color:C.amber},
  };

  return h('div', null,
    // Unread banner for client
    !isTrainer && unreadCount > 0 && h('div', {style:{background:C.teal, color:C.white, padding:'10px 14px', borderRadius:8, marginBottom:12, fontWeight:'bold', fontSize:13}},
      '📬 ' + unreadCount + ' new message' + (unreadCount>1?'s':'') + ' from your trainer'
    ),

    // Input area
    h(Card, null,
      h(CardH, {t: isTrainer ? 'ADD NOTE FOR ' + client.name.toUpperCase() : 'SEND MESSAGE TO TRAINER', color: isTrainer ? C.navy : C.teal}),
      h(CardB, null,
        isTrainer && h('div', {style:{display:'flex', gap:6, marginBottom:10, flexWrap:'wrap'}},
          ['note','cue','flag','checkin'].map(type =>
            h('button', {key:type, onClick:()=>setNoteType(type),
              style:{padding:'5px 10px', borderRadius:6, border:'1.5px solid', fontSize:11, cursor:'pointer', fontFamily:'Georgia,serif', fontWeight:'bold',
                borderColor: noteType===type ? (TYPE_CONFIG[type].color) : C.grayBorder,
                background: noteType===type ? TYPE_CONFIG[type].color : 'transparent',
                color: noteType===type ? C.white : C.gray}},
              TYPE_CONFIG[type].icon + ' ' + TYPE_CONFIG[type].label
            )
          )
        ),
        h('textarea', {
          value: newNote,
          onChange: e => setNewNote(e.target.value),
          placeholder: isTrainer 
            ? 'Session notes, form cues, program updates, flags...' 
            : 'Questions, how you felt after training, what hurts...',
          style:{width:'100%', minHeight:80, padding:'10px 12px', border:'1.5px solid '+C.grayBorder, borderRadius:8, fontSize:13, resize:'none', fontFamily:'Georgia,serif', color:C.navy}
        }),
        h(Btn, {onClick:addNote, color:isTrainer?C.navy:C.teal, full:true, st:{marginTop:8}},
          isTrainer ? 'Save Note' : 'Send Message'
        )
      )
    ),

    // Notes feed
    notes.length > 0 && h('div', {style:{marginTop:12}},
      notes.map(note => {
        const cfg = note.from === 'client' ? TYPE_CONFIG.client : (TYPE_CONFIG[note.type] || TYPE_CONFIG.note);
        return h('div', {key:note.id,
          style:{background:C.white, border:'1px solid '+C.grayBorder, borderLeft:'4px solid '+cfg.color, borderRadius:8, padding:'12px 14px', marginBottom:8}},
          h('div', {style:{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:6}},
            h('div', {style:{display:'flex', alignItems:'center', gap:6}},
              h('span', {style:{fontSize:14}}, cfg.icon),
              h('span', {style:{fontSize:11, fontWeight:'bold', color:cfg.color, letterSpacing:0.5, textTransform:'uppercase'}}, cfg.label),
              note.from === 'client' && h('span', {style:{fontSize:10, color:C.gray}}, '· from client')
            ),
            h('div', {style:{display:'flex', gap:8, alignItems:'center'}},
              h('span', {style:{fontSize:11, color:C.gray}}, note.date),
              isTrainer && h('button', {onClick:()=>deleteNote(note.id),
                style:{background:'none', border:'none', color:C.gray, cursor:'pointer', fontSize:14}}, '✕')
            )
          ),
          h('div', {style:{fontSize:13, color:C.navy, lineHeight:1.6, whiteSpace:'pre-wrap'}}, note.text)
        );
      })
    ),

    notes.length === 0 && h('div', {style:{padding:'20px 0', textAlign:'center', color:C.gray, fontSize:13}},
      isTrainer ? 'No notes yet. Add session notes, form cues, or flags.' : 'No messages yet.'
    )
  );
}

// ── Nutrition Profile ───────────────────────────────────────────────────
function NutritionProfile({client, isTrainer, onClientUpdate}) {
  const profileKey = `tbf_nutri_profile_${client.id}`;
  const [profile, setProfile] = useState(() => LS.get(profileKey, {
    goal: client.nutrition?.goal || 'recomp',
    calories: client.nutrition?.calories || 2000,
    protein: client.nutrition?.macros?.protein?.grams || 160,
    carbs: client.nutrition?.macros?.carbs?.grams || 200,
    fat: client.nutrition?.macros?.fat?.grams || 65,
    mealFrequency: 3,
    restrictions: client.restrictions || [],
    notes: '',
    supplements: [],
    hydration: 64,
    updatedDate: ''
  }));
  const [saved, setSaved] = useState(false);
  const [newSupp, setNewSupp] = useState('');

  const saveProfile = (updated) => {
    const withDate = {...updated, updatedDate: new Date().toISOString().slice(0,10)};
    setProfile(withDate);
    LS.set(profileKey, withDate);
    const nutrition = {
      goal: withDate.goal,
      calories: withDate.calories,
      macros: {
        protein: {grams: withDate.protein, pct: Math.round((withDate.protein*4/withDate.calories)*100)},
        carbs: {grams: withDate.carbs, pct: Math.round((withDate.carbs*4/withDate.calories)*100)},
        fat: {grams: withDate.fat, pct: Math.round((withDate.fat*9/withDate.calories)*100)}
      }
    };
    const updated_client = {...client, nutrition, restrictions: withDate.restrictions,
      macros: withDate, calories: withDate.calories, meal_foods: client.meal_foods};
    onClientUpdate(updated_client);
    // Also sync nutrition fields directly so they appear on all devices
    syncClient(client.email, {
      nutrition: JSON.stringify(nutrition),
      macros: JSON.stringify(withDate),
      calories: JSON.stringify(withDate.calories),
    });
  };

  const totalCals = (profile.protein * 4) + (profile.carbs * 4) + (profile.fat * 9);
  const proteinPct = Math.round((profile.protein * 4 / Math.max(totalCals,1)) * 100);
  const carbsPct = Math.round((profile.carbs * 4 / Math.max(totalCals,1)) * 100);
  const fatPct = Math.round((profile.fat * 9 / Math.max(totalCals,1)) * 100);

  const GOALS = [
    {id:'lose', label:'Fat Loss', desc:'Caloric deficit, high protein'},
    {id:'gain', label:'Muscle Gain', desc:'Caloric surplus, progressive overload'},
    {id:'recomp', label:'Body Recomp', desc:'Maintain weight, shift body composition'},
    {id:'maintain', label:'Maintain', desc:'Sustain current weight and energy'},
    {id:'performance', label:'Performance', desc:'Optimize energy for training'},
    {id:'recovery', label:'Recovery', desc:'Anti-inflammatory, joint support'},
  ];

  // Client view - read only with their targets
  if (!isTrainer) return h('div', null,
    h(Card, null,
      h(CardH, {t:'YOUR NUTRITION TARGETS', color:C.teal}),
      h(CardB, null,
        h('div', {style:{textAlign:'center', marginBottom:16}},
          h('div', {style:{fontSize:36, fontWeight:'bold', color:C.navy}}, profile.calories),
          h('div', {style:{fontSize:11, color:C.gray, letterSpacing:1}}, 'DAILY CALORIES · GOAL: ' + (GOALS.find(g=>g.id===profile.goal)?.label||profile.goal).toUpperCase())
        ),
        h('div', {style:{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10, marginBottom:16}},
          [{label:'PROTEIN', grams:profile.protein, pct:proteinPct, color:C.teal},
           {label:'CARBS', grams:profile.carbs, pct:carbsPct, color:C.amber},
           {label:'FAT', grams:profile.fat, pct:fatPct, color:C.purple||'#8B5CF6'}
          ].map(m => h('div', {key:m.label, style:{background:C.tealLight, borderRadius:10, padding:10, textAlign:'center'}},
            h('div', {style:{fontSize:11, color:C.gray, fontWeight:'bold', letterSpacing:0.5, marginBottom:4}}, m.label),
            h('div', {style:{fontSize:22, fontWeight:'bold', color:m.color}}, m.grams+'g'),
            h('div', {style:{fontSize:10, color:C.gray}}, m.pct+'% of calories')
          ))
        ),
        profile.mealFrequency && h('div', {style:{fontSize:12, color:C.gray, marginBottom:8}}, '🍽 Target: ' + profile.mealFrequency + ' meals per day'),
        profile.hydration && h('div', {style:{fontSize:12, color:C.gray, marginBottom:8}}, '💧 Hydration goal: ' + profile.hydration + 'oz / day'),
        profile.supplements?.length > 0 && h('div', null,
          h('div', {style:{fontSize:11, fontWeight:'bold', color:C.navy, letterSpacing:0.5, marginBottom:6}}, 'SUPPLEMENTS'),
          profile.supplements.map((s,i) => h('div', {key:i, style:{fontSize:12, color:C.navy, padding:'3px 0'}}, '· ' + s))
        ),
        profile.restrictions?.length > 0 && h('div', {style:{marginTop:8}},
          h('div', {style:{fontSize:11, fontWeight:'bold', color:C.red, letterSpacing:0.5, marginBottom:4}}, 'DIETARY RESTRICTIONS'),
          h('div', {style:{display:'flex', flexWrap:'wrap', gap:4}},
            profile.restrictions.map((r,i) => h(Pill, {key:i, label:r, color:C.red}))
          )
        ),
        profile.notes && h('div', {style:{marginTop:12, background:C.amberLight, borderRadius:8, padding:'10px 12px', fontSize:12, color:C.navy}},
          h('div', {style:{fontWeight:'bold', marginBottom:4}}, '📋 Trainer Notes:'),
          profile.notes
        ),
        profile.updatedDate && h('div', {style:{fontSize:10, color:C.gray, marginTop:10, textAlign:'right'}}, 'Last updated: ' + profile.updatedDate)
      )
    ),
    // ── Suggested Meal Plan ─────────────────────────────────────────────
    h(NutritionMealPlan, {client, calories: profile.calories, protein: profile.protein, carbs: profile.carbs, fat: profile.fat, mealFrequency: profile.mealFrequency || 3, goal: profile.goal}),
    // ── Calorie Calculator ──────────────────────────────────────────────
    h(NutritionCalculator, {client})
  );

  // Trainer view - full editor
  return h('div', null,
    h(Card, null,
      h(CardH, {t:'NUTRITION GOAL', color:C.teal}),
      h(CardB, null,
        h('div', {style:{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}},
          GOALS.map(g => h('div', {key:g.id, onClick:()=>saveProfile({...profile, goal:g.id}),
            style:{padding:'10px 12px', borderRadius:8, border:'2px solid', cursor:'pointer',
              borderColor: profile.goal===g.id ? C.teal : C.grayBorder,
              background: profile.goal===g.id ? C.tealLight : C.white}},
            h('div', {style:{fontWeight:'bold', fontSize:13, color:profile.goal===g.id?C.teal:C.navy}}, g.label),
            h('div', {style:{fontSize:10, color:C.gray, marginTop:2}}, g.desc)
          ))
        )
      )
    ),

    h(Card, null,
      h(CardH, {t:'CALORIE & MACRO TARGETS', color:C.navy}),
      h(CardB, null,
        h(G2, null,
          h(Fld, {label:'Daily Calories'}, h(Inp, {value:profile.calories, onChange:v=>setProfile(p=>({...p,calories:parseInt(v)||0})), placeholder:'2000'})),
          h(Fld, {label:'Meal Frequency'}, h(Sel, {value:String(profile.mealFrequency||3), onChange:v=>setProfile(p=>({...p,mealFrequency:parseInt(v)})), options:[['2','2 meals/day'],['3','3 meals/day'],['4','4 meals/day'],['5','5 meals/day'],['6','6 meals/day']]}))
        ),
        h(G2, null,
          h(Fld, {label:'Protein (g)'}, h(Inp, {value:profile.protein, onChange:v=>setProfile(p=>({...p,protein:parseInt(v)||0})), placeholder:'160'})),
          h(Fld, {label:'Carbs (g)'}, h(Inp, {value:profile.carbs, onChange:v=>setProfile(p=>({...p,carbs:parseInt(v)||0})), placeholder:'200'}))
        ),
        h(G2, null,
          h(Fld, {label:'Fat (g)'}, h(Inp, {value:profile.fat, onChange:v=>setProfile(p=>({...p,fat:parseInt(v)||0})), placeholder:'65'})),
          h(Fld, {label:'Hydration Goal (oz)'}, h(Inp, {value:profile.hydration, onChange:v=>setProfile(p=>({...p,hydration:parseInt(v)||0})), placeholder:'64'}))
        ),
        h('div', {style:{background:C.tealLight, borderRadius:8, padding:10, marginTop:8, display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8, textAlign:'center'}},
          [{label:'PROTEIN', v:proteinPct+'%', sub:profile.protein*4+' cal'},{label:'CARBS', v:carbsPct+'%', sub:profile.carbs*4+' cal'},{label:'FAT', v:fatPct+'%', sub:profile.fat*9+' cal'}]
          .map(m => h('div', {key:m.label},
            h('div', {style:{fontSize:10, color:C.gray, fontWeight:'bold'}}, m.label),
            h('div', {style:{fontSize:16, fontWeight:'bold', color:C.navy}}, m.v),
            h('div', {style:{fontSize:10, color:C.gray}}, m.sub)
          ))
        )
      )
    ),

    h(Card, null,
      h(CardH, {t:'DIETARY RESTRICTIONS', color:C.navy}),
      h(CardB, null,
        h('div', {style:{display:'flex', flexWrap:'wrap', gap:6, marginBottom:10}},
          ['Gluten-Free','Dairy-Free','Vegan','Vegetarian','Nut Allergy','Shellfish Allergy','Low FODMAP','Diabetic','Low Sodium','Halal','Kosher'].map(r =>
            h('button', {key:r, onClick:()=>{
              const has = profile.restrictions?.includes(r);
              saveProfile({...profile, restrictions: has ? profile.restrictions.filter(x=>x!==r) : [...(profile.restrictions||[]), r]});
            }, style:{padding:'5px 10px', borderRadius:999, border:'1.5px solid', fontSize:11, cursor:'pointer', fontFamily:'Georgia,serif',
              borderColor: profile.restrictions?.includes(r) ? C.red : C.grayBorder,
              background: profile.restrictions?.includes(r) ? '#FFF0EE' : 'transparent',
              color: profile.restrictions?.includes(r) ? C.red : C.gray}}, r)
          )
        )
      )
    ),

    h(Card, null,
      h(CardH, {t:'SUPPLEMENTS', color:C.navy}),
      h(CardB, null,
        profile.supplements?.map((s,i) => h('div', {key:i, style:{display:'flex', justifyContent:'space-between', padding:'6px 0', borderBottom:'1px solid '+C.grayBorder, fontSize:13}},
          h('span', null, s),
          h('button', {onClick:()=>saveProfile({...profile, supplements:profile.supplements.filter((_,j)=>j!==i)}),
            style:{background:'none', border:'none', color:C.gray, cursor:'pointer'}}, '✕')
        )),
        h('div', {style:{display:'flex', gap:8, marginTop:8}},
          h(Inp, {value:newSupp, onChange:setNewSupp, placeholder:'e.g. Creatine 5g, Vitamin D 2000IU...'}),
          h(Btn, {onClick:()=>{if(!newSupp.trim())return;saveProfile({...profile,supplements:[...(profile.supplements||[]),newSupp.trim()]});setNewSupp('');}, color:C.teal, small:true}, 'Add')
        )
      )
    ),

    h(Card, null,
      h(CardH, {t:'TRAINER NUTRITION NOTES', color:C.navy}),
      h(CardB, null,
        h(TA, {value:profile.notes, onChange:v=>setProfile(p=>({...p,notes:v})), placeholder:'Meal timing recommendations, food preferences, eating schedule, special notes...', rows:4}),
        h(Btn, {onClick:()=>saveProfile(profile), color:C.teal, full:true, st:{marginTop:10}}, saved?'✓ Saved!':'Save Nutrition Profile')
      )
    )
  );
}



function AssessmentHistory({client, isTrainer, onLoadAssessment}) {
  const histKey = `tbf_assess_history_${client.id}`;
  const [history] = useState(() => LS.get(histKey, []));
  const [compare, setCompare] = useState(null);

  if (history.length < 2) return null;

  const current = history[0];
  const selected = compare ? history.find(a => a.savedDate === compare) : history[1];

  const POSTURE_KEYS = [
    ['Head Position', 'ohsa.anterior.head'],
    ['Shoulder Elevation', 'ohsa.anterior.shoulders'],
    ['Pelvic Tilt', 'ohsa.lateral.pelvis'],
    ['Knee Position', 'ohsa.lateral.knees'],
  ];

  const getVal = (obj, path) => {
    try { return path.split('.').reduce((o,k) => o?.[k], obj) || '—'; } catch { return '—'; }
  };

  return h(Card, null,
    h(CardH, {t:'ASSESSMENT HISTORY — ' + history.length + ' ON FILE', color: C.purple || '#6366F1'}),
    h(CardB, null,
      h('div', {style:{fontSize:11, color:C.gray, marginBottom:10}},
        'Dates: ' + history.map(a=>a.savedDate).join(' · ')
      ),
      // Compare selector
      h('div', {style:{display:'flex', gap:6, marginBottom:12, flexWrap:'wrap'}},
        history.slice(1).map(a =>
          h('button', {key:a.savedDate, onClick:()=>setCompare(compare===a.savedDate?null:a.savedDate),
            style:{padding:'5px 10px', borderRadius:6, border:'1.5px solid', fontSize:11, cursor:'pointer', fontFamily:'Georgia,serif',
              borderColor: compare===a.savedDate ? (C.purple||'#6366F1') : C.grayBorder,
              background: compare===a.savedDate ? (C.purple||'#6366F1') : 'transparent',
              color: compare===a.savedDate ? C.white : C.gray}},
            'Compare vs ' + a.savedDate
          )
        )
      ),
      // Side by side comparison
      selected && h('div', null,
        h('div', {style:{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:8}},
          h('div', {style:{fontWeight:'bold', color:C.teal, fontSize:12, textAlign:'center'}}, '✦ CURRENT · ' + current.savedDate),
          h('div', {style:{fontWeight:'bold', color:C.gray, fontSize:12, textAlign:'center'}}, 'PREVIOUS · ' + selected.savedDate)
        ),
        // Weight / body stats
        ['Weight', 'intake.weight'].map ? null : null,
        h('div', {style:{background:C.tealLight, borderRadius:8, padding:10, marginBottom:8}},
          h('div', {style:{fontSize:10, fontWeight:'bold', color:C.navy, letterSpacing:0.8, marginBottom:6}}, 'BODY STATS'),
          h('div', {style:{display:'grid', gridTemplateColumns:'1fr 1fr', gap:4}},
            h('div', {style:{fontSize:13, color:C.navy}}, getVal(current, 'intake.weight') + ' lbs'),
            h('div', {style:{fontSize:13, color:C.gray}}, getVal(selected, 'intake.weight') + ' lbs')
          )
        ),
        // Posture findings comparison
        h('div', {style:{background:C.white, border:'1px solid '+C.grayBorder, borderRadius:8, padding:10}},
          h('div', {style:{fontSize:10, fontWeight:'bold', color:C.navy, letterSpacing:0.8, marginBottom:6}}, 'POSTURE FINDINGS'),
          POSTURE_KEYS.map(([label, path]) =>
            h('div', {key:label, style:{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:4, padding:'4px 0', borderBottom:'1px solid '+C.grayBorder, fontSize:12}},
              h('div', {style:{color:C.gray, fontWeight:'bold', fontSize:11}}, label),
              h('div', {style:{color:C.navy}}, getVal(current, path)),
              h('div', {style:{color:C.gray}}, getVal(selected, path))
            )
          )
        ),
        // Pain comparison
        h('div', {style:{marginTop:8, display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}},
          h('div', {style:{background:C.tealLight, borderRadius:8, padding:10}},
            h('div', {style:{fontSize:10, fontWeight:'bold', color:C.teal, marginBottom:4}}, 'CURRENT COMPLAINT'),
            h('div', {style:{fontSize:12, color:C.navy}}, getVal(current, 'intake.primaryComplaint') || '—')
          ),
          h('div', {style:{background:C.grayLight, borderRadius:8, padding:10}},
            h('div', {style:{fontSize:10, fontWeight:'bold', color:C.gray, marginBottom:4}}, 'PREVIOUS COMPLAINT'),
            h('div', {style:{fontSize:12, color:C.gray}}, getVal(selected, 'intake.primaryComplaint') || '—')
          )
        ),
        isTrainer && h(Btn, {onClick:()=>onLoadAssessment(selected), color:C.grayLight, fg:C.navy, small:true, st:{marginTop:10}},
          'Load ' + selected.savedDate + ' as baseline'
        )
      )
    )
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


function NutritionMealPlan({client, calories, protein, carbs, fat, mealFrequency, goal}) {
  const freq = mealFrequency || 3;
  const goalFilter = goal || 'recomp';
  const [mealFoods, setMealFoods] = useState(() => LS.get("tbf_meals_"+client.id, {}));
  const [portionView, setPortionView] = useState("visual");
  const [swapTarget, setSwapTarget] = useState(null);
  const [swapSearch, setSwapSearch] = useState("");

  const MEAL_KEYS = freq >= 5 ? ["breakfast","lunch","dinner","snack1","snack2"] :
                   freq === 4 ? ["breakfast","lunch","dinner","snack1"] :
                   freq === 2 ? ["lunch","dinner"] : ["breakfast","lunch","dinner"];
  const MEAL_LABELS = {breakfast:"Breakfast",lunch:"Lunch",dinner:"Dinner",snack1:"Snack 1",snack2:"Snack 2"};
  const MEAL_CAL_SPLIT = freq >= 5
    ? {breakfast:0.22,lunch:0.27,dinner:0.27,snack1:0.12,snack2:0.12}
    : freq === 4
    ? {breakfast:0.25,lunch:0.28,dinner:0.28,snack1:0.19}
    : freq === 2
    ? {lunch:0.45,dinner:0.55}
    : {breakfast:0.25,lunch:0.35,dinner:0.35,snack1:0.05};
  const bias = GOAL_FOOD_BIAS[goalFilter] || GOAL_FOOD_BIAS.recomp;

  const roundServing = (s) => { if(s<=0.25)return 0.25; if(s<=0.5)return 0.5; if(s<=0.75)return 0.75; return Math.round(s*2)/2; };
  const getServings = (targetG, gramsPerSrv) => gramsPerSrv>0 ? roundServing(targetG/gramsPerSrv) : 1;
  const getFood = (name) => FOOD_DB.find(f=>f.name===name) || {name,cat:"Protein",cal:150,pro:25,carb:0,fat:5,srv:"1 serving",visual:"1 palm",gramsPerSrv:100};

  const genMeal = (mealKey) => {
    const tmpl = MEAL_TEMPLATE_MAP[mealKey] || {required:["Protein","Carbs"],optional:["Vegs","Fats"]};
    const foods = []; const used = new Set();
    const getByCat = (cat) => {
      const pool = FOOD_DB.filter(f=>f.cat===cat&&!used.has(f.name));
      const preferred = pool.filter(f=>f.goals&&f.goals.includes(goalFilter));
      const src = preferred.length>0 ? preferred : pool;
      const pick = src[Math.floor(Math.random()*src.length)];
      if(pick){used.add(pick.name);return {name:pick.name,cat:pick.cat};} return null;
    };
    tmpl.required.forEach(cat=>{const f=getByCat(cat);if(f)foods.push(f);});
    tmpl.optional.forEach(cat=>{if(!bias.limit.includes(cat)&&Math.random()>0.4){const f=getByCat(cat);if(f)foods.push(f);}});
    return foods;
  };

  const getMealFoods = (key) => mealFoods[key] || genMeal(key);

  const calcPortions = (mealKey) => {
    const calSplit = MEAL_CAL_SPLIT[mealKey] || 0.25;
    const mealCal = Math.round(calories * calSplit);
    const mealPro = Math.round(protein * calSplit);
    const mealCarb = Math.round(carbs * calSplit);
    const mealFatG = Math.round(fat * calSplit);
    const foods = getMealFoods(mealKey);
    return foods.map(f => {
      const fd = getFood(f.name);
      let targetG = 0;
      if(fd.cat==="Protein"||fd.cat==="Extras") targetG = mealPro>0?(mealPro/(fd.pro||1))*fd.gramsPerSrv:fd.gramsPerSrv;
      else if(fd.cat==="Carbs"||fd.cat==="Fruits") targetG = mealCarb>0?(mealCarb/(fd.carb||1))*fd.gramsPerSrv:fd.gramsPerSrv;
      else if(fd.cat==="Fats") targetG = mealFatG>0?(mealFatG/(fd.fat||1))*fd.gramsPerSrv:fd.gramsPerSrv;
      else targetG = fd.gramsPerSrv;
      const servings = getServings(targetG, fd.gramsPerSrv);
      return {name:fd.name,cat:fd.cat,servings,exact:servings===1?fd.srv:servings+" x "+fd.srv,visual:servings===1?fd.visual:servings+" x "+fd.visual,cal:Math.round(fd.cal*servings),pro:Math.round(fd.pro*servings),carb:Math.round(fd.carb*servings),fat:Math.round(fd.fat*servings)};
    });
  };

  const swapFood = (mealKey, idx, newFood, newCat) => {
    const current = getMealFoods(mealKey);
    const updated = [...current]; updated[idx] = {name:newFood,cat:newCat||updated[idx].cat};
    const nm = {...mealFoods,[mealKey]:updated}; setMealFoods(nm); LS.set("tbf_meals_"+client.id, nm); syncToSupabase(client.email,"meal_foods",nm);
    setSwapTarget(null); setSwapSearch("");
  };
  const regenMeal = (key) => { const nm={...mealFoods,[key]:genMeal(key)}; setMealFoods(nm); LS.set("tbf_meals_"+client.id,nm); };
  const regenAll = () => { const nm={}; MEAL_KEYS.forEach(k=>{nm[k]=genMeal(k);}); setMealFoods(nm); LS.set("tbf_meals_"+client.id,nm); };

  const CAT_COLOR = {Protein:C.teal,Carbs:C.amber,Fats:C.green,Vegs:C.green,Fruits:C.amber,Extras:C.gray};

  return h(Card, null,
    h(CardH, {t:"SUGGESTED MEAL PLAN", color:C.teal}),
    h(CardB, null,
      h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}},
        h("div",{style:{display:"flex",gap:4}},
          [["visual","👁 Visual"],["exact","📏 Exact"],["macro","📊 Macros"]].map(([v,l])=>
            h("button",{key:v,onClick:()=>setPortionView(v),style:{padding:"4px 8px",borderRadius:6,border:"1.5px solid",fontSize:10,cursor:"pointer",fontFamily:"Georgia,serif",fontWeight:"bold",
              borderColor:portionView===v?C.teal:C.grayBorder,background:portionView===v?C.tealLight:"transparent",color:portionView===v?C.teal:C.gray}},l)
          )
        ),
        h(Btn,{onClick:regenAll,color:C.grayLight,fg:C.navy,small:true},"↺ Regenerate")
      ),
      MEAL_KEYS.map(mealKey => {
        const portions = calcPortions(mealKey);
        const mealTotal = portions.reduce((s,f)=>({cal:s.cal+f.cal,pro:s.pro+f.pro,carb:s.carb+f.carb,fat:s.fat+f.fat}),{cal:0,pro:0,carb:0,fat:0});
        return h("div",{key:mealKey,style:{marginBottom:14,paddingBottom:14,borderBottom:"1px solid "+C.grayBorder}},
          h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}},
            h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:13}},MEAL_LABELS[mealKey]),
            h("div",{style:{display:"flex",gap:6,alignItems:"center"}},
              h("div",{style:{fontSize:11,color:C.gray}},mealTotal.cal+" cal"),
              h("button",{onClick:()=>regenMeal(mealKey),style:{background:"none",border:"none",color:C.teal,cursor:"pointer",fontSize:12}}, "↺")
            )
          ),
          portions.map((f,idx)=>h("div",{key:idx,style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 0",borderBottom:"1px dashed "+C.grayBorder}},
            h("div",{style:{flex:1,minWidth:0}},
              h("div",{style:{display:"flex",alignItems:"center",gap:6}},
                h("span",{style:{fontSize:9,padding:"1px 5px",borderRadius:999,background:(CAT_COLOR[f.cat]||C.gray)+"22",color:CAT_COLOR[f.cat]||C.gray,fontWeight:"bold"}},f.cat.toUpperCase()),
                h("span",{style:{fontSize:13,color:C.navy}},f.name)
              ),
              h("div",{style:{fontSize:11,color:C.gray,marginTop:1}},
                portionView==="visual"?f.visual : portionView==="exact"?f.exact : `P:${f.pro}g C:${f.carb}g F:${f.fat}g`
              )
            ),
            h("button",{onClick:()=>setSwapTarget(swapTarget===`${mealKey}-${idx}`?null:`${mealKey}-${idx}`),
              style:{background:"none",border:"none",color:C.teal,cursor:"pointer",fontSize:11,fontFamily:"Georgia,serif",flexShrink:0}}, "⇄ Swap"),
            swapTarget===`${mealKey}-${idx}`&&h("div",{style:{position:"absolute",right:0,zIndex:50,background:C.white,border:"1px solid "+C.grayBorder,borderRadius:8,padding:10,width:220,maxHeight:200,overflowY:"auto",boxShadow:"0 4px 20px rgba(0,0,0,0.15)"}},
              h(Inp,{value:swapSearch,onChange:setSwapSearch,placeholder:"Search foods..."}),
              FOOD_DB.filter(fd=>!swapSearch||fd.name.toLowerCase().includes(swapSearch.toLowerCase())).slice(0,8).map((fd,i)=>
                h("div",{key:i,onClick:()=>swapFood(mealKey,idx,fd.name,fd.cat),style:{padding:"5px 6px",cursor:"pointer",fontSize:12,color:C.navy,borderBottom:"1px solid "+C.grayBorder}},fd.name)
              )
            )
          )),
          h("div",{style:{display:"flex",gap:10,marginTop:6,fontSize:11,color:C.gray}},
            h("span",null,`P: ${mealTotal.pro}g`),h("span",null,`C: ${mealTotal.carb}g`),h("span",null,`F: ${mealTotal.fat}g`)
          )
        );
      })
    )
  );
}


function NutritionCalculator({client}) {
  const [showCalc, setShowCalc] = useState(false);
  const [showConv, setShowConv] = useState(false);
  const [conv, setConv] = useState({lbs:"",kg:"",feet:"",inches:"",cm:""});
  const [cf, setCf] = useState({weight:"",height:"",age:"",sex:"male",activity:"moderate",goal:"maintenance"});
  const [cr, setCr] = useState(null);

  const calcConv = (field, val) => {
    const v = parseFloat(val)||0;
    if(field==="lbs") setConv(p=>({...p,lbs:val,kg:(v*0.453592).toFixed(1)}));
    else if(field==="kg") setConv(p=>({...p,kg:val,lbs:(v*2.20462).toFixed(1)}));
    else if(field==="feet"||field==="inches"){const f2=field==="feet"?v:parseFloat(conv.feet)||0;const i2=field==="inches"?v:parseFloat(conv.inches)||0;setConv(p=>({...p,[field]:val,cm:((f2*12+i2)*2.54).toFixed(1)}));}
    else if(field==="cm"){const ti=v/2.54;setConv(p=>({...p,cm:val,feet:Math.floor(ti/12),inches:(ti%12).toFixed(1)}));}
  };

  const calcNeeds = () => {
    const w=parseFloat(cf.weight)||70; const h=parseFloat(cf.height)||170; const a=parseInt(cf.age)||30;
    const bmr=cf.sex==="male"?(10*w)+(6.25*h)-(5*a)+5:(10*w)+(6.25*h)-(5*a)-161;
    const act={sedentary:1.2,light:1.375,moderate:1.55,active:1.725,veryactive:1.9};
    const tdee=Math.round(bmr*(act[cf.activity]||1.55));
    const goals={loss:{cal:tdee-500,pro:Math.round(w*2.2),carb:Math.round((tdee-500-w*2.2*4-Math.round(w*0.35)*9)/4),fat:Math.round(w*0.35)},
      maintenance:{cal:tdee,pro:Math.round(w*1.8),carb:Math.round((tdee-w*1.8*4-Math.round(w*0.35)*9)/4),fat:Math.round(w*0.35)},
      gain:{cal:tdee+300,pro:Math.round(w*2.4),carb:Math.round((tdee+300-w*2.4*4-Math.round(w*0.4)*9)/4),fat:Math.round(w*0.4)}};
    setCr({tdee,...goals[cf.goal]||goals.maintenance});
  };

  return h("div",null,
    h("div",{style:{display:"flex",gap:8,marginBottom:8}},
      h(Btn,{onClick:()=>{setShowCalc(!showCalc);setShowConv(false);},color:showCalc?C.gray:C.teal,full:true,st:{fontSize:12}},"📊 Calorie & Macro Calculator"),
      h(Btn,{onClick:()=>{setShowConv(!showConv);setShowCalc(false);},color:showConv?C.gray:C.navy2,full:true,st:{fontSize:12}},"⇄ Unit Converter")
    ),
    showCalc&&h(Card,null,h(CardH,{t:"CALORIE & MACRO CALCULATOR"}),h(CardB,null,
      h("div",{style:{fontSize:11,color:C.gray,fontStyle:"italic",marginBottom:10}},"Enter weight in kg, height in cm"),
      h(G2,null,
        h(Fld,{label:"WEIGHT (kg)"},h(Inp,{value:cf.weight,onChange:v=>setCf(p=>({...p,weight:v})),placeholder:"80"})),
        h(Fld,{label:"HEIGHT (cm)"},h(Inp,{value:cf.height,onChange:v=>setCf(p=>({...p,height:v})),placeholder:"175"}))
      ),
      h(G2,null,
        h(Fld,{label:"AGE"},h(Inp,{value:cf.age,onChange:v=>setCf(p=>({...p,age:v})),placeholder:"35"})),
        h(Fld,{label:"SEX"},h(Sel,{value:cf.sex,onChange:v=>setCf(p=>({...p,sex:v})),options:[["male","Male"],["female","Female"]]}))
      ),
      h(Fld,{label:"ACTIVITY LEVEL"},h(Sel,{value:cf.activity,onChange:v=>setCf(p=>({...p,activity:v})),options:[["sedentary","Sedentary (desk job, no exercise)"],["light","Light (1-3 days/week)"],["moderate","Moderate (3-5 days/week)"],["active","Active (6-7 days/week)"],["veryactive","Very Active (athlete/physical job)"]]})),
      h(Fld,{label:"GOAL"},h("div",{style:{display:"flex",gap:8}},
        [["loss","Fat Loss",C.red],["maintenance","Maintain",C.teal],["gain","Muscle Gain",C.green]].map(([v,l,col])=>
          h("button",{key:v,onClick:()=>setCf(p=>({...p,goal:v})),style:{flex:1,padding:"8px 4px",borderRadius:7,border:"2px solid",cursor:"pointer",fontSize:11,fontFamily:"Georgia,serif",fontWeight:"bold",
            borderColor:cf.goal===v?col:C.grayBorder,background:cf.goal===v?col+"15":"transparent",color:cf.goal===v?col:C.gray}},l)
        )
      )),
      h(Btn,{onClick:calcNeeds,color:C.teal,full:true,st:{marginTop:8}},"Calculate"),
      cr&&h("div",{style:{marginTop:12,background:C.tealLight,borderRadius:10,padding:14}},
        h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:15,textAlign:"center",marginBottom:8}},cr.cal+" calories / day"),
        h("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,textAlign:"center"}},
          [{l:"PROTEIN",v:cr.pro+"g",c:C.teal},{l:"CARBS",v:cr.carb+"g",c:C.amber},{l:"FAT",v:cr.fat+"g",c:C.green}]
          .map(m=>h("div",{key:m.l,style:{background:C.white,borderRadius:8,padding:8}},
            h("div",{style:{fontSize:10,color:C.gray,fontWeight:"bold"}},m.l),
            h("div",{style:{fontSize:16,fontWeight:"bold",color:m.c}},m.v)
          ))
        ),
        h("div",{style:{fontSize:11,color:C.gray,textAlign:"center",marginTop:6}},"TDEE: "+cr.tdee+" cal/day")
      )
    )),
    showConv&&h(Card,null,h(CardH,{t:"UNIT CONVERTER"}),h(CardB,null,
      h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:12,marginBottom:8}},"⚖ Weight"),
      h(G2,null,
        h(Fld,{label:"POUNDS (lbs)"},h(Inp,{value:conv.lbs,onChange:v=>calcConv("lbs",v),placeholder:"185"})),
        h(Fld,{label:"KILOGRAMS (kg)"},h(Inp,{value:conv.kg,onChange:v=>calcConv("kg",v),placeholder:"84"}))
      ),
      h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:12,margin:"10px 0 8px"}},"↕ Height"),
      h(G2,null,
        h(Fld,{label:"FEET"},h(Inp,{value:conv.feet,onChange:v=>calcConv("feet",v),placeholder:"6"})),
        h(Fld,{label:"INCHES"},h(Inp,{value:conv.inches,onChange:v=>calcConv("inches",v),placeholder:"1"}))
      ),
      h(Fld,{label:"CENTIMETERS"},h(Inp,{value:conv.cm,onChange:v=>calcConv("cm",v),placeholder:"185"}))
    ))
  );
}

function NutritionView({client}){
  const dM=client.nutrition?.macros||{protein:{pct:32,grams:160},carbs:{pct:43,grams:215},fat:{pct:25,grams:56}};
  const dC=client.calories||client.nutrition?.calories||2000;
  const [calories,setCalories]=useState(()=>client.calories||LS.get("tbf_cals_"+client.id,dC));
  const [macros,setMacros]=useState(()=>client.macros||LS.get("tbf_macros_"+client.id,dM));
  const [goalFilter,setGoalFilter]=useState(()=>LS.get("tbf_goal_"+client.id,"recomp"));
  const [mealFoods,setMealFoods]=useState(()=>client.meal_foods||LS.get("tbf_meals_"+client.id,{}));
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
    setMacros(newM);LS.set("tbf_macros_"+client.id,newM);syncToSupabase(client.email,"macros",newM);
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
  const applyCalc=()=>{if(!cr)return;setCalories(cr.calories);setMacros(cr);LS.set("tbf_cals_"+client.id,cr.calories);LS.set("tbf_macros_"+client.id,cr);syncToSupabase(client.email,"calories",cr.calories);syncToSupabase(client.email,"macros",cr);};

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
  const [logs,setLogs]=useState(()=>client.pain_logs||LS.get(`tbf_pain_${client.id}`,[]));/**pain_load*/
  const [score,setScore]=useState(5);const [loc,setLoc]=useState("");const [notes,setNotes]=useState("");
  const submit=async()=>{
    const e={date:new Date().toISOString().slice(0,10),time:new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}),pain:pain,fatigue:fatigue,soreness:soreness,notes:pnotes};
    const nl=[e,...logs];
    setLogs(nl);
    LS.set(`tbf_pain_${client.id}`,nl);
    await sbSave(client.email,{pain_logs:nl});
  };
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
  const [logs,setLogs]=useState(()=>LS.get(`tbf_comp_${client.id}`,[]));
  useEffect(()=>{
    if(!supabase||!client.email) return;
    supabase.from('tbf_workout_logs')
      .select('log_date,completed,day_title')
      .eq('client_email',client.email)
      .eq('completed',true)
      .order('log_date',{ascending:false})
      .limit(60)
      .then(({data,error})=>{
        if(error||!data) return;
        const mapped=data.map(r=>({date:r.log_date,dayTitle:r.day_title,completed:r.completed}));
        setLogs(mapped);
        LS.set(`tbf_comp_${client.id}`,mapped);
      });
  },[client.email]);
  const today=new Date();
  const weeks=Array.from({length:6},(_,wi)=>{const ws=new Date(today);ws.setDate(today.getDate()-today.getDay()-wi*7);const days=Array.from({length:7},(_,di)=>{const d=new Date(ws);d.setDate(ws.getDate()+di);const ds=d.toISOString().slice(0,10);return{date:ds,count:logs.filter(l=>l.date===ds).length,day:["Su","Mo","Tu","We","Th","Fr","Sa"][di]};});return{label:wi===0?"This week":`${wi}w ago`,days};});
  const tw=weeks[0].days.filter(d=>d.count>0).length;
  return h("div",{style:{paddingBottom:24}},
    h("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14}},[["This Week",`${tw}`,C.teal,"exercises logged"],["Total",`${logs.length}`,C.navy,"exercises logged"]].map(([label,val,color,sub])=>h("div",{key:label,style:{background:C.white,borderRadius:10,boxShadow:"0 1px 6px rgba(0,0,0,0.07)",padding:14,textAlign:"center"}},h("div",{style:{fontSize:28,fontWeight:"bold",color}},val),h("div",{style:{fontSize:10,color:C.gray}},sub),h("div",{style:{fontSize:11,color:C.gray,marginTop:2}},label)))),
    weeks.map((week,wi)=>h(Card,{key:wi},h(CardB,{p:12},h("div",{style:{fontSize:11,fontWeight:"bold",color:C.gray,marginBottom:8}},week.label.toUpperCase()),h("div",{style:{display:"flex",gap:5}},week.days.map((d,di)=>h("div",{key:di,style:{flex:1,textAlign:"center"}},h("div",{style:{width:"100%",paddingBottom:"100%",borderRadius:5,background:d.count>0?C.teal:C.grayLight,position:"relative"}},d.count>0&&h("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:C.white,fontSize:10,fontWeight:"bold"}},d.count)),h("div",{style:{fontSize:9,color:C.gray,marginTop:3}},d.day)))))))
  );
}

function SessionNotes({client,isTrainer}){
  const [notes,setNotes]=useState(()=>client.notes||LS.get(`tbf_notes_${client.id}`,[]));
  const [newNote,setNewNote]=useState("");
  const addNote=async()=>{
    if(!newNote.trim()) return;
    const e={date:new Date().toISOString().slice(0,10),text:newNote.trim(),from:isTrainer?'Trainer':'Client'};
    const u=[e,...notes];
    setNotes(u);
    LS.set(`tbf_notes_${client.id}`,u);
    setNewNote('');
    await sbSave(client.email,{notes:u});
  };
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
    {id:"zone2",label:"Zone 2",desc:"Aerobic base building — the foundation of all cardio fitness",rx:"HR 120-140 | Conversational pace | 45-60 min",color:C.teal},
    {id:"hiit",label:"HIIT",desc:"High intensity intervals — maximum output, full recovery",rx:"Max effort 20-40s | Rest 2-4x work | 1x/week only",color:C.red},
    {id:"liss",label:"LISS",desc:"Low intensity steady state — easy aerobic maintenance",rx:"HR 100-120 | Easy effort | 30-45 min",color:C.green},
    {id:"tempo",label:"Tempo",desc:"Sustained moderate-high effort — lactate threshold training",rx:"HR 150-165 | Comfortably hard | 20-40 min",color:C.amber},
    {id:"active_recovery",label:"Active Recovery",desc:"Blood flow, mobility, and nervous system recovery",rx:"Very light movement | No fatigue | 20-30 min",color:C.gray},
    {id:"sport",label:"Sport Specific",desc:"In-season training aligned to sport demands",rx:"Per sport protocol — see notes",color:C.purple},
  ];

  const EQUIPMENT_OPTIONS=[
    "Stationary Bike","Outdoor Bike","Long Distance Bike","Rowing Machine",
    "Treadmill — Walk","Treadmill — Run","Stair Master","Stair Climb — Outdoor",
    "Elliptical","Ski Erg","Assault Bike","Swimming",
    "Jump Rope","Walking — Outdoor","Running — Outdoor","Trail Run",
    "Incline Walk","Rucking","Sled Push/Pull","Battle Ropes",
    "Basketball","Soccer","Tennis","Pickleball","Cycling Class","Sport Practice","Custom",
  ];

  const SPORT_OPTIONS=[
    "Basketball — Full Court","Basketball — Half Court","Soccer","Baseball / Softball",
    "Tennis","Pickleball","Swimming — Laps","Swimming — Open Water",
    "Cycling — Road","Cycling — Mountain","Cycling — Peloton",
    "Rowing — Ergometer","Rowing — Open Water","CrossFit WOD",
    "Martial Arts / BJJ","Wrestling","Track & Field","Custom",
  ];

  const DURATION_OPTIONS=[
    ["15","15 min"],["20","20 min"],["25","25 min"],["30","30 min"],
    ["35","35 min"],["40","40 min"],["45","45 min"],["50","50 min"],
    ["55","55 min"],["60","60 min"],["75","75 min"],["90","90 min"],
    ["custom","Custom..."],
  ];

  const addSession=()=>{
    const s={day:"Monday",type:"zone2",duration:"30",customDuration:"",intensity:"moderate",
             equipment:"Stationary Bike",sport:"",notes:""};
    setPlan(p=>({...p,sessions:[...p.sessions,s]}));
  };
  const updateSession=(i,field,val)=>setPlan(p=>({...p,sessions:p.sessions.map((s,j)=>j===i?{...s,[field]:val}:s)}));
  const removeSession=i=>setPlan(p=>({...p,sessions:p.sessions.filter((_,j)=>j!==i)}));
  const handleSave=()=>{LS.set("tbf_cardio_"+client.id,plan);onUpdate({...client,cardioPlan:plan});syncClient(client.email,{cardio_plan:JSON.stringify(plan)});setSaved(true);setTimeout(()=>setSaved(false),2000);};

  const weekTotal=plan.sessions.length;
  const zone2Count=plan.sessions.filter(s=>s.type==="zone2").length;
  const hiitCount=plan.sessions.filter(s=>s.type==="hiit").length;
  const getDisplayDuration=s=>s.duration==="custom"&&s.customDuration?s.customDuration+" min":s.duration+" min";

  return h("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:999,display:"flex",flexDirection:"column",alignItems:"center"}},
    h("div",{style:{background:C.white,height:"100%",display:"flex",flexDirection:"column",maxWidth:700,margin:"0 auto",width:"100%",overflowY:"hidden"}},
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
        h(Card,null,h(CardH,{t:"WEEKLY CARDIO PLAN",color:C.teal}),h(CardB,null,
          h(G2,null,
            h(Fld,{label:"WEEKLY SESSIONS GOAL"},
              h(Sel,{value:plan.weeklyGoal,onChange:v=>setPlan(p=>({...p,weeklyGoal:v})),
                options:[["1","1x/week"],["2","2x/week"],["3","3x/week"],["4","4x/week"],["5","5x/week"],["6","6x/week"],["7","Daily"]]})
            ),
            h(Fld,{label:"PRIMARY FOCUS"},
              h(Sel,{value:plan.primaryType,onChange:v=>setPlan(p=>({...p,primaryType:v})),
                options:CARDIO_TYPES.map(t=>[t.id,t.label])})
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
          hiitCount>1&&h("div",{style:{background:C.amberLight,border:"1px solid "+C.amber+"44",borderRadius:8,padding:"10px 12px",marginTop:8,fontSize:12,color:C.navy}},
            "⚠ "+hiitCount+" HIIT sessions scheduled. Limit to 1x/week to avoid overtraining and injury."
          )
        )),
        // Cardio type reference
        h(Card,null,h(CardH,{t:"CARDIO TYPE REFERENCE"}),h(CardB,{p:10},
          CARDIO_TYPES.map(t=>h("div",{key:t.id,style:{display:"flex",gap:10,alignItems:"flex-start",marginBottom:10}},
            h("div",{style:{background:t.color,borderRadius:6,padding:"4px 8px",fontSize:10,fontWeight:"bold",color:C.white,whiteSpace:"nowrap",flexShrink:0}},t.label),
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
        plan.sessions.length===0&&h("div",{style:{textAlign:"center",padding:24,color:C.gray,fontStyle:"italic"}},"No sessions added yet. Tap + Add Session to build the week."),
        plan.sessions.map((s,i)=>{
          const typeInfo=CARDIO_TYPES.find(t=>t.id===s.type)||CARDIO_TYPES[0];
          const isSport=s.type==="sport";
          return h(Card,{key:i},
            h("div",{style:{background:typeInfo.color,color:C.white,padding:"8px 12px",display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"8px 8px 0 0",margin:"-14px -14px 12px"}},
              h("span",{style:{fontWeight:"bold",fontSize:12}},s.day+" — "+typeInfo.label),
              h("button",{onClick:()=>removeSession(i),style:{background:"none",border:"none",color:C.white,cursor:"pointer",fontSize:16,padding:"0 4px"}},"✕")
            ),
            h(CardB,null,
              h(G2,null,
                h(Fld,{label:"DAY"},h(Sel,{value:s.day,onChange:v=>updateSession(i,"day",v),
                  options:[["Monday","Monday"],["Tuesday","Tuesday"],["Wednesday","Wednesday"],["Thursday","Thursday"],["Friday","Friday"],["Saturday","Saturday"],["Sunday","Sunday"]]})),
                h(Fld,{label:"TYPE"},h(Sel,{value:s.type,onChange:v=>updateSession(i,"type",v),
                  options:CARDIO_TYPES.map(t=>[t.id,t.label])}))
              ),
              h(G2,null,
                h(Fld,{label:"DURATION"},h("div",null,
                  h(Sel,{value:s.duration,onChange:v=>updateSession(i,"duration",v),options:DURATION_OPTIONS}),
                  s.duration==="custom"&&h(Inp,{value:s.customDuration||"",onChange:v=>updateSession(i,"customDuration",v),
                    placeholder:"Enter minutes",st:{marginTop:6}})
                )),
                h(Fld,{label:"INTENSITY"},h(Sel,{value:s.intensity,onChange:v=>updateSession(i,"intensity",v),
                  options:[["light","Light — Zone 1-2"],["moderate","Moderate — Zone 2-3"],["hard","Hard — Zone 3-4"],["max","Max — Zone 5 (HIIT)"]]}))
              ),
              isSport
                ? h(Fld,{label:"SPORT / ACTIVITY"},h(Sel,{value:s.sport||"",onChange:v=>updateSession(i,"sport",v),
                    options:[["","Select sport..."],...SPORT_OPTIONS.map(o=>[o,o])]}))
                : h(Fld,{label:"EQUIPMENT / MODALITY"},h(Sel,{value:s.equipment,onChange:v=>updateSession(i,"equipment",v),
                    options:EQUIPMENT_OPTIONS.map(o=>[o,o])})),
              h(Fld,{label:"TRAINER NOTES",mb:0},h(TA,{value:s.notes,onChange:v=>updateSession(i,"notes",v),
                placeholder:"RPE targets, pacing notes, heart rate zones, progressions..."}))
            )
          );
        }),
        plan.sessions.length>0&&h("div",{style:{background:C.tealLight,border:"1px solid "+C.teal+"44",borderRadius:10,padding:"12px 14px",marginTop:8}},
          h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:13,marginBottom:8}},"Weekly Cardio Summary for "+client.name),
          plan.sessions.map((s,i)=>{
            const t=CARDIO_TYPES.find(ct=>ct.id===s.type)||CARDIO_TYPES[0];
            const modality=s.type==="sport"?(s.sport||"Sport"):s.equipment;
            return h("div",{key:i,style:{display:"flex",gap:8,alignItems:"center",marginBottom:6}},
              h("div",{style:{background:t.color,color:C.white,borderRadius:4,padding:"2px 8px",fontSize:10,fontWeight:"bold",whiteSpace:"nowrap"}},s.day),
              h("div",{style:{fontSize:12,color:C.navy}},t.label+" | "+getDisplayDuration(s)+" | "+modality),
              s.notes&&h("div",{style:{fontSize:11,color:C.gray,fontStyle:"italic"}}," — "+s.notes)
            );
          })
        )
      )
    )
  );
}


function CardioTabView({localClient,isTrainer,onEdit}){
  const today=new Date().toISOString().slice(0,10);
  const logKey="tbf_cardio_log_"+localClient.id;
  const [cardioCompleted,setCardioCompleted]=useState(()=>{
    try{const logs=JSON.parse(localStorage.getItem(logKey)||'[]');return logs.find(l=>l.date===today)?.completed||false;}catch(e){return false;}
  });

  const saveCardioLog=async(completedVal)=>{
    try{
      const logs=JSON.parse(localStorage.getItem(logKey)||'[]');
      const existing=logs.find(l=>l.date===today)||{date:today};
      existing.completed=completedVal;existing.completedAt=completedVal?new Date().toISOString():null;
      localStorage.setItem(logKey,JSON.stringify([existing,...logs.filter(l=>l.date!==today)].slice(0,60)));
    }catch(e){}
    if(supabase&&localClient.email){
      try{
        await supabase.from("tbf_workout_logs").upsert({
          client_email:localClient.email,log_date:today,day_title:"Cardio Session",
          completed:completedVal,completed_at:completedVal?new Date().toISOString():null,
          exercises:JSON.stringify([{name:"Cardio",type:"cardio"}]),
          updated_at:new Date().toISOString()
        },{onConflict:"client_email,log_date"});
      }catch(e){console.warn("Cardio log sync:",e.message);}
    }
  };
  const markCardioComplete=async()=>{await saveCardioLog(true);setCardioCompleted(true);};
  const undoCardioComplete=async()=>{await saveCardioLog(false);setCardioCompleted(false);};

  const cp=localClient.cardioPlan||LS.get("tbf_cardio_"+localClient.id,null);
  if(!cp||!cp.sessions||cp.sessions.length===0) return h("div",null,
    isTrainer&&h("div",{style:{marginBottom:12}},h(Btn,{onClick:onEdit,color:C.teal,full:true,st:{fontSize:12}},"🏃 Edit Cardio Plan")),
    h("div",{style:{padding:32,textAlign:"center",color:C.gray,fontStyle:"italic"}},"No cardio plan yet."+(isTrainer?" Tap Edit Cardio Plan to build one.":""))
  );

  const CTYPE_COLORS={zone2:C.teal,hiit:C.red,liss:C.green,tempo:C.amber,active_recovery:C.gray,sport:C.purple};
  const CTYPE_LABEL={zone2:"Zone 2",hiit:"HIIT",liss:"LISS",tempo:"Tempo",active_recovery:"Active Recovery",sport:"Sport Specific"};

  return h("div",null,
    isTrainer&&h("div",{style:{marginBottom:12}},h(Btn,{onClick:onEdit,color:C.teal,full:true,st:{fontSize:12}},"🏃 Edit Cardio Plan")),
    h(Card,null,
      h(CardH,{t:"WEEKLY CARDIO OVERVIEW",color:C.teal}),
      h(CardB,null,
        h("div",{style:{display:"flex",gap:12,marginBottom:12}},
          h("div",{style:{flex:1,background:C.tealLight,borderRadius:8,padding:"10px 12px",textAlign:"center"}},
            h("div",{style:{fontSize:22,fontWeight:"bold",color:C.teal}},cp.sessions.length),
            h("div",{style:{fontSize:10,color:C.gray}},"Sessions")
          ),
          h("div",{style:{flex:1,background:"#f0f4f8",borderRadius:8,padding:"10px 12px",textAlign:"center"}},
            h("div",{style:{fontSize:22,fontWeight:"bold",color:C.navy}},cp.weeklyGoal+"x"),
            h("div",{style:{fontSize:10,color:C.gray}},"Weekly Goal")
          ),
          h("div",{style:{flex:1,background:C.amberLight,borderRadius:8,padding:"10px 12px",textAlign:"center"}},
            h("div",{style:{fontSize:22,fontWeight:"bold",color:C.amber}},cp.sessions.filter(s=>s.type==="hiit").length),
            h("div",{style:{fontSize:10,color:C.gray}},"HIIT Days")
          )
        )
      )
    ),
    cp.sessions.map((s,i)=>{
      const col=CTYPE_COLORS[s.type]||C.navy;
      const dur=s.duration==="custom"&&s.customDuration?s.customDuration+" min":s.duration+" min";
      const modality=s.type==="sport"?(s.sport||"Sport"):s.equipment;
      return h("div",{key:i,style:{border:"1px solid "+col+"44",borderRadius:10,overflow:"hidden",marginBottom:10}},
        h("div",{style:{background:col,color:C.white,padding:"10px 14px",display:"flex",justifyContent:"space-between",alignItems:"center"}},
          h("span",{style:{fontWeight:"bold",fontSize:13}},s.day+" — "+CTYPE_LABEL[s.type]),
          h("span",{style:{fontSize:12,opacity:0.9}},dur)
        ),
        h("div",{style:{padding:"12px 14px",background:C.white}},
          h("div",{style:{fontSize:13,fontWeight:"bold",color:C.navy,marginBottom:4}},modality),
          s.notes&&h("div",{style:{fontSize:12,color:C.gray,fontStyle:"italic",marginBottom:6}},s.notes),
          h("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginTop:4}},
            h("div",{style:{background:col+"15",border:"1px solid "+col+"33",borderRadius:6,padding:"3px 9px",fontSize:11,color:col,fontWeight:"bold"}},CTYPE_LABEL[s.type]),
            s.intensity&&h("div",{style:{background:C.grayBorder,borderRadius:6,padding:"3px 9px",fontSize:11,color:C.gray}},s.intensity)
          )
        )
      );
    }),
    cardioCompleted
      ?h("div",{style:{background:C.green,borderRadius:10,padding:"14px 16px",marginTop:4,display:"flex",justifyContent:"space-between",alignItems:"center"}},
          h("div",null,
            h("div",{style:{color:C.white,fontWeight:"bold",fontSize:15}},"✓ Cardio Complete!"),
            h("div",{style:{color:C.white,fontSize:12,opacity:0.85,marginTop:2}},"Great work. Session logged.")
          ),
          h("button",{onClick:undoCardioComplete,style:{background:"none",border:"1px solid rgba(255,255,255,0.5)",color:C.white,borderRadius:6,padding:"5px 10px",fontSize:11,cursor:"pointer"}},"Undo")
        )
      :h("button",{onClick:markCardioComplete,style:{width:"100%",marginTop:12,padding:"13px",background:C.navy,color:C.white,border:"2px solid "+C.teal,borderRadius:10,fontSize:14,fontWeight:"bold",cursor:"pointer",letterSpacing:0.5}},
          "✓ Mark Cardio Complete"
        )
  );
}


class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error, info) { console.error('ClientView crash:', error, info); }
  render() {
    if (this.state.error) {
      return h('div', {style:{padding:24,background:'#fff0f0',borderRadius:12,margin:12}},
        h('div', {style:{fontWeight:'bold',color:'red',marginBottom:8}}, '⚠ Error loading client view'),
        h('div', {style:{fontSize:12,color:'#333',fontFamily:'monospace',whiteSpace:'pre-wrap'}},
          this.state.error?.message || String(this.state.error)
        ),
        h('button', {
          onClick:()=>this.setState({error:null}),
          style:{marginTop:12,padding:'8px 16px',background:'#1C2B39',color:'white',border:'none',borderRadius:6,cursor:'pointer'}
        }, 'Try Again')
      );
    }
    return this.props.children;
  }
}

function ClientView({client,isTrainer,onClientUpdate}){
  const [tab,setTab]=useState("plan");
  const [showBuilder,setShowBuilder]=useState(false);
  const [showCardio,setShowCardio]=useState(false);
  const [di,setDi]=useState(0);
  const [assessment,setAssessment]=useState(()=>LS.get(`tbf_assess_${client.id}`,null));
  // Load assessment from Supabase on mount (source of truth)
  useEffect(()=>{
    if(!supabase||!client.email) return;
    supabase.from("tbf_clients")
      .select("assessment")
      .eq("email",client.email)
      .single()
      .then(({data,error})=>{
        if(error||!data?.assessment) return;
        try{
          const a=JSON.parse(data.assessment);
          if(a){setAssessment(a);LS.set(`tbf_assess_${client.id}`,a);}
        }catch(e){}
      });
  },[client.email]);
  const [pendingProg,setPendingProg]=useState(null);
  // localClient mirrors the client prop but updates immediately when onClientUpdate fires
  const [localClient,setLocalClient]=useState(client);
  // Sync localClient whenever the parent passes a new client reference
  useEffect(()=>{setLocalClient(client);},[client.id,JSON.stringify(client.days)]);
  // Wrap onClientUpdate to also update localClient immediately
  const handleLocalUpdate=(updated)=>{
    setLocalClient(updated);
    onClientUpdate(updated);
  };
  const compLogs=LS.get(`tbf_comp_${client.id}`,[]);
  const recentCount=compLogs.filter(l=>(new Date()-new Date(l.date))/(1000*60*60*24)<7).length;
  const hasProgram=localClient.days&&localClient.days.length>0;
  const handleSaveAssessment=async data=>{
    // Save current assessment locally
    LS.set(`tbf_assess_${client.id}`,data);
    setAssessment(data);
    // Save to assessment history locally
    const histKey=`tbf_assess_history_${client.id}`;
    const history=LS.get(histKey,[]);
    const dated={...data,savedDate:data.date||new Date().toISOString().slice(0,10)};
    const existing=history.findIndex(a=>a.savedDate===dated.savedDate);
    const updated=existing>=0?history.map((a,i)=>i===existing?dated:a):[dated,...history];
    LS.set(histKey,updated.slice(0,10));
    // Save to Supabase
    if(supabase&&client.email){
      try{
        // Save current assessment to tbf_clients.assessment column
        await supabase.from('tbf_clients').upsert({email:client.email,assessment:JSON.stringify(data),trainer_id:'1c5ec66c-9a39-40fb-8d08-e79d6dd6785f'},{onConflict:'email'});
        // Save to assessment history table
        await supabase.from("tbf_assessment_history").upsert({
          client_email:client.email,
          saved_date:dated.savedDate,
          assessment:JSON.stringify(dated),
          updated_at:new Date().toISOString()
        },{onConflict:"client_email,saved_date"});
        console.log("✓ Assessment saved to Supabase");
      }catch(e){console.warn("Assessment save error:",e.message);}
    }
    if(isTrainer){const sugg=genSugg(data);if(!hasProgram){const prog=buildProg(sugg);onClientUpdate({...client,days:[prog]});}else if(sugg.findings.length>0) setPendingProg(buildProg(sugg));}
  };
  const TABS=[{id:"plan",label:"Training"},{id:"cardio",label:"Cardio"},{id:"history",label:"History"},{id:"notes",label:"Notes"},{id:"nutrition",label:"Nutrition"},{id:"assess",label:"Assessment"}];
  // Safety guard
  if (!client || !client.email) return h("div",{style:{padding:24,textAlign:"center",color:C.gray}},"Loading client...");

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
    h("div",{className:"sc",style:{display:"flex",background:C.white,borderBottom:`1px solid ${C.grayBorder}`,position:"sticky",top:56,zIndex:90,justifyContent:"center"}},
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
          h("div",{className:"sc",style:{display:"flex",gap:8,paddingBottom:8,marginBottom:10}},(localClient.days||[]).map((d,i)=>h("button",{key:i,onClick:()=>setDi(i),style:{background:i===di?C.teal:C.grayLight,color:i===di?C.white:C.navy,border:"none",borderRadius:7,padding:"6px 12px",fontSize:11,fontWeight:"bold",cursor:"pointer",flexShrink:0,whiteSpace:"nowrap"}},d.title.split("—")[0].replace("SESSION","Session").replace("MONDAY","Mon").replace("TUESDAY","Tue").replace("EVERY OTHER DAY","E/O Day").replace("DAILY","Daily").replace("HOME","Home").replace("ASSESSMENT-BASED CORRECTIVE PROGRAM","Corrective").trim()))),
          h(DayView,{client:localClient,di,isTrainer}),
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

      tab==="assess"&&h("div",null,
        h(AssessmentHistory,{client,isTrainer,onLoadAssessment:data=>{LS.set(`tbf_assess_${client.id}`,data);setAssessment(data);}}),
        h(AssessmentForm,{client,isTrainer,existing:assessment,onSave:handleSaveAssessment})
      ),
      tab==="cardio"&&h(CardioTabView,{localClient,isTrainer,onEdit:()=>setShowCardio(true)}),
      false&&h("div",null,
        (()=>{return h("div",null,
            h(Card,null,
              h(CardH,{t:"WEEKLY CARDIO OVERVIEW",color:C.teal}),
              h(CardB,null,
                h("div",{style:{display:"flex",gap:12,marginBottom:12}},
                  h("div",{style:{flex:1,background:C.tealLight,borderRadius:8,padding:"10px 12px",textAlign:"center"}},
                    h("div",{style:{fontSize:22,fontWeight:"bold",color:C.teal}},cp.sessions.length),
                    h("div",{style:{fontSize:10,color:C.gray}},"Sessions")
                  ),
                  h("div",{style:{flex:1,background:C.navyLight||"#f0f4f8",borderRadius:8,padding:"10px 12px",textAlign:"center"}},
                    h("div",{style:{fontSize:22,fontWeight:"bold",color:C.navy}},cp.weeklyGoal+"x"),
                    h("div",{style:{fontSize:10,color:C.gray}},"Weekly Goal")
                  ),
                  h("div",{style:{flex:1,background:C.amberLight,borderRadius:8,padding:"10px 12px",textAlign:"center"}},
                    h("div",{style:{fontSize:22,fontWeight:"bold",color:C.amber}},cp.sessions.filter(s=>s.type==="hiit").length),
                    h("div",{style:{fontSize:10,color:C.gray}},"HIIT Days")
                  )
                )
              )
            ),
            cp.sessions.map((s,i)=>{
              const col=CTYPE_COLORS[s.type]||C.navy;
              const dur=s.duration==="custom"&&s.customDuration?s.customDuration+" min":s.duration+" min";
              const modality=s.type==="sport"?(s.sport||"Sport"):s.equipment;
              return h("div",{key:i,style:{border:"1px solid "+col+"44",borderRadius:10,overflow:"hidden",marginBottom:10}},
                h("div",{style:{background:col,color:C.white,padding:"10px 14px",display:"flex",justifyContent:"space-between",alignItems:"center"}},
                  h("span",{style:{fontWeight:"bold",fontSize:13}},s.day+" — "+CTYPE_LABEL[s.type]),
                  h("span",{style:{fontSize:12,opacity:0.9}},dur)
                ),
                h("div",{style:{padding:"12px 14px",background:C.white}},
                  h("div",{style:{fontSize:13,fontWeight:"bold",color:C.navy,marginBottom:4}},modality),
                  s.notes&&h("div",{style:{fontSize:12,color:C.gray,fontStyle:"italic",marginBottom:4}},s.notes),
                  h("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginTop:4}},
                    h("div",{style:{background:col+"15",border:"1px solid "+col+"33",borderRadius:6,padding:"3px 9px",fontSize:11,color:col,fontWeight:"bold"}},CTYPE_LABEL[s.type]),
                    s.intensity&&h("div",{style:{background:C.grayBorder,borderRadius:6,padding:"3px 9px",fontSize:11,color:C.gray}},s.intensity)
                  )
                )
              );
            })
          );
        })()
      ),
      tab==="history"&&h(WorkoutHistory,{client,isTrainer}),
      tab==="notes"&&h("div",null,
        h(TrainerNotes,{client:localClient,isTrainer,onClientUpdate:handleLocalUpdate}),
        !isTrainer&&h(ChangePassword,null)
      ),
      tab==="nutrition"&&h(NutritionProfile,{client:localClient,isTrainer,onClientUpdate:handleLocalUpdate}),
      tab==="nutrition_legacy"&&h(NutritionView,{client}),
      tab==="notes"&&h(SessionNotes,{client,isTrainer}),
      tab==="pain"&&h(PainLog,{client}),
      tab==="comp"&&h(Compliance,{client})
    ),
    showBuilder&&h(WorkoutBuilder,{client:localClient,onUpdate:c=>{handleLocalUpdate(c);setShowBuilder(false);},onClose:()=>setShowBuilder(false)}),
    showCardio&&h(CardioBuilder,{client:localClient,onUpdate:c=>{handleLocalUpdate(c);setShowCardio(false);},onClose:()=>setShowCardio(false)})
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

const TRAINER_U={id:"trainer",name:"Anthony Anderson",password:"",role:"trainer"};
const TRAINER_EMAIL="aja2012@gmail.com";  // Your Supabase login email
const TRAINER_PASS="TBF228!";
const INIT=[];

function Login({onLogin,onRegister}){
  const [name,setName]=useState("");const [pass,setPass]=useState("");const [err,setErr]=useState("");
  const handleLogin=()=>{if((name.toLowerCase().replace(/\s/g,"")==="anthonyanderson"||name.toLowerCase()===TRAINER_EMAIL.toLowerCase())&&pass===TRAINER_PASS){LS.set("tbf_session",{id:"trainer",role:"trainer"});onLogin(TRAINER_U);return;}const clients=LS.get("tbf_clients",INIT);const found=clients.find(c=>(c.name.toLowerCase().replace(/\s/g,"")=== name.toLowerCase().replace(/\s/g,"")||c.email?.toLowerCase()===name.toLowerCase())&&c.password===pass);if(found){LS.set("tbf_session",{id:found.id,role:"client"});onLogin(found);}else setErr("Name/email or password incorrect.");};
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
          const mapped=data.map(r=>mapClientRow(r)).filter(Boolean);
          setClients(mapped);
        }catch(e){console.warn("Client map error:",e.message);}
        setClientsLoaded(true);
      })
      .catch(e=>{console.warn("tbf_clients fetch failed:",e.message);setClientsLoaded(true);});
  },[autoTrainer]);

  // Auto-refresh when tab becomes visible again
  useEffect(()=>{
    if(!supabase||!autoTrainer) return;
    const onVisible=()=>{
      if(document.visibilityState!=='visible') return;
      supabase.from('tbf_clients').select('*').then(({data,error})=>{
        if(error||!data) return;
        try{
          const mapped=data.map(r=>({
            id:r.email.toLowerCase().replace(/[^a-z0-9]/g,'_'),
            name:r.name,email:r.email,role:'client',
            phase:r.phase||1,focus:r.focus||'',
            restrictions:safeJson(r.restrictions,[]),
            goal:r.goal_template||'posture',
            days:safeJson(r.days,TEMPLATES[r.goal_template||'posture']?.days||[]),
            notes:safeJson(r.notes,[]),
            nutrition:safeJson(r.nutrition,null),
            cardioPlan:safeJson(r.cardio_plan,null),
            assessment:safeJson(r.assessment,null),
            macros:safeJson(r.macros,null),
            calories:safeJson(r.calories,null),
            meal_foods:safeJson(r.meal_foods,null),
            pain_logs:safeJson(r.pain_logs,[]),
            schedule:[],password:''
          }));
          setClients(mapped);
          // Update viewing if open
          setViewing(prev=>prev?mapped.find(c=>c.email===prev.email)||prev:null);
        }catch(e){console.warn('Refresh map error:',e.message);}
      });
    };
    document.addEventListener('visibilitychange',onVisible);
    return ()=>document.removeEventListener('visibilitychange',onVisible);
  },[autoTrainer]);

  // ── PHASE 6: Realtime subscriptions ────────────────────────────────────
  useEffect(()=>{
    if(!supabase||!autoTrainer) return;
    const channel=supabase.channel('tbf_trainer_sync')
      .on('postgres_changes',{
        event:'*', schema:'public', table:'tbf_clients'
      }, payload=>{
        const r=payload.new;
        if(!r?.email) return;
        const cid=r.email.toLowerCase().replace(/[^a-z0-9]/g,'_');
        const updated={
          id:cid, name:r.name, email:r.email, role:'client',
          phase:r.phase||1, focus:r.focus||'',
          restrictions:safeJson(r.restrictions,[]),
          goal:r.goal_template||'posture',
          days:safeJson(r.days,TEMPLATES[r.goal_template||'posture']?.days||[]),
          notes:safeJson(r.notes,[]),
          nutrition:safeJson(r.nutrition,null),
          cardioPlan:safeJson(r.cardio_plan,null),
          assessment:safeJson(r.assessment,null),
          macros:safeJson(r.macros,null),
          calories:safeJson(r.calories,null),
          meal_foods:safeJson(r.meal_foods,null),
          pain_logs:safeJson(r.pain_logs,[]),
          schedule:[],password:'',supabase_id:r.id
        };
        setClients(prev=>prev.map(c=>c.email===r.email?{...c,...updated}:c));
        setViewing(prev=>prev?.email===r.email?{...prev,...updated}:prev);
      })
      .on('postgres_changes',{
        event:'*', schema:'public', table:'tbf_workout_logs'
      }, ()=>{
        // Workout log changed — refresh will happen on next visibility
        console.log('Workout log updated by client');
      })
      .subscribe(status=>console.log('Realtime trainer status:',status));
    return ()=>supabase.removeChannel(channel);
  },[autoTrainer])

  // Load own profile if signed in as client
  useEffect(()=>{
    if(!supabase||!supabaseUser||autoTrainer) return;
    supabase.from("tbf_clients").select("*").eq("email",supabaseUser.email).single()
      .then(({data,error})=>{
        if(error||!data) return;
        try{
          setClientSelfProfile({...mapClientRow(data),schedule:[]
          });
        }catch(e){console.warn("Client self profile:",e.message);}
      })
      .catch(e=>console.warn("Client self load:",e.message));
  },[supabaseUser?.email,autoTrainer]);

  // Client: reload own data when app comes to foreground
  useEffect(()=>{
    if(!supabase||!supabaseUser||autoTrainer) return;
    const refresh=()=>{
      if(document.visibilityState!=='visible') return;
      loadClientRow(supabaseUser.email).then(row=>{
        if(row) setClientSelfProfile(mapClientRow(row));
      });
    };
    document.addEventListener('visibilitychange',refresh);
    return ()=>document.removeEventListener('visibilitychange',refresh);
  },[supabaseUser?.email,autoTrainer]);

  // PHASE 6: Realtime — client sees trainer's program changes instantly
  useEffect(()=>{
    if(!supabase||!supabaseUser||autoTrainer) return;
    const channel=supabase.channel('my_program_rt')
      .on('postgres_changes',{event:'UPDATE',schema:'public',table:'tbf_clients',
        filter:`email=eq.${supabaseUser.email}`},
        payload=>{
          const mapped=mapClientRow(payload.new);
          if(!mapped) return;
          setClientSelfProfile(mapped);
          console.log('⚡ Program updated by trainer');
        })
      .subscribe();
    return ()=>supabase.removeChannel(channel);
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
          notes:JSON.stringify(c.notes||[]),
          nutrition:JSON.stringify(c.nutrition||{}),
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
    // 1. Update local state immediately (snappy UI)
    const list=clients.map(c=>c.id===updated.id?updated:c);
    setClients(list);
    if(viewing?.id===updated.id) setViewing(updated);

    // 2. Supabase is the ONLY truth — always upsert full record
    if(supabase&&updated.email){
      const trainerId=supabaseUser?.id||window.__tbf_user?.id||'1c5ec66c-9a39-40fb-8d08-e79d6dd6785f';
      const {error}=await supabase.from('tbf_clients').upsert({
        email:        updated.email,
        name:         updated.name||'',
        phase:        updated.phase||1,
        focus:        updated.focus||'',
        restrictions: JSON.stringify(updated.restrictions||[]),
        goal_template:updated.goal||'posture',
        days:         JSON.stringify(updated.days||[]),
        notes:        JSON.stringify(updated.notes||[]),
        nutrition:    JSON.stringify(updated.nutrition||{}),
        cardio_plan:  JSON.stringify(updated.cardioPlan||null),
        assessment:   JSON.stringify(updated.assessment||null),
        macros:       JSON.stringify(updated.macros||null),
        calories:     JSON.stringify(updated.calories||null),
        meal_foods:   JSON.stringify(updated.meal_foods||null),
        pain_logs:    JSON.stringify(updated.pain_logs||[]),
        trainer_id:   trainerId,
      },{onConflict:'email'});
      if(error) console.error('handleClientUpdate failed:',error.message);
      else console.log('✓ Saved to Supabase:',updated.name);
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
          h("div",{style:{color:C.tealLight,fontSize:11,marginTop:1}},viewing?"Client View":"Trainer Dashboard"),
          !viewing&&h("button",{
            onClick:async()=>{
              if(!supabase) return alert("Supabase not connected");
              // Get current session user ID
              const {data:{session}}=await supabase.auth.getSession();
              const trainerId=session?.user?.id||window.__tbf_user?.id||null;
              if(!trainerId) return alert("Not signed in to Supabase. Please sign out and sign back in.");
              let synced=0;
              const errors=[];
              for(const c of clients){
                if(!c.email) continue;
                // Only include fields that actually have data — never overwrite with empty
                const safeStr=(v,fallback)=>v&&v!=="null"&&JSON.stringify(v)!=="null"?JSON.stringify(v):null;
                const payload={
                  email:c.email,
                  name:c.name||"",
                  phase:c.phase||1,
                  focus:c.focus||"",
                  goal_template:c.goal||"posture",
                  restrictions:JSON.stringify(c.restrictions||[]),
                  trainer_id:trainerId
                };
                // Only add data fields if they actually contain something
                if(c.days?.length>0) payload.days=JSON.stringify(c.days);
                if(c.notes?.length>0) payload.notes=JSON.stringify(c.notes);
                if(c.nutrition) payload.nutrition=JSON.stringify(c.nutrition);
                if(c.cardioPlan) payload.cardio_plan=JSON.stringify(c.cardioPlan);
                const lsAssess=LS.get(`tbf_assess_${c.id}`,null);
                if(lsAssess) payload.assessment=JSON.stringify(lsAssess);
                const lsMacros=LS.get(`tbf_macros_${c.id}`,null);
                if(lsMacros) payload.macros=JSON.stringify(lsMacros);
                const lsCals=LS.get(`tbf_cals_${c.id}`,null);
                if(lsCals) payload.calories=JSON.stringify(lsCals);
                const lsMeals=LS.get(`tbf_meals_${c.id}`,null);
                if(lsMeals) payload.meal_foods=JSON.stringify(lsMeals);
                const lsPain=LS.get(`tbf_pain_${c.id}`,[]);
                if(lsPain?.length>0) payload.pain_logs=JSON.stringify(lsPain);
                const {error}=await supabase.from("tbf_clients").upsert(payload,{onConflict:"email"});
                if(error){
                  console.error("Failed to sync",c.name,":",error.message,error.details,error.hint);
                  errors.push(c.name+": "+error.message);
                } else {
                  synced++;
                  console.log("Synced",c.name);
                }
              }
              if(errors.length>0){
                alert("Synced "+synced+" of "+clients.length+". Errors: "+errors.slice(0,3).join(" | "));
              } else {
                alert("✓ All "+synced+" clients synced to cloud!");
              }
            },
            style:{marginTop:6,background:"rgba(42,157,143,0.3)",border:"1px solid "+C.teal,
            color:C.teal,borderRadius:6,padding:"5px 12px",fontSize:12,cursor:"pointer",fontWeight:"bold"}
          },"☁ Push All to Cloud")
        ),
        h("div",{style:{display:"flex",gap:8}},
          viewing&&h(Btn,{onClick:()=>setViewing(null),color:C.navy2,small:true},"← Roster"),
          h(Btn,{onClick:()=>{if(window.__tbf_signout)window.__tbf_signout();},color:C.red,small:true},"Sign Out")
        )
      ),
      showAdd&&h(AddClientForm,{onAdd:handleAddClient,onClose:()=>setShowAdd(false)}),
      !viewing&&h(TrainerRoster,{clients:clients.filter(c=>c.role==="client"),onSelect:c=>setViewing(c),onAddClient:()=>setShowAdd(true),onDeleteClient:handleDeleteClient}),
      viewing&&h(ErrorBoundary,null,h(ClientView,{client:viewing,isTrainer:true,onClientUpdate:handleClientUpdate}))
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
        // Push to Cloud button for trainer
        effectiveIsTrainer&&!viewing&&h("button",{
          onClick:async()=>{
            if(!supabase) return alert("Supabase not connected");
            let synced=0;
            for(const c of clients){
              if(!c.email) continue;
              const {error}=await supabase.from("tbf_clients").upsert({
                email:c.email,name:c.name,phase:c.phase,focus:c.focus,
                goal_template:c.goal||"posture",
                restrictions:JSON.stringify(c.restrictions||[]),
                days:JSON.stringify(c.days||[]),
                notes:JSON.stringify(c.notes||LS.get(`tbf_notes_${c.id}`,[])),
                nutrition:JSON.stringify(c.nutrition||{}),
                cardio_plan:JSON.stringify(c.cardioPlan||null),
                assessment:JSON.stringify(LS.get(`tbf_assess_${c.id}`,null)),
                macros:JSON.stringify(LS.get(`tbf_macros_${c.id}`,null)),
                calories:JSON.stringify(LS.get(`tbf_cals_${c.id}`,null)),
                meal_foods:JSON.stringify(LS.get(`tbf_meals_${c.id}`,null)),
                pain_logs:JSON.stringify(LS.get(`tbf_pain_${c.id}`,[])),
                trainer_id:window.__tbf_user?.id||null
              },{onConflict:"email"});
              if(!error) synced++;
            }
            alert("☁ Synced "+synced+" of "+clients.length+" clients to Supabase");
          },
          style:{background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.25)",
          color:C.white,borderRadius:6,padding:"4px 10px",fontSize:11,cursor:"pointer",marginTop:6,display:"block"}
        },"☁ Push All to Cloud"),
        h("div",{style:{color:C.tealLight,fontSize:11,marginTop:1}},effectiveIsTrainer&&!viewing?"Trainer Dashboard":effectiveIsTrainer?"Client View":(effectiveUser?.focus||"").split("|")[0]?.trim()||"My Program")
      ),
      h("div",{style:{display:"flex",gap:8}},
        effectiveIsTrainer&&viewing&&h(Btn,{onClick:()=>setViewing(null),color:C.navy2,small:true},"← Roster"),
        h(Btn,{onClick:()=>{if(window.__tbf_signout)window.__tbf_signout();else handleLogout();},color:C.red,small:true},"Sign Out")
      )
    ),
    showAdd&&h(AddClientForm,{onAdd:handleAddClient,onClose:()=>setShowAdd(false)}),
    effectiveIsTrainer&&!viewing&&h(TrainerRoster,{clients:clients.filter(c=>c.role==="client"),onSelect:c=>setViewing(c),onAddClient:()=>setShowAdd(true),onDeleteClient:handleDeleteClient}),
    effectiveIsTrainer&&viewing&&h(ErrorBoundary,null,h(ClientView,{client:viewing,isTrainer:true,onClientUpdate:handleClientUpdate})),
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


function ChangePassword() {
  const [oldPw, setOldPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [status, setStatus] = useState(""); // "" | "loading" | "success" | "error"
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);

  const submit = async () => {
    setMsg(""); setStatus("");
    if (!newPw || newPw.length < 6) { setMsg("New password must be at least 6 characters."); setStatus("error"); return; }
    if (newPw !== confirmPw) { setMsg("Passwords do not match."); setStatus("error"); return; }
    setStatus("loading");
    try {
      // Re-authenticate first with old password
      const user = (await supabase.auth.getUser()).data?.user;
      if (!user?.email) throw new Error("Not signed in");
      const { error: signInErr } = await supabase.auth.signInWithPassword({ email: user.email, password: oldPw });
      if (signInErr) throw new Error("Current password is incorrect.");
      const { error } = await supabase.auth.updateUser({ password: newPw });
      if (error) throw error;
      setStatus("success");
      setMsg("Password updated successfully.");
      setOldPw(""); setNewPw(""); setConfirmPw("");
    } catch(e) {
      setStatus("error");
      setMsg(e.message || "Could not update password.");
    }
  };

  if (!supabase) return null;

  return h(Card, null,
    h(CardH, {t:"CHANGE PASSWORD", color:C.navy}),
    h(CardB, null,
      !open
        ? h(Btn, {onClick:()=>setOpen(true), color:C.grayLight, fg:C.navy, full:true}, "Change Password")
        : h("div", null,
            h(Fld, {label:"CURRENT PASSWORD"}, h("input", {value:oldPw, onChange:e=>setOldPw(e.target.value), type:"password", placeholder:"Current password",
              style:{width:"100%",padding:"10px 12px",border:`1.5px solid ${C.grayBorder}`,borderRadius:8,fontSize:13,fontFamily:"Georgia,serif",marginBottom:0}})),
            h(Fld, {label:"NEW PASSWORD"}, h("input", {value:newPw, onChange:e=>setNewPw(e.target.value), type:"password", placeholder:"New password (min 6 chars)",
              style:{width:"100%",padding:"10px 12px",border:`1.5px solid ${C.grayBorder}`,borderRadius:8,fontSize:13,fontFamily:"Georgia,serif"}})),
            h(Fld, {label:"CONFIRM NEW PASSWORD"}, h("input", {value:confirmPw, onChange:e=>setConfirmPw(e.target.value), type:"password", placeholder:"Confirm new password",
              style:{width:"100%",padding:"10px 12px",border:`1.5px solid ${C.grayBorder}`,borderRadius:8,fontSize:13,fontFamily:"Georgia,serif"}})),
            msg && h("div", {style:{
              fontSize:12, padding:"8px 10px", borderRadius:6, marginBottom:10, textAlign:"center",
              background: status==="success" ? "#ECFDF5" : "#FFF0EE",
              color: status==="success" ? C.green : C.red
            }}, msg),
            h("div", {style:{display:"flex", gap:8}},
              h(Btn, {onClick:submit, color:C.teal, full:true, disabled:status==="loading"},
                status==="loading" ? "Updating..." : "Update Password"),
              h(Btn, {onClick:()=>{setOpen(false);setMsg("");setStatus("");}, color:C.grayLight, fg:C.gray},
                "Cancel")
            )
          )
    )
  );
}


function AuthGate() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authMode, setAuthMode] = useState("login");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [err, setErr] = useState("");
  const [profile, setProfile] = useState(null);
  const [resetMode, setResetMode] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  // Detect if user arrived via password reset email link
  const [newPasswordMode, setNewPasswordMode] = useState(() => {
    return window.location.hash.includes("type=recovery") ||
           window.location.hash.includes("access_token") &&
           window.location.hash.includes("type=recovery");
  });
  const [pwChanged, setPwChanged] = useState(false);

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

  // User clicked reset link in email — show new password form
  if (newPasswordMode) {
    return h("div",{style:{minHeight:"100vh",background:C.navy,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24}},
      h("div",{style:{color:C.white,fontWeight:"bold",fontSize:24,letterSpacing:1,marginBottom:4}},"True Balance"),
      h("div",{style:{color:C.tealLight,fontSize:11,letterSpacing:3,marginBottom:32}},"FITNESS"),
      h("div",{style:{background:C.white,borderRadius:14,padding:28,width:"100%",maxWidth:360}},
        h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:16,marginBottom:6,textAlign:"center"}},"Set New Password"),
        h("div",{style:{fontSize:12,color:C.gray,textAlign:"center",marginBottom:20}},"Choose a strong password for your account."),
        pwChanged
          ? h("div",{style:{color:C.green,textAlign:"center",fontSize:14,lineHeight:1.6}},
              "✓ Password updated! ",
              h("button",{onClick:()=>{setNewPasswordMode(false);window.location.hash="";},
                style:{color:C.teal,background:"none",border:"none",cursor:"pointer",fontFamily:"Georgia,serif",fontSize:14,textDecoration:"underline"}},
              "Sign in")
            )
          : h("div",null,
              h("input",{value:newPw,onChange:e=>setNewPw(e.target.value),placeholder:"New password",type:"password",
                style:{width:"100%",padding:"11px 13px",border:`1.5px solid ${C.grayBorder}`,borderRadius:7,fontSize:14,marginBottom:10,fontFamily:"Georgia,serif"}}),
              h("input",{value:confirmPw,onChange:e=>setConfirmPw(e.target.value),placeholder:"Confirm new password",type:"password",
                style:{width:"100%",padding:"11px 13px",border:`1.5px solid ${C.grayBorder}`,borderRadius:7,fontSize:14,marginBottom:10,fontFamily:"Georgia,serif"}}),
              err&&h("div",{style:{color:C.red,fontSize:12,marginBottom:10,textAlign:"center"}},err),
              h("button",{
                onClick:async()=>{
                  setErr("");
                  if(!newPw||newPw.length<6){setErr("Password must be at least 6 characters.");return;}
                  if(newPw!==confirmPw){setErr("Passwords do not match.");return;}
                  const{error}=await supabase.auth.updateUser({password:newPw});
                  if(error){setErr(error.message);}else{setPwChanged(true);}
                },
                style:{width:"100%",background:C.teal,color:C.white,border:"none",borderRadius:7,padding:"12px",fontFamily:"Georgia,serif",fontSize:14,fontWeight:"bold",cursor:"pointer"}
              },"Update Password")
            )
      )
    );
  }

  if (!session) {
    return h("div",{style:{minHeight:"100vh",background:C.navy,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24}},
      h("div",{style:{color:C.white,fontWeight:"bold",fontSize:28,letterSpacing:1}},"True Balance"),
      h("div",{style:{color:C.tealLight,fontSize:12,letterSpacing:3,marginBottom:36}},"FITNESS"),
      h("div",{style:{background:C.white,borderRadius:14,padding:28,width:"100%",maxWidth:360,boxShadow:"0 8px 32px rgba(0,0,0,0.35)"}},
        h("div",{style:{fontWeight:"bold",color:C.navy,fontSize:16,marginBottom:20,textAlign:"center"}},
          authMode==="login"?"Sign In to Your Plan":"Create Your Account"
        ),
        h("input",{value:email,onChange:e=>setEmail(e.target.value),placeholder:"Email address",type:"email",style:{...istyle,marginBottom:12}}),
                !resetMode&&h("input",{value:pw,onChange:e=>setPw(e.target.value),placeholder:"Password",type:"password",style:{width:"100%",padding:"11px 13px",border:`1.5px solid ${C.grayBorder}`,borderRadius:7,fontSize:14,marginBottom:10,fontFamily:"Georgia,serif"}}),
        err&&h("div",{style:{color:C.red,fontSize:12,marginBottom:12,textAlign:"center"}},err),
        h("button",{
onClick:async()=>{
            setErr("");
            if(resetMode){
              const{error}=await supabase.auth.resetPasswordForEmail(email,{redirectTo:window.location.origin});
              if(error){setErr(error.message);}else{setResetSent(true);}
              return;
            }
            if(authMode==="login"){
              const{error}=await supabase.auth.signInWithPassword({email,password:pw});
              if(error) setErr(error.message);
            }else{
              const{error}=await supabase.auth.signUp({email,password:pw});
              if(error){setErr(error.message);return;}
            }
          },
          style:{background:C.teal,color:C.white,border:"none",borderRadius:7,padding:"12px",fontFamily:"Georgia,serif",fontSize:14,fontWeight:"bold",cursor:"pointer",width:"100%",marginBottom:10}
        },resetMode?(resetSent?"✓ Reset Email Sent":"Send Reset Link"):authMode==="login"?"Sign In":"Create Account"),
        resetSent&&h("div",{style:{color:C.green,fontSize:12,textAlign:"center",marginBottom:8,lineHeight:1.5}},"Check your email for a password reset link. Click it to set a new password."),
        !resetMode&&h("button",{
          onClick:()=>{setAuthMode(authMode==="login"?"signup":"login");setErr("");setResetSent(false);},
          style:{background:"none",border:`1.5px solid ${C.grayBorder}`,borderRadius:7,color:C.navy,fontSize:13,padding:"10px",fontFamily:"Georgia,serif",cursor:"pointer",width:"100%",marginBottom:8}
        },authMode==="login"?"New client? Create account":"← Back to Sign In"),
        authMode==="login"&&!resetMode&&h("button",{
          onClick:()=>{setResetMode(true);setErr("");setResetSent(false);},
          style:{background:"none",border:"none",color:C.teal,fontSize:12,cursor:"pointer",fontFamily:"Georgia,serif",textDecoration:"underline",width:"100%"}
        },"Forgot password?"),
        resetMode&&h("button",{
          onClick:()=>{setResetMode(false);setResetSent(false);setErr("");},
          style:{background:"none",border:"none",color:C.gray,fontSize:12,cursor:"pointer",fontFamily:"Georgia,serif",textDecoration:"underline",width:"100%"}
        },"← Back to Sign In"),h("div",{style:{marginTop:16,fontSize:11,color:C.gray,textAlign:"center"}},"True Balance Fitness · 228-229-6865")
      )
    );
  }

  if (profile && profile.subscription_status === "canceled") {
    return h(SubscribeScreen, null);
  }

  window.__tbf_signout = () => supabase.auth.signOut();
  window.__tbf_user = session.user;
  const TRAINER_EMAILS = [TRAINER_EMAIL, "aja2012@gmail.com"].filter(Boolean);
  const isTrainerEmail = TRAINER_EMAILS.some(e => e.toLowerCase() === (session.user.email||"").toLowerCase());
  return h(App, {supabaseUser: session.user, supabaseProfile: profile, autoTrainer: isTrainerEmail});
}

export default AuthGate;
