
import { Locator , Page} from '@playwright/test'

export class SelectProduct {

page:Page
LOB: Locator    
ProductName: Locator

constructor(page:Page){
this.page = page;
this.LOB = this.page.getByRole('link', { name: 'Employee Benefits 2 Products' })
this.ProductName = this.page.getByRole('heading',{name:" Group Personal Accident "})

}

async SelectProduct(){

    await this.LOB.click()
    await this.ProductName.click()
}

}