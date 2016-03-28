<?php
$greeting = 'Hello';
$names =  [
	'Chris',
	'Mars',
	'James',
	'Bernie',
	'Rachel'
];

function echoName($greeting, $name)
{
	echo "{$greeting} {$name}\n";
}

echoName("Hola", $names[0]);

// foreach ($names as $studentName) {
// foreach ($names as $index => $studentName) {
// 	if ($index == 1){
// 		echo "Shut up, {$studentName}\n";
// 	}
// 	echo "{$greeting} {$studentName}\n";
// }

// $student = [
// 	'first_name' => 'Kate',
// 	'last_name' => 'McKaterson',
// 	'cohort'  => "Balboa"
// ];
//modify array, get stuff in
// $student['is_awesome'] = true;

// echo "Hello " . $student ['first_name'] . ' ' . $student['last_name'];
// //get stuff out
// var_dump($student);

// $greeting = 'Hello';
// $name = 'James';

// $names =  [
// 	'Chris',
// 	'Mars',
// 	'James',
// 	'Bernie',
// 	'Rachel'
// ];

//also
// $names = Array  (
// 	'Chris'
// 	'Mars'
// 	'James'
// 	'Bernie'
// 	'Rachel'
// );

// echo 'Shut up ' .  $names[1];

// echo "\n";

// echo 'I have ' . count($names);

// $names[] = 'Boris';

// var_dump($names);

//connection_aborted(oid)nate
// $message = $greeting . ' ' . $name;

// intrepulation
// $message = "{$greeting} {$name}";

// $message = 'Hello Codeup!';

// var_dump($message);

// echo $message;
?>


<!-- <!DOCTYPE html>
<html>
<head>
	<title> this is PHP! </title>
</head>
<body>
	<h1>This is PHP </h1> -->
<?php include '../templates/header.php' ?>

<!-- Use colon in html, curly brackets in own block at top -->
	<ul>
	<?php foreach ($names as $studentName) : ?>
		<li><?php echo $studentName ?> </li>
		<li><?= $studentName ?> </li>
	<?php endforeach; ?>
	<?ul>
	
</body>
</html>
