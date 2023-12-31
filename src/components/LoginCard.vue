<script setup lang="ts">
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useForm } from "vee-validate";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Notyf } from "notyf";
import { ref } from "vue";

const notyf = new Notyf();
const isLoading = ref<boolean>(false);

const formSchema = toTypedSchema(
  z.object({
    email: z.string().min(2).max(50).email(),
    password: z.string().min(1),
    rememberMe: z.boolean().default(false).optional(),
  })
);

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    rememberMe: false,
  },
});

const onSubmit = form.handleSubmit(async ({ email, password }) => {
  try {
    isLoading.value = true;

    console.log(email, password);

    notyf.success("Login successfully!");
  } catch (error) {
    notyf.error("Wrong credentials, please try again!");
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <Card class="flex flex-col w-full gap-y-5 max-w-md px-10 py-5">
    <span class="text-3xl font-bold">Sign in to your account</span>
    <form @submit="onSubmit" class="flex flex-col gap-y-5">
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Your email</FormLabel>
          <FormControl>
            <Input
              type="email"
              placeholder="johndoe@email.com"
              v-bind="componentField"
              class="p-6 focus-visible:ring-transparent"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input
              type="password"
              placeholder="Password"
              v-bind="componentField"
              class="p-6 focus-visible:ring-transparent"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit" class="w-full" :disabled="isLoading">
        Submit
      </Button>
    </form>
    <p>Don't have an account yet?</p>
  </Card>
</template>
