export class DynamicTablePage {

    getTableValue(row, header){
        cy.xpath("//span[@role='columnheader' and text()='" + header + "']//preceding::span[@role='columnheader']").its('length').then((column) => {
            cy.xpath("//span[text()='" + row + "']//following-sibling::span[" + column + "]").invoke('text').as('tableValue');
        });
    }

    getChromeCPUValue(){
        cy.get('.bg-warning').invoke('text').then(text => {
            const chromeCPUValue = text.replace('Chrome CPU: ','');
            cy.wrap(chromeCPUValue).as('chromeCPUValue');
        })
    }

    verifyChromeCPUValue(row, header){
        this.getTableValue(row, header);
        this.getChromeCPUValue();
        cy.get('@chromeCPUValue').then((chromeCPUValue) => {
            cy.get('@tableValue').then((tableValue) => {
                expect(chromeCPUValue).to.equal(tableValue);
            })
        })
    }

}