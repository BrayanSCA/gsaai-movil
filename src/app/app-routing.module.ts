import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'biofabrica',
    loadChildren: () => import('./biofabrica/biofabrica.module').then( m => m.BiofabricaPageModule)
  },
  {
    path: 'modulos',
    loadChildren: () => import('./modulos/modulos.module').then( m => m.ModulosPageModule)
  },
  {
    path: 'mp-entrada',
    loadChildren: () => import('./mp-entrada/mp-entrada.module').then( m => m.MpEntradaPageModule)
  },
  {
    path: 'cp-nuevo',
    loadChildren: () => import('./cp-nuevo/cp-nuevo.module').then( m => m.CpNuevoPageModule)
  },
  {
    path: 'cp-combinar',
    loadChildren: () => import('./cp-combinar/cp-combinar.module').then( m => m.CpCombinarPageModule)
  },
  {
    path: 'cp-actualizar',
    loadChildren: () => import('./cp-actualizar/cp-actualizar.module').then( m => m.CpActualizarPageModule)
  },
  {
    path: 'bitacoras',
    loadChildren: () => import('./bitacoras/bitacoras.module').then( m => m.BitacorasPageModule)
  },
  {
    path: 'abonos-entrada',
    loadChildren: () => import('./abonos-entrada/abonos-entrada.module').then( m => m.AbonosEntradaPageModule)
  },
  {
    path: 'abonos-salida',
    loadChildren: () => import('./abonos-salida/abonos-salida.module').then( m => m.AbonosSalidaPageModule)
  },
  {
    path: 'parametros',
    loadChildren: () => import('./parametros/parametros.module').then( m => m.ParametrosPageModule)
  },
  {
    path: 'insumos',
    loadChildren: () => import('./insumos/insumos.module').then( m => m.InsumosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'confi-usuarios',
    loadChildren: () => import('./confi-usuarios/confi-usuarios.module').then( m => m.ConfiUsuariosPageModule)
  },
  {
    path: 'conf-sis',
    loadChildren: () => import('./conf-sis/conf-sis.module').then( m => m.ConfSisPageModule)
  },
  {
    path: 'fichas',
    loadChildren: () => import('./fichas/fichas.module').then( m => m.FichasPageModule)
  },
  {
    path: 'roles',
    loadChildren: () => import('./roles/roles.module').then( m => m.RolesPageModule)
  },
  {
    path: 'zonas',
    loadChildren: () => import('./zonas/zonas.module').then( m => m.ZonasPageModule)
  },
  {
    path: 'materias-primas',
    loadChildren: () => import('./materias-primas/materias-primas.module').then( m => m.MateriasPrimasPageModule)
  },
  {
    path: 'actividades-secun',
    loadChildren: () => import('./actividades-secun/actividades-secun.module').then( m => m.ActividadesSecunPageModule)
  },
  {
    path: 'procedencias',
    loadChildren: () => import('./procedencias/procedencias.module').then( m => m.ProcedenciasPageModule)
  },
  {
    path: 'mejoradores',
    loadChildren: () => import('./mejoradores/mejoradores.module').then( m => m.MejoradoresPageModule)
  },
  {
    path: 'lista-insumos',
    loadChildren: () => import('./lista-insumos/lista-insumos.module').then( m => m.ListaInsumosPageModule)
  },

  {
    path: 'modif-ficha/:cod_ficha',
    loadChildren: () => import('./modif-ficha/modif-ficha.module').then( m => m.ModifFichaPageModule)
  },
  {
    path: 'modif-roles/:cod_rol',
    loadChildren: () => import('./modif-roles/modif-roles.module').then( m => m.ModifRolesPageModule)
  },
  {
    path: 'modif-zona/:cod_zona',
    loadChildren: () => import('./modif-zona/modif-zona.module').then( m => m.ModifZonaPageModule)
  },
  {
    path: 'modif-materias-p/:cod_mp',
    loadChildren: () => import('./modif-materias-p/modif-materias-p.module').then( m => m.ModifMateriasPPageModule)
  },
  {
    path: 'modif-insumos/:cod_insumo',
    loadChildren: () => import('./modif-insumos/modif-insumos.module').then( m => m.ModifInsumosPageModule)
  },
  {
    path: 'modif-procedencias/:cod_procedencia',
    loadChildren: () => import('./modif-procedencias/modif-procedencias.module').then( m => m.ModifProcedenciasPageModule)
  },
  {
    path: 'modif-mejoradores/:cod_mejoradores',
    loadChildren: () => import('./modif-mejoradores/modif-mejoradores.module').then( m => m.ModifMejoradoresPageModule)
  },
  {
    path: 'modif-acti-secun/:cod_secund',
    loadChildren: () => import('./modif-acti-secun/modif-acti-secun.module').then( m => m.ModifActiSecunPageModule)
  },
  {
    path: 'modif-usuarios/:di',
    loadChildren: () => import('./modif-usuarios/modif-usuarios.module').then( m => m.ModifUsuariosPageModule)
  },
  {
    path: 'confi-perfil',
    loadChildren: () => import('./confi-perfil/confi-perfil.module').then( m => m.ConfiPerfilPageModule)
  },
  {
    path: 'historial-pila/:cod_zona',
    loadChildren: () => import('./historial-pila/historial-pila.module').then( m => m.HistorialPilaPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
