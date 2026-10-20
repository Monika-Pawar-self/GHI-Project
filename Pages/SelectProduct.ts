
import { Locator , Page} from '@playwright/test'

export class SelectProduct {

page:Page
LOB: Locator    
ProductName: Locator

constructor(page:Page){
this.page = page;
this.LOB = this.page.locator('[class="style-card-title"]').nth(4)
this.ProductName = this.page.locator('[class="product-body d-flex align-items-center"]').nth(0)

}

async SelectProduct(){

    
    await this.LOB.click()
    await this.ProductName.click()
}

}