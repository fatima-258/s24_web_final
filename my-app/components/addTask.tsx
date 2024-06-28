"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})


const AddTask = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
      }

  return (
    <div>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormControl>
                <Input placeholder="shadcn" {...field} className="w-full"/>
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="flex-none ">Add Task <span className="text-purple-600 text-2xl pl-2">+</span> </Button>
      </form>
    </Form>
    </div>
  )
}

export default AddTask