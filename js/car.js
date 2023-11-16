document.getElementById("question").textContent = "Starter cranks?";

const check = () => {
    const yes = document.getElementById("yes").checked;

    switch (document.getElementById("question").textContent) {
        case "Starter cranks?":
            if (yes) {
                document.getElementById("question").textContent =
                    "Engine fires?";
            } else {
                document.getElementById("question").textContent =
                    "Starter spins?";
            }
            break;
        case "Starter spins?":
            if (yes) {
                document.getElementById("question").textContent =
                    "Solenoid stuck, not powered. Missing teeth on flywheel.";
                $("#answers").hide();
            } else {
                document.getElementById("question").textContent =
                    "Battery read over 12V?";
            }
            break;
        case "Battery read over 12V?":
            if (yes) {
                document.getElementById("question").textContent =
                    "Cleaned terminals?";
            } else {
                document.getElementById("question").textContent =
                    "Jump start or pop start car and check if battery is charging.";
                $("#answers").hide();
            }
            break;
        case "Cleaned terminals?":
            if (yes) {
                document.getElementById("question").textContent =
                    "With car in park or neutral, use heavy jumper or screwdriver to bypass starter relay solenoid. Test starter.";
                $("#answers").hide();
            } else {
                document.getElementById("question").textContent =
                    "Clean battery terminals and connectors, engine ground.";
                $("#answers").hide();
            }
            break;
        case "Engine fires?":
            if (yes) {
                document.getElementById("question").textContent =
                    "Starts and stalls?";
            } else {
                document.getElementById("question").textContent =
                    "Spark to plugs?";
            }
            break;
        case "Spark to plugs?":
            if (yes) {
                document.getElementById("question").textContent =
                    "Fuel to filter?";
            } else {
                document.getElementById("question").textContent =
                    "Spark from coil?";
            }
            break;
        case "Spark from coil?":
            if (yes) {
                document.getElementById("question").textContent =
                    "Mechanical distributor?";
            } else {
                document.getElementById("question").textContent =
                    "12V+ at coil primary?";
            }
            break;
        case "12V+ at coil primary?":
            if (yes) {
                document.getElementById("question").textContent =
                    "Test coil for internal short. Check secondary output wire resistance.";
                $("#answers").hide();
            } else {
                document.getElementById("question").textContent =
                    "Ignition system wiring, voltage regulator.";
                $("#answers").hide();
            }
            break;
        case "Mechanical distributor??":
            if (yes) {
                document.getElementById("question").textContent =
                    "Check condenser, points or magnetic pick-up, rotor, or cap damage.";
                $("#answers").hide();
            } else {
                document.getElementById("question").textContent =
                    "For electronic distribution, see model manual for diagnostic checks.";
                $("#answers").hide();
            }
            break;
        case "Fuel to filter?":
            if (yes) {
                document.getElementById("question").textContent =
                    "Fuel injected?";
            } else {
                document.getElementById("question").textContent =
                    "Vapor lock, fuel pump, blockage.";
                $("#answers").hide();
            }
            break;
        case "Fuel injected?":
            if (yes) {
                document.getElementById("question").textContent =
                    "Single point, check throttle body. Electronic multi-point, separate diagnostic.";
                $("#answers").hide();
            } else {
                document.getElementById("question").textContent =
                    "Try starter spray in carb, throttle open.";
                $("#answers").hide();
            }
            break;
        case "Starts and stalls?":
            if (yes) {
                document.getElementById("question").textContent =
                    "Check OBD, blink code?";
            } else {
                document.getElementById("question").textContent =
                    "Ignition timing, fuel problem, cranking too flow - battery, starter.";
                $("#answers").hide();
            }
            break;

        case "Check OBD, blink code?":
            if (yes) {
                document.getElementById("question").textContent =
                    "Stalls on key release to run?";
            } else {
                document.getElementById("question").textContent =
                    "Read OBD or OBD II or check for blink code access.";
                $("#answers").hide();
            }
            break;
        case "Stalls on key release to run?":
            if (yes) {
                document.getElementById("question").textContent =
                    'Ignition "run" circuit or column key switch failure. Ring out with meter';
                $("#answers").hide();
            } else {
                document.getElementById("question").textContent =
                    "Stalls in rain?";
            }
            break;
        case "Stalls in rain?":
            if (yes) {
                document.getElementById("question").textContent =
                    "Check for cracked coil, distributer. Check visible electrical arcing running in dark.";
                $("#answers").hide();
            } else {
                document.getElementById("question").textContent =
                    "Stalls warm?";
            }
        case "Stalls warm?":
            if (yes) {
                document.getElementById("question").textContent =
                    "Adjust idle, blow out fuel filter, check fuel pump output. Check vacuum leak or sensor failure.";
                $("#answers").hide();
            } else {
                document.getElementById("question").textContent =
                    "On cold stalling, check for stuck choke, EGR. Check for vacuum leak.";
                $("#answers").hide();
            }
            break;
        default:
            break;
    }

    document.getElementById("yes").checked = false;
    document.getElementById("no").checked = false;
};

document.getElementById("yes").addEventListener("click", check, false);
document.getElementById("no").addEventListener("click", check, false);
