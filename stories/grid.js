import React from 'react';
import './../src/grid.css';

export default function Grid() {
    return (
        <section className="container">
            <div className="columns">
                <div className="column col-6 u-debug">col-xs-6</div>
                <div className="column col-6 u-debug">col-xs-6</div>
                <div className="column col-3 u-debug">col-xs-3</div>
                <div className="column col-3 u-debug">col-xs-3</div>
            </div>
            <div className="columns">
                <div className="column col-6">col-6</div>
                <div className="column col-3">col-3</div>
                <div className="column col-2">col-2</div>
                <div className="column col-1">col-1</div>
            </div>

            <div className="columns col-gapless">
                <div className="column col-6">col-6</div>
                <div className="column col-6">col-6</div>
            </div>

            <div className="columns col-oneline">
                <div>
                    <div className="column col-8">col-8</div>
                    <div className="column col-8">col-8</div>
                </div>
            </div>
            <div className="mhd-Divider" />
            <div className="u-debug container grid-xs">
                <div className="columns">
                    <div className="column col-xs-6">col-xs-6</div>
                    <div className="column col-xs-3">col-xs-3</div>
                    <div className="column col-xs-3">col-xs-3</div>
                </div>
            </div>
            <div className="mhd-Divider" />
            <div className="u-debug container grid-sm">
                <div className="columns">
                    <div className="column col-xs-6">col-xs-6</div>
                    <div className="column col-xs-3">col-xs-3</div>
                    <div className="column col-xs-3">col-xs-3</div>
                </div>
            </div>
            <div className="mhd-Divider" />
            <div className="u-debug container grid-md">
                <div className="columns">
                    <div className="column col-xs-6">col-xs-6</div>
                    <div className="column col-xs-3">col-xs-3</div>
                    <div className="column col-xs-3">col-xs-3</div>
                </div>
            </div>
            <div className="mhd-Divider" />
            <div className="u-debug container grid-lg">
                <div className="columns">
                    <div className="column col-xs-6">col-xs-6</div>
                    <div className="column col-xs-3">col-xs-3</div>
                    <div className="column col-xs-3">col-xs-3</div>
                </div>
            </div>
            <div className="mhd-Divider" />
            <div className="u-debug container grid-xl">
                <div className="columns">
                    <div className="column col-xs-6">col-xs-6</div>
                    <div className="column col-xs-3">col-xs-3</div>
                    <div className="column col-xs-3">col-xs-3</div>
                </div>
            </div>
        </section>
    );
}
