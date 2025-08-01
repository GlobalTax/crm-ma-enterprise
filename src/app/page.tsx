﻿"use client";

import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">M&A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">CRM M&A Enterprise</h1>
                <p className="text-xs text-slate-500">Professional Deal Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Nuevo Deal
              </button>
              <div className="h-8 w-8 bg-slate-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <div className="text-center py-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Bienvenido al CRM M&A Enterprise
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Gestión profesional de transacciones de fusiones y adquisiciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Pipeline Total</h3>
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">€</span>
                </div>
              </div>
              <p className="text-3xl font-bold text-green-600 mb-2">€2.4B</p>
              <p className="text-sm text-green-600 flex items-center">
                <span className="mr-1"></span>
                +12.5% vs mes anterior
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Deals Activos</h3>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xl"></span>
                </div>
              </div>
              <p className="text-3xl font-bold text-blue-600 mb-2">47</p>
              <p className="text-sm text-blue-600 flex items-center">
                <span className="mr-1"></span>
                +3 nuevos esta semana
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Tasa de Cierre</h3>
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 text-xl"></span>
                </div>
              </div>
              <p className="text-3xl font-bold text-emerald-600 mb-2">68%</p>
              <p className="text-sm text-emerald-600 flex items-center">
                <span className="mr-1"></span>
                +5% vs trimestre anterior
              </p>
            </div>
          </div>

          <div className="text-center py-8 border-t border-slate-200">
            <p className="text-slate-500">
              CRM M&A Enterprise - Versión 1.0.0 | Powered by Next.js 15
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
