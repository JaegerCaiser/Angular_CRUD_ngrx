import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, CONFIG_STORE_MODULE),
        StoreDevtoolsModule.instrument(CONFIG_STORE_DEV_MODULE),
    EffectsModule.forRoot(CONFIG_EFFECTS_MODULE)
    ]
})
export class ViniculaStoreModule {}