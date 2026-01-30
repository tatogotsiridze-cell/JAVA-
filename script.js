const age = prompt ("Please enter your age:");
const hastiket = prompt ("do you have ticket :");
const p=prompt ("are you  whit parent :");
const lt = prompt("are you late :");
if (age >= 18 && hastiket === "yes" && lt === "no") {
    alert("  you can enter ");
} else if (age < 13 && p === "yes" && hastiket === "yes" ) {
    alert("You can enter.");
} else  ( hastiket === "yes" && lt === "yes") {
    alert("You cant enter.");
} 
