<script>
	export let name;
	export let number;
	import ContactCard from "./ContactCard.svelte";

	let title=''
	let description = ''
	let image ='https://i.pinimg.com/736x/91/e3/e8/91e3e822ac393fce619b93df53d153b9--cute-kittens-cutest-kittens-ever.jpg'

	$: upperCaseName = name.toUpperCase()

	$: console.log(name)

	$: if (name === 'Taylor') {
		number = 1
	}

	const increment = () => {
		number += 1
	}

	const changeName = () => {
		name = 'Taylor'
	}

	const updateAnyName = (e) => {
		name = e.target.value
	}
</script>

<style>
	h1 {
		color: blue;
	}
</style>

<h1>Hello {upperCaseName}! You've eaten {number} cookies today!</h1>
<button on:click={increment} >Eat more cookies</button>
<button on:click={changeName} >Change name to Taylor</button>
<p>Enter your name, job title, description</p>
<input type="text" value={name} on:input={updateAnyName} />
<input type="text" bind:value={title} />
<input type="text" bind:value={image} />
<textarea rows="3" bind:value={description}></textarea>

<ContactCard 
userName ={name} 
jobTitle={title} 
userImage={image} 
description={description} />