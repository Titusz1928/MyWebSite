import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient('', '');
  }

  async getProjects() {
    const { data, error } = await this.supabase
      .from('projects')
      .select('*')
      .order('id', { ascending: true });  // Ensure rows are ordered by 'id'
  
    if (error) {
      console.error('Error fetching projects:', error);
      throw new Error(error.message);
    }
  
    return data;
  }

   // Method to fetch a project by id
   async getProjectById(id: number): Promise<any> {
    const { data, error } = await this.supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();  // We use single() to return a single project if the id matches

    if (error) {
      console.error('Error fetching project by ID:', error);
      throw new Error(error.message);
    }
    return data;
  }

  async getUniqueMaintags(): Promise<string[]> {
    const { data, error } = await this.supabase
      .rpc('get_unique_maintags');

    if (error) {
      console.error('Error fetching maintags:', error);
      throw new Error(error.message);
    }

    return data.map((item: any) => item.maintag);
  }

  async getUniqueTags(): Promise<string[]> {
    const { data, error } = await this.supabase
      .rpc('get_unique_tags');

    if (error) {
      console.error('Error fetching tags:', error);
      throw new Error(error.message);
    }

    return data.map((item: any) => item.tag);
  }

}
