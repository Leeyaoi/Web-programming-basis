<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV</title>
</head>

<body style="
margin: auto;
width: 100%;
display: block;
background-color: #b8cfd6;">
    <div style="
    background-color: crimson;
    margin: auto;
    width: 1000px;
    height: 1000px;">
        <div style="
        width: 320px;
        height: 1000px;
        float: left;
        background-color: #000;
        color: #fff;">
            <img src="pic.jpg" alt="my photo" style="
            width: 300px;
            border-radius: 50%;
            margin: 10px;">
            <div style="
            font-family: sans-serif;
            margin-left: 30px;
            margin-right: 30px;">
                <div id="education">
                    <h3 style="
                   font-family: sans-serif;
                   text-align: left;
                   ">EDUCATION</h3>
                    <hr>
                    <ul>
                        <li><a href="http://firstlyceum.by">MGOL1</a>2018-2022</li>
                        <li><a href="http://bru.by">BRU</a>2022-2026</li>
                    </ul>
                </div>
                <div id="reference">
                    <h3 style="
                    font-family: sans-serif;
                    text-align: left;
                    ">REFERENCE</h3>
                    <hr>
                    <p>You can call my mom. She will tell you I'm the best</p>
                </div>
                <div id="contacts">
                    <h3 style="
                    font-family: sans-serif;
                    text-align: left;
                    ">CONTACTS</h3>
                    <hr>
                    <p>A1: +375447084688</p>
                    <p>Life: +375333371184</p>
                    email: <a href="gmail.com">darya.ya2608@gmail.com</a>
                </div>
            </div>
        </div>
        <div style="
        width: 680px;
        height: 1000px;
        float: left;
        background-color: #fff;">
            <div style="
            background-color: yellow;
            justify-content: center;
            display: block;
            margin-top: 30px;
            margin-bottom: 30px;
            padding-top: 30px;
            padding-bottom: 30px;">
                <h1 style="
                font-family: sans-serif;
                text-align: center;
                margin: auto;">DARYA YASKO</h1>
                <h2 style="
                font-family: sans-serif;
                text-align: center;
                margin: auto;">C# developer</h2>
            </div>
            <div style="
            margin-left: 30px;
            margin-right: 30px;">
                <div id="about">
                    <h3 style="
                    font-family: sans-serif;
                    text-align: left;
                    ">ABOUT ME</h3>
                    <hr>
                    <p>My name is Dasha. I am very good at my job.</p>
                </div>
                <div id="experience">
                    <h3 style="
                    font-family: sans-serif;
                    text-align: left;
                    ">WORK EXPIERIENCE</h3>
                    <hr>
                    <ul>
                        <li>0.5 years tech support in online english shcool</li>
                        <li>1 year child teacher in jewish youth program</li>
                    </ul>
                </div>
                <div id="skills">
                    <h3 style="
                    font-family: sans-serif;
                    text-align: left;
                    ">SKILLS</h3>
                    <hr>
                    <ol>
                        <li>C# 1.5 years</li>
                        <li>C++ 1 year</li>
                        <li>Python 1.5 years</li>
                        <li>HTML 1 week</li>
                        <li>CSS 1 week</li>
                        <li>english level B2</li>
                        <li>ITstep academy 2 years</li>
                    </ol>
                </div>
                <div id="code_ex">
                    <h3 style="
                    font-family: sans-serif;
                    text-align: left;
                    ">CODE EXAMPLE</h3>
                    <hr>
                    <code>
                        using System.Text.Json;<br>
                        <br>
                        Person tom = new Person("Tom", 37);<br>
                        string json = JsonSerializer.Serialize(tom);<br>
                        Console.WriteLine(json);<br>
                        Person? restoredPerson = JsonSerializer.Deserialize&lt;Person&lt;(json);<br>
                        Console.WriteLine(restoredPerson?.Name); // Tom <br>
                        <br>
                        class Person <br>
                        {<br>
                        &nbsp;    public string Name { get;} <br>
                        &nbsp;    public int Age { get; set; } <br>
                        &nbsp;    public Person(string name, int age) <br>
                        &nbsp;    { <br>
                        &nbsp;    &nbsp;    Name = name; <br>
                        &nbsp;    &nbsp;    Age = age; <br>
                        &nbsp;    } <br>
                        } <br>
                    </code>
                </div>
            </div>
        </div>
    </div>

</body>

</html>
