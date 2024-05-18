import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";

const data = [{
        name: "Pull-up",
        equipment: "Pull-up bar",
        muscles_targeted: ["Latissimus dorsi", "Biceps", "Forearms"],
        instructions: [
            "Grab the pull-up bar with an overhand grip slightly wider than shoulder-width apart.",
            "Hang freely with your arms fully extended.",
            "Pull yourself up until your chin is over the bar, keeping your core engaged.",
            "Lower yourself back to the starting position with control.",
            "Repeat for the desired number of repetitions.",
        ],
    },
    {
        name: "Lunges",
        equipment: "None",
        muscles_targeted: ["Quadriceps", "Hamstrings", "Glutes", "Calves"],
        instructions: [
            "Stand with your feet hip-width apart.",
            "Take a step forward with one leg and lower your body until both knees are bent at a 90-degree angle.",
            "Ensure your front knee is directly above your ankle and your back knee is hovering just above the ground.",
            "Push through your front heel to return to the starting position.",
            "Repeat on the other side, alternating legs.",
            "Continue alternating legs for the desired number of repetitions.",
        ],
    },
    {
        name: "Bench Press",
        equipment: "Barbell or Dumbbells, Bench",
        muscles_targeted: ["Chest", "Shoulders", "Triceps"],
        instructions: [
            "Lie on a flat bench with your feet flat on the ground.",
            "Grip the barbell or dumbbells slightly wider than shoulder-width apart, arms fully extended.",
            "Lower the weight to your chest, keeping your elbows at a 45-degree angle to your body.",
            "Press the weight back up to the starting position, fully extending your arms.",
            "Repeat for the desired number of repetitions.",
        ],
    },
    {
        name: "Plank",
        equipment: "None",
        muscles_targeted: ["Core", "Shoulders", "Back"],
        instructions: [
            "Start in a push-up position with your hands directly under your shoulders.",
            "Engage your core and maintain a straight line from your head to your heels.",
            "Hold this position for the desired duration, breathing steadily.",
            "Avoid sagging your hips or arching your back.",
            "Lower yourself to the ground to rest and repeat for multiple sets.",
        ],
    },
    {
        name: "Russian Twists",
        equipment: "Weight (optional)",
        muscles_targeted: ["Obliques", "Core"],
        instructions: [
            "Sit on the floor with your knees bent and feet lifted off the ground.",
            "Lean back slightly to engage your core muscles.",
            "Hold a weight or medicine ball with both hands.",
            "Rotate your torso to the right, bringing the weight towards the floor beside your hip.",
            "Return to the center and then rotate to the left, repeating the motion.",
            "Continue alternating sides for the desired number of repetitions.",
        ],
    },
    {
        name: "Burpees",
        equipment: "None",
        muscles_targeted: ["Full Body"],
        instructions: [
            "Start in a standing position.",
            "Drop into a squat position with your hands on the ground.",
            "Kick your feet back, landing in a plank position.",
            "Perform a push-up, lowering your chest to the ground.",
            "Push up to return to the plank position.",
            "Jump your feet back to the squat position.",
            "Explode upwards into a jump, reaching your arms overhead.",
            "Land softly and immediately lower back into the squat position to begin the next repetition.",
        ],
    },
    {
        name: "Dumbbell Bicep Curl",
        equipment: "Dumbbells",
        muscles_targeted: ["Biceps", "Forearms"],
        instructions: [
            "Stand with a dumbbell in each hand, arms fully extended by your sides.",
            "Keep your elbows close to your torso.",
            "Curl the weights while keeping your upper arms stationary.",
            "Continue curling until the dumbbells are at shoulder level.",
            "Lower the weights back down to the starting position.",
            "Repeat for the desired number of repetitions.",
        ],
    },
];

function ExercisePage() {
    const [isInput, setIsInput] = useState("");

    const [isExercise, setIsExercise] = useState([]);

    useEffect(() => {
        setIsExercise(data);
    }, []);

    const handleClick = async() => {
        try {
            const response = await axios.get(
                "https://api.api-ninjas.com/v1/exercises?muscle=" + isInput, {
                    headers: { "X-Api-Key": "uVt2fmKMtZ0lLnwZz0nT+g==PkCKLquVaz3xOBUl" },
                }
            );
            setIsExercise(response.data);
            console.log("this is the response", isExercise);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return ( <
        div className = "container mx-auto my-[6%]" >
        <
        h1 className = "mb-10 text-5xl font-semibold text-[#001529] text-center" >
        Exercises that help you get in shape { " " } <
        /h1>{" "} <
        center >
        <
        div className = "flex  justify-center gap-3 items-center w-[50%] " >
        <
        Input onChange = {
            (e) => setIsInput(e.target.value) }
        placeholder = "Search specific muscles ex.biceps" /
        >
        <
        Button onClick = { handleClick } > Search < /Button>{" "} <
        /div>{" "} <
        /center>{" "} {
            isExercise.length > 0 &&
                isExercise.map((item, index) => ( <
                    div className = ""
                    key = { index } >
                    <
                    h3 className = "font-bold color-[#28267d] text-xl mt-4" > { " " } { item.name } { " " } <
                    /h3>{" "} <
                    hr className = "my-2 h-3 color-[#cccce7]" / >
                    <
                    div >
                    <
                    h4 className = "font-bold mt-2" > Equipment: { item.equipment } < /h4>{" "} <
                    div className = "flex gap-3" >
                    <
                    h4 className = "font-bold mt-2" > Targeted Muscles: < /h4>{" "} {
                        item.muscles_targeted.map((muscle, idx) => ( <
                            h4 key = { idx }
                            className = "font-bold mt-2" > { " " } { muscle }, { " " } <
                            /h4>
                        ))
                    } { " " } <
                    /div>{" "} <
                    h4 className = "font-bold mt-2" > Instructions: < /h4>{" "} {
                        item.instructions.map((instruction, idx) => ( <
                            p key = { idx }
                            className = "text-justify" > { " " } { instruction } { " " } <
                            /p>
                        ))
                    } { " " } <
                    /div>{" "} <
                    /div>
                ))
        } { " " } <
        /div>
    );
}

export default ExercisePage;