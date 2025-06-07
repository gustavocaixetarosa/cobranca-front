import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], search: string, keys: string[] = []): any[] {
    if (!items) return [];
    if (!search) return items;

    search = search.toLowerCase();

    return items.filter(item => {
      return keys.some(key => {
        const value = item[key];
        return value?.toString().toLowerCase().includes(search);
      });
    });
  }

}
