import { z } from 'zod'

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[\d\s\-\(\)\+]+$/, 'Please enter a valid phone number').optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message is too long'),
  community: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Schedule tour form validation schema
export const scheduleTourSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[\d\s\-\(\)\+]+$/, 'Please enter a valid phone number'),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  preferredTime: z.string().min(1, 'Please select a preferred time'),
  community: z.string().min(1, 'Please select a community'),
  notes: z.string().max(500, 'Notes are too long').optional(),
})

export type ScheduleTourFormData = z.infer<typeof scheduleTourSchema>

