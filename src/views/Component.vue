<script setup>
    import Card from '../component/Card.vue';
    import Alert from '../component/Alert.vue';
    import Badge from '../component/Badge.vue';
    import Breadcrumb from '../component/Breadcrumb.vue';
    import Button from '../component/Button.vue';
    import TextField from '../component/TextField.vue';
    import Textarea from '../component/Textarea.vue';
    import Select from '../component/Select.vue';
    import Checkbox from '../component/Checkbox.vue';
    import Radio from '../component/Radio.vue';
    import FileInput from '../component/FileInput.vue';
    import Switch from '../component/Switch.vue';
    import { reactive, watch } from "vue";

    const state = reactive({
        darkMode: false,
    });

    watch(() => state.darkMode, (val) => {
        if (val) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    })
</script>

<template>
    <Card title="Alert">
        <Alert color="blue">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt necessitatibus numquam asperiores a veniam amet repellat inventore assumenda ipsa odio dolorum obcaecati temporibus suscipit et cupiditate ipsum, sint culpa eos?</Alert>
        <Alert color="red" border="l">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt necessitatibus numquam asperiores a veniam amet repellat inventore assumenda ipsa odio dolorum obcaecati temporibus suscipit et cupiditate ipsum, sint culpa eos?</Alert>
    </Card>

    <Card title="Badge">
        <Badge>primary badge</Badge>
        <Badge size="sm" color="red">red badge</Badge>
        <Badge size="md" color="green">green badge</Badge>
        <Badge size="lg" color="yellow">yellow badge</Badge>
        <Badge size="xl" color="purple">purple badge</Badge>
    </Card>

    <Card title="Breadcrumb">
        <Breadcrumb :items="[
            {
                path: '/',
                title: 'Home',
            },
            {
                path: '/data',
                title: 'Data',
            },
            {
                path: '/data/create',
                title: 'Create'
            }
        ]"></Breadcrumb>
    </Card>

    <Card title="Button">
        <Button size="xs">primary button</Button>
        <Button size="sm" color="red">red button</Button>
        <Button size="md" color="green">green button</Button>
        <Button size="lg" color="yellow">yellow button</Button>
        <Button size="xl" color="purple">purple button</Button>
    </Card>

    <Card title="Form Input">
        <TextField label="Username" placeholder="Enter Username"></TextField>
        <TextField type="date" label="Date" placeholder="Enter Date"></TextField>
        <Textarea label="Address" placeholder="Enter Your Address"></Textarea>
        <Select label="Country">
            <option value="">- Select Country -</option>
            <option value="1">Indonesia</option>
            <option value="2">Malaysia</option>
            <option value="3">Vietnam</option>
            <option value="4">Thailand</option>
        </Select>
        <Checkbox label="Show password"></Checkbox>
        <Radio label="I am 18 years old"></Radio>
        <FileInput label="Upload Photo"></FileInput>
        <Switch v-model="state.darkMode" label="Dark Mode"></Switch>
    </Card>
</template>