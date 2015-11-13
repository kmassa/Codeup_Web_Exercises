
<?php
  var_dump($_GET);
  var_dump($_POST);
?>

<!Doctype html>

<html>
    <h2> User Login </h2
    <form method="GET" action="/my_first_form.php">
        <p>
            <label for="username">Username</label>
            <input id="username" name="name" type="text" placeholder="username">
        </p>
        <p>
            <label for="password">Password</label>
            <input id="password" name="password" type="password" placeholder="password">
        </p>
        <p>
            <!-- <input type="hidden" name="used_id" value="100"> -->
        </p>

        <p>
            <!-- <input type="submit" value="login"> -->
            <button> login </button>
        </p>

        <!-- <textarea id="review" name="review" row="5" Column = "40"> text area </textarea> -->


    </form>
    <h2> Compose an email </h2>

    <form method="post" action="/my_first_form.php">
        <p>
            <label for="to"> To </label>
            <input id="to" name="to" type="text"    >
        </p>

         <label>Would you like to save a copy in your sent folder?<input type="checkbox" checked="checked" id="yes" name="yes[]" value="yes"> yes </label>   
        <p>
            <label for="from"> From </label>
            <input id="from " name="from" type="text" required>
        </p>
        <p>
            <label for="subject"> Subject </label>
            <input id="subject " name="subject" type="text">
        </p>
        <label for ="email_body"> Message </label>
        <textarea id="email_body" name="email_body" row="5" cols="40"> </textarea>

       <!--  <p>
            <form>
                Select your favorite color:
                <input type="color" name="favcolor">

            <button> submit </button>
            </form>
        </p>
        <p>
            <form action="action_page.php">
         Search Google:
                <input type="search" name="googlesearch">
                <input type="submit">
                </form>
             <button> submit </button>
            </form> -->


        <!-- <input type"="checkbox" id="mailing_list" name="mailing list"
        <label for mailing list"> Send more spam </label>

        <p> What OS do you use? </p>

        <label> operating system 1<input type="checkbox" id="os1" name="os[]" value="linux"> Linux</label>

        <label>operating system 2<input type="checkbox" id="os1" name="os[]" value="osx"> osx</label>

        <label>operating system 3<input type="checkbox" id="os1" name="os[]" value="linux"> Linux</label>

        <button type="submit"> Submit </button>
 -->
        <!-- <p> what are favorit bands? </P>
            <label>
                <input type="radio" name="band" value="metallica"> Metallica
                <input type="radio" name="band" value="barney"> Barney -->

    </form>

    <form>

        <h2> Multiple choice test</h2>

        <p> Which is the best Power Ranger? </p>

        <label> 
            Red <input type="radio" Name="ranger" Value="red">
            <input type="radio" Name="ranger" Value="blue">blue

        <p> Really cool dinosaurs </p>

        <label> velociraptor <input type="checkbox" id="dino" Name=dino[] value="velociraptor"> </label>
        <label> stegosaurus <input type="checkbox" id="dino" Name=dino[] value="stegosaurus"> </label>
        <label> T rex <input type="checkbox" id="dino" Name=dino[] value="t_rex"> </label>    

        <button type="submit"> Submit </button>

    </form>
        <p>
        <label for="iCarly"> Did iCarly rock? </label>
            <select id="icarly" name="icarly">
                <option value="1"> yes </option>
                <option value="0"> no </option>
            </select>
        </p>
        <p>
         <label for="gymmnastics"> Gymnastics you like to watch?</label>
            <select id="gymanastics" name="gymnastics[]" multiple>
                <option value="acro"> acro</option>
                <option value="artistic"> artistic</option>       
                <option value="rhythmic"> rhythmic</option>
                <option value="tramp"> Tumbling and Trampoline</option>
            </select>
        </p>
        <button type="submit"> Submit </button>


    </form>

        <H2> Select Testing </h2>

    <form>
        <label for="birthday"> Birthday (date and time) </label>
            <input type="datetime-local" name="birthday">
            <button type="submit"> submit </button>

    </form>

    <form>

        <label for="magic day"> magic day </label>
            <input type="date" Name="magic day" min="1967-02-01" max="1975-12-31" >
            <button tyoe="submit"> Now </button>
    </form



   
        


        <!--     <select>
         <p>       
        Satisfaction: <input type="range" size="2" name="satisfaction" min="1" max="5" value="3">
        <button type="submit"> Submit </button>
        </p>

        <p>
        age: <input type="number" size="6" name="age" min="18" max="25">
        <button type="submit"> Submit </button>
        </p> -->


<!-- 
        <label for="transmission">Select your transmission type: </label>
            <select id="transmission" name="transmission">
                <option value="1">Automatic</option>
                 <option value="2">Manual</option>
            </select>

        <label for="os">What operating systems have you used? </label>
              <select id="os" name="os[]" multiple>
                <option value="linus">Linux</option>
                <option value="osx">OS X</option>
                <option value="windows">Windows</option>
            </select> -->
        <!-- <button type="submit"> Submit </button> -->

</html>